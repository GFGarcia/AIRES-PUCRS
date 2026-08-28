import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// TODO: Implementar envio de formulário de contato

interface Props {
	namePlaceholder: string;
	emailPlaceholder: string;
	subjectPlaceholder: string;
	messagePlaceholder: string;
	submitLabel: string;
}

export function ContactForm({
	namePlaceholder,
	emailPlaceholder,
	subjectPlaceholder,
	messagePlaceholder,
	submitLabel,
}: Props) {
	return (
		<form
			action="#"
			method="post"
			className="not-prose rounded-2xl border border-border p-6 sm:p-8"
		>
			<div className="space-y-4">
				<div className="space-y-1.5">
					<Label htmlFor="contact-name" className="sr-only">
						{namePlaceholder}
					</Label>
					<Input id="contact-name" name="nome" type="text" placeholder={namePlaceholder} />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-email" className="sr-only">
						{emailPlaceholder}
					</Label>
					<Input id="contact-email" name="email" type="email" placeholder={emailPlaceholder} required />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-subject" className="sr-only">
						{subjectPlaceholder}
					</Label>
					<Input id="contact-subject" name="assunto" type="text" placeholder={subjectPlaceholder} />
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
					/>
				</div>
			</div>

			<Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
				{submitLabel}
			</Button>
		</form>
	);
}
