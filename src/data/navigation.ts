import { researchLinks } from "@/data/research";

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

export const aboutLinks: NavLink[] = [
	{ label: "Diretoria", href: "/about/board" },
	{ label: "Missão AIRES", href: "/about/mission" },
];

export const primaryNav: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Projetos", href: "/projects" },
	{ label: "Notas Técnicas", href: "/technical-notes" },
	{ label: "Comunicados", href: "/announcements" },
	{ label: "Pesquisa", items: researchLinks },
	{ label: "Blog", href: "/blog" },
	{ label: "Sobre", items: aboutLinks },
	{ label: "Contato", href: "/contact" },
];
