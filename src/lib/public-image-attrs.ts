import { readFileSync } from "node:fs";
import path from "node:path";

import { defineHastPlugin } from "satteri";

/**
 * Markdown images that point at an absolute `public/` path bypass `astro:assets`
 * entirely, so they render as a bare `<img src alt>` — no intrinsic size (layout
 * shift) and no lazy loading (the browser fetches them all up front).
 *
 * Every post here uses relative `../../assets/...` paths and goes through the
 * image pipeline; the exceptions are animated WebP/GIF, which Astro's image
 * service would flatten to a single frame, so they have to stay in `public/`.
 * This plugin gives those the same `width`/`height`/`loading`/`decoding`
 * treatment the pipeline applies, without editing any markdown.
 *
 * A Sätteri hast plugin rather than a rehype one: `filter: ['img']` keeps the
 * match in Rust, so only `<img>` nodes cross into JS.
 */

const PUBLIC_DIR = "public";

interface Dimensions {
	width: number;
	height: number;
}

/** Frame dimensions of a WebP, read from the RIFF container. */
function webpSize(buf: Buffer): Dimensions | null {
	if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;

	switch (buf.toString("ascii", 12, 16)) {
		// Extended format — animated files always use this. The canvas size is
		// the per-frame size, which is what we want: the stacked-frame height of
		// an animation (e.g. 600x82654 for 143 frames) would be nonsense here.
		case "VP8X":
			return {
				width: buf.readUIntLE(24, 3) + 1,
				height: buf.readUIntLE(27, 3) + 1,
			};
		// Simple lossy: dimensions live in the VP8 keyframe header, behind the
		// 3-byte start code.
		case "VP8 ":
			if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return null;
			return {
				width: buf.readUInt16LE(26) & 0x3fff,
				height: buf.readUInt16LE(28) & 0x3fff,
			};
		// Simple lossless: 14 bits each, packed little-endian after the signature.
		case "VP8L": {
			const bits = buf.readUInt32LE(21);
			return {
				width: (bits & 0x3fff) + 1,
				height: ((bits >> 14) & 0x3fff) + 1,
			};
		}
		default:
			return null;
	}
}

/** Dimensions from a GIF logical screen descriptor. */
function gifSize(buf: Buffer): Dimensions | null {
	const magic = buf.toString("ascii", 0, 6);
	if (magic !== "GIF87a" && magic !== "GIF89a") return null;
	return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
}

/** Read once per path — the same image is referenced from both the pt and en post. */
const sizeCache = new Map<string, Dimensions | null>();

function intrinsicSize(src: string): Dimensions | null {
	const cached = sizeCache.get(src);
	if (cached !== undefined) return cached;

	let size: Dimensions | null = null;
	try {
		// `src` is a root-relative URL path; strip the leading slash and any query.
		const file = path.join(PUBLIC_DIR, decodeURIComponent(src.split(/[?#]/)[0]));
		const buf = readFileSync(file);
		size = path.extname(file).toLowerCase() === ".gif" ? gifSize(buf) : webpSize(buf);
	} catch {
		// Missing or unreadable file — leave the tag untouched rather than guessing.
	}

	sizeCache.set(src, size);
	return size;
}

export const publicImageAttrs = defineHastPlugin({
	name: "public-image-attrs",
	element: {
		filter: ["img"],
		visit(node, ctx) {
			const { src, width, height, loading, decoding } = node.properties ?? {};

			// Only absolute in-site paths: pipeline images already carry every
			// attribute, and remote images aren't ours to measure.
			if (typeof src !== "string" || !src.startsWith("/") || src.startsWith("/_astro/")) return;

			if (loading == null) ctx.setProperty(node, "loading", "lazy");
			if (decoding == null) ctx.setProperty(node, "decoding", "async");

			if (width == null && height == null) {
				const size = intrinsicSize(src);
				if (size) {
					ctx.setProperty(node, "width", size.width);
					ctx.setProperty(node, "height", size.height);
				}
			}
		},
	},
});
