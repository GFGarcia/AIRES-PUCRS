import rss from "@astrojs/rss";

import { siteConfig } from "@/data/site";
import { useTranslations, type Locale } from "@/i18n/utils";
import { getLocalizedCollection } from "@/lib/i18n-content";

/** Collections that show up in the feed, paired with the path they live under. */
const FEED_COLLECTIONS = [
	{ collection: "blog", basePath: "blog" },
	{ collection: "announcements", basePath: "announcements" },
] as const;

/** Builds the locale's combined blog + announcements feed, newest first. */
export async function buildFeed(locale: Locale, site: URL | undefined) {
	const t = useTranslations(locale);
	const localePrefix = locale === "pt" ? "" : `/${locale}`;

	const groups = await Promise.all(
		FEED_COLLECTIONS.map(async ({ collection, basePath }) => {
			const entries = await getLocalizedCollection(collection, locale);
			return entries.map(({ entry, slug }) => ({
				title: entry.data.title,
				description: entry.data.description,
				pubDate: entry.data.publishDate,
				link: `${localePrefix}/${basePath}/${slug}/`,
			}));
		}),
	);

	const items = groups.flat().sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: siteConfig.name,
		description: t("site.description"),
		site: site ?? "https://www.airespucrs.org",
		customData: `<language>${locale === "pt" ? "pt-BR" : "en"}</language>`,
		items,
	});
}
