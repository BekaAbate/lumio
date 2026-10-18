import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Custom twMerge instance that understands the project's Tailwind v4 theme tokens.
 *
 * Without this, tailwind-merge can't distinguish between custom text-size utilities
 * (e.g. `text-label-md`) and text-color utilities (e.g. `text-on-primary`), causing
 * it to treat them as the same conflict group and silently drop one of them.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Custom text-size tokens defined in @theme via --text-*
      'font-size': [
        'text-display-hero',
        'text-display-hero-mobile',
        'text-headline-xl',
        'text-headline-xl-mobile',
        'text-headline-lg',
        'text-headline-md',
        'text-headline-sm',
        'text-body-lg',
        'text-body-md',
        'text-body-sm',
        'text-label-md',
        'text-label-sm',
        'text-caption',
      ],
      // Custom text-color tokens defined in @theme via --color-*
      'text-color': [
        'text-background',
        'text-on-background',
        'text-surface',
        'text-surface-dim',
        'text-surface-bright',
        'text-surface-variant',
        'text-surface-tint',
        'text-surface-container-lowest',
        'text-surface-container-low',
        'text-surface-container',
        'text-surface-container-high',
        'text-surface-container-highest',
        'text-on-surface',
        'text-on-surface-variant',
        'text-inverse-surface',
        'text-inverse-on-surface',
        'text-inverse-primary',
        'text-outline',
        'text-outline-variant',
        'text-primary',
        'text-on-primary',
        'text-primary-container',
        'text-on-primary-container',
        'text-secondary',
        'text-on-secondary',
        'text-secondary-container',
        'text-on-secondary-container',
        'text-on-secondary-fixed',
        'text-on-secondary-fixed-variant',
        'text-tertiary',
        'text-on-tertiary',
        'text-tertiary-container',
        'text-on-tertiary-container',
        'text-on-tertiary-fixed',
        'text-on-tertiary-fixed-variant',
        'text-error',
        'text-on-error',
        'text-error-container',
        'text-on-error-container',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
