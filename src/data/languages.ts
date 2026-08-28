export interface Language {
	code: "pt" | "en";
	label: string;
	flag: string;
}

export const languages: Language[] = [
	{ code: "pt", label: "Português", flag: "🇧🇷" },
	{ code: "en", label: "English", flag: "🇺🇸" },
];
