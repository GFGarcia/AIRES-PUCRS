import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// TODO: Implementar envio de formulário de contato

export function ContactForm() {
	return (
		<form
			action="#"
			method="post"
			className="not-prose rounded-2xl border border-border p-6 sm:p-8"
		>
			<div className="space-y-4">
				<div className="space-y-1.5">
					<Label htmlFor="contact-name" className="sr-only">
						Nome
					</Label>
					<Input id="contact-name" name="nome" type="text" placeholder="Nome" />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-email" className="sr-only">
						Email
					</Label>
					<Input id="contact-email" name="email" type="email" placeholder="Email" required />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-subject" className="sr-only">
						Assunto
					</Label>
					<Input id="contact-subject" name="assunto" type="text" placeholder="Assunto" />
				</div>

				<div className="space-y-1.5">
					<Label htmlFor="contact-message" className="sr-only">
						Mensagem
					</Label>
					<Textarea
						id="contact-message"
						name="mensagem"
						placeholder="Insira a sua mensagem aqui"
						required
					/>
				</div>
			</div>

			<Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
				Enviar
			</Button>
		</form>
	);
}
