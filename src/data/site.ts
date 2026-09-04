export const siteConfig = {
	name: "AIRES PUCRS",
	fullName: "AI Robotics Ethics Society",
	email: "airespucrs@gmail.com",
	location: "Porto Alegre, Rio Grande do Sul, Brasil",
	streetAddress: "Av. Ipiranga, 6681 - Partenon, Porto Alegre - RS, 90619-900",
};

export interface SocialLink {
	label: string;
	href: string;
	icon: "instagram" | "discord";
}

export const socialLinks: SocialLink[] = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/airespucrs/?hl=pt-br",
		icon: "instagram",
	},
	{ label: "Discord", href: "https://discord.gg/svqnu3GNeV", icon: "discord" },
];
