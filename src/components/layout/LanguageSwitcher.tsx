import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/data/languages";

export function LanguageSwitcher() {
	const current = languages[0];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='group'>
				<Button
					variant='ghost'
					className='cursor-pointer border-0 outline-0 ring-0 rounded-md px-3.5 py-2 text-sm gap-1.5 text-muted-foreground whitespace-nowrap transition-colors duration-200 hover:bg-muted/80 h-full focus-visible:ring-0'
				>
					<span aria-hidden='true'>{current.flag}</span>
					<p className='text-foreground'>{current.code}</p>
					<ChevronDown className='size-3.5' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.code}
						disabled={language.code === current.code}
						className='gap-2 cursor-pointer'
					>
						<span aria-hidden='true'>{language.flag}</span>
						{language.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
