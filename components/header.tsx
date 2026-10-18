'use client';

import * as React from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { label: 'Features', href: '#features', active: true },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-surface-container-highest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-14 md:h-16 w-full px-5 md:px-0 md:w-[80%] mx-auto flex items-center justify-between">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <a
            className="flex items-center gap-2.5"
            href="#"
            data-path="home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-container text-on-primary shadow-sm">
              <Image
                src="/logo.svg"
                alt="Lumio Monogram"
                width={20}
                height={20}
                className="object-contain"
              />
            </span>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              Lumio
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                className={`font-label-md text-label-md transition-colors duration-150 ${
                  active
                    ? 'text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Desktop Actions & Mobile Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              data-path="login"
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-3 py-2 transition-colors duration-150"
            >
              Sign in
            </a>

            <Button
              variant="primary"
              size="default"
              href="#"
              data-path="get-started"
            >
              Get started
            </Button>
          </div>

          {/* Theme Toggle (Mobile & Desktop) */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="w-10 h-10 md:hidden flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-surface-container-highest bg-surface-container-lowest/95 backdrop-blur-xl px-5 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-label-md text-label-md transition-colors ${
                  active
                    ? 'bg-surface-container-low text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-surface-container-highest/60 flex flex-col gap-2.5">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors"
            >
              Sign in
            </a>
            <Button
              variant="primary"
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center py-3 rounded-lg"
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
