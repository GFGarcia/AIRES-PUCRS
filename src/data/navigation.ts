import { researchLinks } from "@/data/research";
import type { useTranslations } from "@/i18n/utils";

export interface NavLink {
	label: string;
	href: string;
}

export interface NavDropdown {
	label: string;
	items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isNavDropdown(item: NavItem): item is NavDropdown {
	return "items" in item;
}

type T = ReturnType<typeof useTranslations>;

export function getAboutLinks(t: T): NavLink[] {
	return [
		{ label: t("nav.aboutBoard"), href: "/about/board" },
		{ label: t("nav.aboutMission"), href: "/about/mission" },
	];
}

export function getPrimaryNav(t: T): NavItem[] {
	return [
		{ label: t("nav.home"), href: "/" },
		{ label: t("nav.projects"), href: "/projects" },
		{ label: t("nav.technicalNotes"), href: "/technical-notes" },
		{ label: t("nav.announcements"), href: "/announcements" },
		{ label: t("nav.research"), items: researchLinks },
		{ label: t("nav.blog"), href: "/blog" },
		{ label: t("nav.about"), items: getAboutLinks(t) },
		{ label: t("nav.contact"), href: "/contact" },
	];
}
