import * as React from 'react';
import Image from 'next/image';

const productLinks = [
  { label: 'Features', href: '#features', path: 'features' },
  { label: 'How it works', href: '#how-it-works', path: 'how-it-works' },
  { label: 'Pricing', href: '#pricing', path: 'pricing' },
];

const companyLinks = [
  { label: 'Privacy', href: '#', path: 'privacy' },
  { label: 'Terms', href: '#', path: 'terms' },
  { label: 'Security', href: '#', path: 'security' },
];

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low md:bg-surface-container-lowest md:border-t md:border-surface-container-highest py-8 md:py-12">
      <div className="w-full px-5 md:w-[80%] md:px-0 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        {/* Brand info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-lg bg-primary-container text-on-primary">
              <Image
                src="/logo.svg"
                alt="Lumio Monogram"
                width={16}
                height={16}
                className="object-contain"
              />
            </span>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              Lumio
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Your team&apos;s work, finally in sync.
          </p>
        </div>

        {/* Navigation columns: 2-column grid on mobile, inline with divider on desktop */}
        <div className="sm:flex-2 md:w-auto grid grid-cols-2 sm:flex sm:items-center sm:justify-evenly gap-4 font-label-md text-label-md">
          <div className="flex flex-col gap-2.5 gap-6">
            <span className="font-caption text-caption uppercase tracking-wider text-outline block sm:hidden mb-1">
              Product
            </span>
            {productLinks.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                data-path={path}
                className="text-on-surface-variant hover:text-on-surface transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-6">
            <span className="font-caption text-caption uppercase tracking-wider text-outline block sm:hidden mb-1">
              Company
            </span>
            {companyLinks.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                data-path={path}
                className="text-on-surface-variant hover:text-on-surface transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="font-caption text-caption text-outline pt-2 md:pt-0 w-full text-center mt-10">
        <p>&copy; 2025 Lumio Workspace Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
