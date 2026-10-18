import * as React from 'react';
import { Star, Gauge } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="w-full px-5 py-4 md:w-[80%] md:px-0 md:py-12 mx-auto">
      <div className="p-5 md:p-12 rounded-2xl md:rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 justify-between border border-surface-container-highest/40">
        <div className="max-w-xl flex flex-col gap-3 md:gap-4">
          {/* Star Rating */}
          <div className="flex items-center gap-1 text-primary-container md:text-secondary">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-primary-container md:fill-secondary text-primary-container md:text-secondary"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-body-lg lg:font-headline-md text-body-lg lg:text-headline-md text-on-surface italic md:not-italic font-normal md:font-medium leading-snug">
            &ldquo;Lumio cut our Monday planning from 2 hours to 20 minutes. The
            interface feels so responsive it disappears, letting us focus purely
            on execution.&rdquo;
          </blockquote>

          {/* Author & Badge on Mobile */}
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md font-semibold shrink-0">
                DV
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-label-sm md:font-label-md text-label-sm md:text-label-md font-semibold text-on-surface">
                  Darian Vance
                </span>
                <span className="font-caption text-caption text-on-surface-variant mt-1">
                  VP of Engineering at Hyperflow
                </span>
              </div>
            </div>

            {/* Mobile Pill Badge */}
            <div className="inline-flex lg:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-primary-container font-caption text-caption font-medium w-fit">
              <Gauge size={14} />
              <span>-65% sprint cycle reduction · 80 engineers</span>
            </div>
          </div>
        </div>

        {/* Desktop Stat Box */}
        <div className="hidden lg:flex shrink-0 flex-col gap-3 w-auto">
          <div className="p-4 rounded-lg bg-surface-container-low min-w-[260px] border border-surface-container-highest/40">
            <div className="font-caption text-caption uppercase text-outline">
              Sprint cycle reduction
            </div>
            <div className="font-headline-lg text-headline-lg font-bold text-primary-container mt-1">
              -65%
            </div>
            <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Measured across 80 engineers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
