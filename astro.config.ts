import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { satteri } from "@astrojs/markdown-satteri";

import { publicImageAttrs } from "./src/lib/public-image-attrs";
// Canonical origin of the deployed site. Override per environment with SITE_URL
// (e.g. a Netlify/Vercel deploy preview) — everything else derives from `Astro.site`.
const site = process.env.SITE_URL ?? "https://airespucrs.org";

// https://astro.build/config
export default defineConfig({
	site,

	integrations: [
		react(),
		sitemap({
			i18n: {
				defaultLocale: "pt",
				locales: { pt: "pt-BR", en: "en" },
			},
			filter: (page) => !page.includes("/404"),
		}),
	],

	i18n: {
		locales: ["pt", "en"],
		defaultLocale: "pt",
		routing: {
			prefixDefaultLocale: false,
		},
	},

	// Prefetch on hover for every internal link, so navigations feel instant.
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "hover",
	},

	fonts: [
		{
			// Self-hosted from the installed @fontsource-variable/geist package.
			// Only the latin subsets are declared, so the preload hints Astro emits
			// cover exactly the two files a pt-BR/en site actually needs.
			provider: fontProviders.local(),
			name: "Geist Variable",
			cssVariable: "--font-geist",
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
			options: {
				variants: [
					{
						weight: "100 900",
						style: "normal",
						src: ["@fontsource-variable/geist/files/geist-latin-wght-normal.woff2"],
						unicodeRange: [
							"U+0000-00FF",
							"U+0131",
							"U+0152-0153",
							"U+02BB-02BC",
							"U+02C6",
							"U+02DA",
							"U+02DC",
							"U+0304",
							"U+0308",
							"U+0329",
							"U+2000-206F",
							"U+20AC",
							"U+2122",
							"U+2191",
							"U+2193",
							"U+2212",
							"U+2215",
							"U+FEFF",
							"U+FFFD",
						],
					},
					{
						weight: "100 900",
						style: "normal",
						src: ["@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2"],
						unicodeRange: [
							"U+0100-02BA",
							"U+02BD-02C5",
							"U+02C7-02CC",
							"U+02CE-02D7",
							"U+02DD-02FF",
							"U+0304",
							"U+0308",
							"U+0329",
							"U+1D00-1DBF",
							"U+1E00-1E9F",
							"U+1EF2-1EFF",
							"U+2020",
							"U+20A0-20AB",
							"U+20AD-20C0",
							"U+2113",
							"U+2C60-2C7F",
							"U+A720-A7FF",
						],
					},
				],
			},
		},
	],

	markdown: {
		// Gives `public/`-hosted markdown images (the animated WebP/GIF that can't go
		// through astro:assets) the intrinsic size and lazy loading the pipeline
		// would have added. See src/lib/public-image-attrs.ts.
		processor: satteri({ hastPlugins: [publicImageAttrs] }),
	},

	image: {
		// Emit responsive srcset/sizes for <Image>/<Picture> and markdown images.
		responsiveStyles: true,
		layout: "constrained",
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
