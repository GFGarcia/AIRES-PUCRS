export function formatDate(date: Date, locale: string): string {
	return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// publishDate/updatedDate are date-only values (parsed as UTC midnight);
		// formatting in the server's local timezone would shift the displayed day.
		timeZone: "UTC",
	}).format(date);
}
