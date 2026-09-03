import { getRelativeLocaleUrl } from "astro:i18n";

import { defaultLocale, locales, ui, type Locale, type UiKey } from "./ui";

export { defaultLocale, locales };
export type { Locale };

export function useTranslations(locale: string | undefined) {
	const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;

	return function t(key: UiKey, vars?: Record<string, string | number>) {
		let value: string = ui[safeLocale][key] ?? ui[defaultLocale][key];
		if (vars) {
			for (const [name, replacement] of Object.entries(vars)) {
				value = value.replaceAll(`{${name}}`, String(replacement));
			}
		}
		return value;
	};
}

/** Builds the equivalent path for `locale`, e.g. "/blog/post" + "en" -> "/en/blog/post". */
export function localizePath(locale: Locale, path: string) {
	return getRelativeLocaleUrl(locale, path);
}

/** Strips a locale prefix from a pathname, e.g. "/en/blog/post" + "en" -> "/blog/post". */
export function unlocalizePath(locale: string | undefined, pathname: string) {
	const prefix = locale && locale !== defaultLocale ? `/${locale}` : "";
	if (!prefix || !pathname.startsWith(prefix)) return pathname;
	return pathname.slice(prefix.length) || "/";
}

/** Like localizePath, but leaves external links (http(s), mailto, tel, etc.) untouched. */
export function localizeHref(locale: Locale, href: string) {
	return /^[a-z][a-z0-9+.-]*:/i.test(href) ? href : localizePath(locale, href);
}
