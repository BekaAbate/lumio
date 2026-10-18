import * as React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Gauge, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-20 mx-auto">
      <div className="p-6 md:p-12 rounded-2xl md:rounded-none bg-surface-container-low md:bg-transparent flex flex-col items-center text-center gap-4 md:gap-6 shadow-sm md:shadow-none">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero font-bold md:font-normal text-on-surface tracking-tight leading-[1.15] md:leading-[1.12]">
            Your team&apos;s work,
            <br />
            finally in sync.
          </h2>
          <p className="font-body-sm md:font-body-lg text-body-sm md:text-body-lg text-on-surface-variant max-w-xl mx-auto mt-1 md:mt-4">
            Join thousands of high-velocity product teams shipping better
            software with Lumio. Start your 14-day free trial today.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto pt-1 md:pt-4">
          <Button
            variant="primary"
            href="#"
            data-path="get-started"
            className="w-full sm:w-auto h-12 md:h-auto px-8 py-3.5 rounded-xl md:rounded-lg gap-2 text-label-md font-label-md shadow-md active:scale-[0.98]"
          >
            <span>Get started for free</span>
            <ArrowRight size={18} />
          </Button>
          <Button
            variant="surface"
            href="#"
            data-path="demo"
            className="w-full sm:w-auto h-12 md:h-auto px-8 py-3.5 rounded-xl md:rounded-lg text-label-md font-label-md shadow-sm active:scale-[0.98]"
          >
            <Calendar size={18} className="text-on-surface-variant md:hidden" />
            <span>Schedule a demo</span>
          </Button>
        </div>

        {/* Trust & Compliance Indicators */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1.5 lg:gap-6 pt-2 md:pt-6 text-on-surface-variant font-caption text-caption md:font-body-sm md:text-body-sm">
          <div className="flex items-center gap-1 font-medium text-on-surface-variant">
            <ShieldCheck
              size={16}
              className="text-primary-container md:text-secondary"
            />
            <span>SOC-2 Type II Certified</span>
          </div>
          <span className="hidden md:inline text-outline-variant">•</span>
          <div className="flex items-center gap-2 text-outline md:text-on-surface-variant">
            <span className="inline-flex items-center gap-1.5">
              <Gauge size={16} className="hidden md:inline text-secondary" />
              99.99% Uptime SLA
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap size={16} className="hidden md:inline text-secondary" />
              Instant CSV/Jira Import
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
