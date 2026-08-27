import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { languages } from "@/data/languages";
import type { NavLink } from "@/data/navigation";

export function MobileNav({ links }: { links: NavLink[] }) {
	const [open, setOpen] = useState(false);
	const currentLanguage = languages[0];

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					aria-label='Abrir menu'
					className='xl:hidden'
				>
					<Menu className='size-5' />
				</Button>
			</SheetTrigger>
			<SheetContent side='right' className='w-full max-w-xs'>
				<SheetHeader className='pb-0'>
					<SheetTitle className='flex items-center gap-3 text-left'>
						<img
							src='/aires_logo_no_bg.avif'
							alt=''
							className='size-9 shrink-0 object-contain'
						/>
						AIRES PUCRS
					</SheetTitle>
				</SheetHeader>
				<Separator />

				<div className='px-4 h-9'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								id='mobile-language-trigger'
								variant='outline'
								className='w-full h-full justify-between text-foreground'
							>
								<span className='flex items-center gap-2'>
									<span aria-hidden='true'>{currentLanguage.flag}</span>
									{currentLanguage.label}
								</span>
								<ChevronDown className='size-4 text-muted-foreground' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='start'>
							{languages.map((language) => (
								<DropdownMenuItem key={language.code} className='gap-2'>
									<span aria-hidden='true'>{language.flag}</span>
									{language.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<Separator />

				<nav className='flex flex-col gap-1 px-2 pb-2'>
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className='rounded-md px-3 py-1.5 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground'
						>
							{link.label}
						</a>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
