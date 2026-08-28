import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// TODO: Implementar envio de formulário com confirmação de assinatura
// TODO Implementar notificação de novo assinante

interface Props {
	heading: string;
	namePlaceholder: string;
	affiliationPlaceholder: string;
	emailPlaceholder: string;
	submitLabel: string;
}

export function OpenLetterSignupForm({
	heading,
	namePlaceholder,
	affiliationPlaceholder,
	emailPlaceholder,
	submitLabel,
}: Props) {
	return (
		<form
			action='#'
			method='post'
			className='not-prose mt-10 rounded-2xl border border-border p-6 sm:p-8'
		>
			<h3 className='text-lg font-semibold text-foreground sm:text-xl'>{heading}</h3>

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
					/>
				</div>
			</div>

			<Button type='submit' size='lg' className='mt-6 w-full sm:w-auto'>
				{submitLabel}
			</Button>
		</form>
	);
}
