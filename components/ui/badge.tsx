import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full font-label-sm text-label-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-primary-container text-on-primary',
        secondary:
          'bg-surface-container-low text-secondary',
        surface:
          'bg-surface-container text-on-surface-variant',
        outline:
          'border border-outline-variant text-on-surface-variant',
      },
      size: {
        default: 'px-2.5 py-0.5',
        sm: 'px-2 py-0.5 text-caption font-caption rounded',
        pill: 'px-1.5 py-0.5 text-caption font-caption rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
  );
}
