// packages/ui/src/button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-apple shadow-apple text-sm font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // The Classic Apple "Glass" look
        primary: "bg-black text-white hover:bg-neutral-800 shadow-sm",

        // The Secondary "Neutral" look
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-200/50",

        // The Subtle "Ghost" look
        ghost: "bg-transparent hover:bg-neutral-100 text-neutral-600",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
