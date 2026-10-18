import * as React from 'react';
import { cn } from '@/lib/utils';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  sublabel?: string;
}

export function StatCard({
  value,
  label,
  sublabel,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        'p-4 rounded-xl bg-surface-container-low flex flex-col gap-1 shadow-sm transition-colors duration-150 hover:bg-surface-container',
        className,
      )}
      {...props}
    >
      <span className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl font-bold text-primary-container md:text-on-surface leading-none md:leading-normal">
        {value}
      </span>
      <span className="font-label-sm md:font-body-sm text-label-sm md:text-body-sm font-medium md:font-normal text-on-surface md:text-on-surface-variant pt-1 md:pt-0">
        {label}
      </span>
      {sublabel && (
        <span className="font-caption text-caption text-on-surface-variant md:hidden">
          {sublabel}
        </span>
      )}
    </div>
  );
}
