import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
	href: string;
	className?: string;
	children: ReactNode;
	showArrow?: boolean;
}

export function ButtonLink({ href, variant, size, className, children, showArrow = false }: ButtonLinkProps) {
	return (
		<Button variant={variant} size={size} className={cn("group", className)} asChild>
			<a href={href}>
				{children}
				{showArrow && (
					<ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
				)}
			</a>
		</Button>
	);
}
