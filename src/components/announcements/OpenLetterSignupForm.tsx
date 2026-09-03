import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Signatory {
	name: string;
	affiliation: string;
}

interface Props {
	heading: string;
	namePlaceholder: string;
	affiliationPlaceholder: string;
	emailPlaceholder: string;
	submitLabel: string;
	submittingLabel: string;
	duplicateErrorMessage: string;
	genericErrorMessage: string;
	successMessage: string;
	/** Locale-independent id for this letter, used to namespace the localStorage record. */
	slug: string;
	/** Signatories already published in the markdown content, for duplicate detection. */
	existingSignatories: Signatory[];
	/** Exact text of the "## Signatários"/"## Signatories" heading, used to find its <ul> in the DOM. */
	signatoriesHeading: string;
}

type Status =
	| { kind: "idle" }
	| { kind: "submitting" }
	| { kind: "error"; message: string }
	| { kind: "success" };

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const STORAGE_KEY_PREFIX = "aires-signed-letters:";

/** Case- and accent-insensitive comparison key, so "José" matches "jose". */
function normalize(value: string) {
	return value
		.trim()
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
}

function readLocalSignatures(slug: string): { name: string; email: string }[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY_PREFIX + slug);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}

function rememberLocalSignature(
	slug: string,
	signature: { name: string; email: string },
) {
	try {
		const signed = readLocalSignatures(slug);
		signed.push(signature);
		localStorage.setItem(STORAGE_KEY_PREFIX + slug, JSON.stringify(signed));
	} catch {
		// localStorage unavailable (privacy mode, etc.) — the signature still went through.
	}
}

/**
 * Appends the new signatory to the same <ul> the markdown content renders,
 * so it shows up immediately instead of waiting on the next content update.
 */
function appendToVisibleList(
	headingText: string,
	name: string,
	affiliation: string,
) {
	const heading = Array.from(document.querySelectorAll("h2")).find(
		(candidate) => candidate.textContent?.trim() === headingText,
	);
	const list = heading?.nextElementSibling;
	if (!list || list.tagName !== "UL") return;

	const item = document.createElement("li");
	const strong = document.createElement("strong");
	strong.textContent = name;
	const em = document.createElement("em");
	em.textContent = affiliation;
	item.append(strong, ", ", em);
	list.append(item);
}

export function OpenLetterSignupForm({
	heading,
	namePlaceholder,
	affiliationPlaceholder,
	emailPlaceholder,
	submitLabel,
	submittingLabel,
	duplicateErrorMessage,
	genericErrorMessage,
	successMessage,
	slug,
	existingSignatories,
	signatoriesHeading,
}: Props) {
	const [status, setStatus] = useState<Status>({ kind: "idle" });
	const isSubmitting = status.kind === "submitting";

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const affiliation = String(data.get("affiliation") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();

		const normalizedName = normalize(name);
		const normalizedEmail = normalize(email);

		const alreadyPublished = existingSignatories.some(
			(s) => normalize(s.name) === normalizedName,
		);
		const alreadySubmitted = readLocalSignatures(slug).some(
			(s) =>
				normalize(s.name) === normalizedName ||
				normalize(s.email) === normalizedEmail,
		);
		if (alreadyPublished || alreadySubmitted) {
			setStatus({ kind: "error", message: duplicateErrorMessage });
			return;
		}

		const accessKey = import.meta.env.PUBLIC_WEB3FORMS_OPEN_LETTER_SIGN_UP_KEY;
		if (!accessKey) {
			console.error(
				"PUBLIC_WEB3FORMS_OPEN_LETTER_SIGN_UP_KEY is not set — see .env.example.",
			);
			setStatus({ kind: "error", message: genericErrorMessage });
			return;
		}

		setStatus({ kind: "submitting" });
		try {
			const response = await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: accessKey,
					subject: `Open letter signature: ${name}`,
					from_name: name,
					name,
					affiliation,
					email,
					letter: slug,
				}),
			});
			const result = await response.json();
			if (!response.ok || !result.success) {
				throw new Error(
					result?.message ?? `Web3Forms request failed (${response.status})`,
				);
			}

			rememberLocalSignature(slug, { name, email });
			appendToVisibleList(signatoriesHeading, name, affiliation);
			form.reset();
			setStatus({ kind: "success" });
		} catch (error) {
			console.error("Open letter signup failed:", error);
			setStatus({ kind: "error", message: genericErrorMessage });
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='not-prose mt-10 rounded-2xl border border-border p-6 sm:p-8'
		>
			<h3 className='text-lg font-semibold text-foreground sm:text-xl'>
				{heading}
			</h3>

			<div className='mt-5 space-y-4'>
				<div className='space-y-1.5'>
					<Label htmlFor='signatory-name' className='sr-only'>
						{namePlaceholder}
					</Label>
					<Input
						id='signatory-name'
						name='name'
						type='text'
						placeholder={namePlaceholder}
						required
						disabled={isSubmitting}
					/>
				</div>

				<div className='space-y-1.5'>
					<Label htmlFor='signatory-affiliation' className='sr-only'>
						{affiliationPlaceholder}
					</Label>
					<Input
						id='signatory-affiliation'
						name='affiliation'
						type='text'
						placeholder={affiliationPlaceholder}
						required
						disabled={isSubmitting}
					/>
				</div>

				<div className='space-y-1.5'>
					<Label htmlFor='signatory-email' className='sr-only'>
						{emailPlaceholder}
					</Label>
					<Input
						id='signatory-email'
						name='email'
						type='email'
						placeholder={emailPlaceholder}
						required
						disabled={isSubmitting}
					/>
				</div>
			</div>

			{status.kind === "error" && (
				<p role='alert' className='mt-4 text-sm text-destructive'>
					{status.message}
				</p>
			)}
			{status.kind === "success" && (
				<p role='status' className='mt-4 text-sm text-primary-strong'>
					{successMessage}
				</p>
			)}

			<Button
				type='submit'
				size='lg'
				className='mt-6 w-full sm:w-auto'
				disabled={isSubmitting}
			>
				{isSubmitting ? submittingLabel : submitLabel}
			</Button>
		</form>
	);
}
