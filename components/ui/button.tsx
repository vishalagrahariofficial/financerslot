import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
    {
        variants: {
            variant: {
                primary: "bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-glow",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                accent: "bg-accent-600 text-white shadow-soft hover:bg-accent-700",
                outline: "border border-input bg-background hover:bg-accent-50 hover:text-accent-700",
                ghost: "hover:bg-accent-50 hover:text-accent-700",
                glass: "glass text-foreground hover:bg-white/20 dark:hover:bg-black/40",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-10 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
