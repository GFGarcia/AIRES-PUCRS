import { ChevronDown } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/data/navigation";

interface Props {
	label: string;
	items: NavLink[];
	active?: boolean;
}

export function NavDropdownMenu({ label, items, active }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type='button'
					className={cn(
						"flex cursor-pointer items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors duration-200 hover:bg-muted/80 focus-visible:bg-accent focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
						active ? "bg-muted/80" : "bg-transparent",
					)}
				>
					{label}
					<ChevronDown className='size-3.5 text-muted-foreground' />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start' className='w-full'>
				{items.length === 0 ? (
					<DropdownMenuItem disabled>Em breve</DropdownMenuItem>
				) : (
					items.map((item) => (
						<DropdownMenuItem
							key={item.href}
							asChild
							className='cursor-pointer'
						>
							<a
								href={item.href}
								target={item.href.startsWith("http") ? "_blank" : undefined}
								rel={
									item.href.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
							>
								{item.label}
							</a>
						</DropdownMenuItem>
					))
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
