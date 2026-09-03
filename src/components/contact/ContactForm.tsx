import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
	namePlaceholder: string;
	emailPlaceholder: string;
	subjectPlaceholder: string;
	messagePlaceholder: string;
	submitLabel: string;
	submittingLabel: string;
	genericErrorMessage: string;
	successMessage: string;
}

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "error" } | { kind: "success" };

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm({
	namePlaceholder,
	emailPlaceholder,
	subjectPlaceholder,
	messagePlaceholder,
	submitLabel,
	submittingLabel,
	genericErrorMessage,
	successMessage,
}: Props) {
	const [status, setStatus] = useState<Status>({ kind: "idle" });
	const isSubmitting = status.kind === "submitting";

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("nome") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const subject = String(data.get("assunto") ?? "").trim();
		const message = String(data.get("mensagem") ?? "").trim();

		const accessKey = import.meta.env.PUBLIC_WEB3FORMS_CONTACT_KEY;
		if (!accessKey) {
			console.error("PUBLIC_WEB3FORMS_CONTACT_KEY is not set — see .env.example.");
			setStatus({ kind: "error" });
			return;
		}

		setStatus({ kind: "submitting" });
		try {
			const response = await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({
					access_key: accessKey,
					subject: subject || `New contact form message from ${name || "the AIRES PUCRS site"}`,
					from_name: name,
					name,
					email,
					message,
				}),
			});
			const result = await response.json();
			if (!response.ok || !result.success) {
				throw new Error(result?.message ?? `Web3Forms request failed (${response.status})`);
			}

			form.reset();
			setStatus({ kind: "success" });
		} catch (error) {
			console.error("Contact form submission failed:", error);
			setStatus({ kind: "error" });
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="not-prose rounded-2xl border border-border p-6 sm:p-8"
		>
			<div className="space-y-4">
				<div className="space-y-1.5">
					<Label htmlFor="contact-name" className="sr-only">
						{namePlaceholder}
					</Label>
					<Input id="contact-name" name="nome" type="text" placeholder={namePlaceholder} disabled={isSubmitting} />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-email" className="sr-only">
						{emailPlaceholder}
					</Label>
					<Input id="contact-email" name="email" type="email" placeholder={emailPlaceholder} required disabled={isSubmitting} />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-subject" className="sr-only">
						{subjectPlaceholder}
					</Label>
					<Input id="contact-subject" name="assunto" type="text" placeholder={subjectPlaceholder} disabled={isSubmitting} />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-message" className="sr-only">
						{messagePlaceholder}
					</Label>
					<Textarea
						id="contact-message"
						name="mensagem"
						placeholder={messagePlaceholder}
						required
						disabled={isSubmitting}
					/>
				</div>
			</div>

			{status.kind === "error" && (
				<p role="alert" className="mt-4 text-sm text-destructive">
					{genericErrorMessage}
				</p>
			)}
			{status.kind === "success" && (
				<p role="status" className="mt-4 text-sm text-primary-strong">
					{successMessage}
				</p>
			)}

			<Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
				{isSubmitting ? submittingLabel : submitLabel}
			</Button>
		</form>
	);
}
