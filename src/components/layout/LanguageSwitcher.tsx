import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Language } from "@/data/languages";

interface Props {
	current: string;
	options: (Language & { href: string })[];
}

const STORAGE_KEY = "aires-locale-selected";

export function LanguageSwitcher({ current, options }: Props) {
	const currentOption = options.find((option) => option.code === current) ?? options[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='group'>
				<Button
					variant='ghost'
					className='cursor-pointer border-0 outline-0 ring-0 rounded-md px-3.5 py-2 text-sm gap-1.5 text-muted-foreground whitespace-nowrap transition-colors duration-200 hover:bg-muted/80 h-full focus-visible:ring-0'
				>
					<span aria-hidden='true'>{currentOption.flag}</span>
					<p className='text-foreground'>{currentOption.code.toUpperCase()}</p>
					<ChevronDown className='size-3.5' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{options.map((option) => (
					<DropdownMenuItem key={option.code} disabled={option.code === current} asChild className='gap-2 cursor-pointer'>
						<a
							href={option.href}
							onClick={() => {
								try {
									localStorage.setItem(STORAGE_KEY, option.code);
								} catch {
									// localStorage unavailable — navigation still works
								}
							}}
						>
							<span aria-hidden='true'>{option.flag}</span>
							{option.label}
						</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
