import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surface-tint disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'font-label-md text-label-md bg-primary-container text-on-primary hover:bg-secondary-container shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150',
        surface:
          'font-label-md text-label-md bg-surface-container-lowest hover:bg-surface-container-low text-on-surface shadow-sm transition-colors duration-150',
        outline:
          'border border-surface-container-highest bg-surface-container-lowest hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface shadow-sm transition-colors duration-150',
        ghost:
          'text-on-surface font-semibold transition-colors duration-150 hover:opacity-80',
      },
      size: {
        default: 'font-label-md text-label-md px-4 py-2 rounded-xl',
        sm: 'font-label-sm text-label-sm px-3 py-1.5 rounded-lg',
        lg: 'font-label-md text-label-md px-6 py-3 rounded-xl',
        icon: 'w-8 h-8 rounded-full p-0 flex items-center justify-center',
        nav: 'p-0',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        size: 'default',
        className: 'p-0 px-0 py-0 rounded-none',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    { className, variant, size, as: Component = 'button', href, ...props },
    ref,
  ) => {
    const Comp = (href ? 'a' : Component) as React.ElementType;

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
