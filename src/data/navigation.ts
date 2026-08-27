export interface NavLink {
	label: string;
	href: string;
}

export const primaryNav: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Projetos", href: "/projects" },
	{ label: "Notas Técnicas", href: "/technical-notes" },
	{ label: "Comunicados", href: "/announcements" },
	{ label: "Pesquisa", href: "/research" },
	{ label: "Sobre", href: "/about" },
	{ label: "Contato", href: "/contact" },
	{ label: "AIRES", href: "/aires" },
];
