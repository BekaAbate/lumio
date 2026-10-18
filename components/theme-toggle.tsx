'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (mounted ? (resolvedTheme || theme) : undefined) === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative overflow-hidden active:scale-90 transition-transform duration-150 cursor-pointer"
    >
      <Sun
        size={16}
        className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 text-on-surface"
      />
      <Moon
        size={16}
        className="absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 text-on-surface-variant"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
