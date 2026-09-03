import { getCollection } from "astro:content";
import type { CollectionEntry, CollectionKey } from "astro:content";

/** Fetches a collection's entries for one locale subfolder (e.g. "pt/", "en/") and strips the locale prefix from the slug. */
export async function getLocalizedCollection<C extends CollectionKey>(collection: C, locale: string) {
	const entries = await getCollection(
		collection,
		(entry) => entry.id.startsWith(`${locale}/`) && !entry.data.draft,
	);
	return entries.map((entry) => ({ entry, slug: entry.id.slice(locale.length + 1) }));
}

/** getStaticPaths helper for a collection's `[slug].astro` route, scoped to one locale. */
export async function getLocalizedStaticPaths<C extends CollectionKey>(collection: C, locale: string) {
	const entries = await getCollection(
		collection,
		(entry) => entry.id.startsWith(`${locale}/`) && !entry.data.draft,
	);
	return entries.map((entry) => ({
		params: { slug: entry.id.slice(locale.length + 1) },
		props: { entry: entry as CollectionEntry<C> },
	}));
}
