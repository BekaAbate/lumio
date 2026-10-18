import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductPreview } from '@/components/sections/product-preview';

export function Hero() {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* Main Container */}
      <div className="relative w-full px-5 py-6 md:w-[80%] md:px-0 md:pt-12 md:pb-20 mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 md:mt-8 flex flex-col items-center text-center max-w-4xl mx-auto isolate">
          {/* Ambient Glow behind hero content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[920px] h-[340px] md:h-[440px] bg-gradient-to-b from-secondary-container/30 via-surface-tint/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Announcement Pill */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low shadow-sm active:scale-95 transition-transform mb-5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span className="font-label-sm text-label-sm text-on-surface font-medium">
              Lumio 2.0 is live · Built for modern teams →
            </span>
          </a>

          {/* Headline */}
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-display-hero md:text-display-hero font-semibold md:font-normal text-on-surface tracking-tight leading-[1.12] md:leading-[1.1] max-w-3xl">
            Your team&apos;s work,
            <br />
            <span className="text-primary-container">finally in sync.</span>
          </h1>

          {/* Supporting text */}
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-2xl mt-4 md:mt-5 leading-relaxed px-1">
            Plan projects, manage tasks, and track progress in one focused
            workspace built to keep your team moving forward with quiet
            precision.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 md:mt-8 w-full sm:w-auto">
            <Button
              variant="primary"
              href="#"
              data-path="get-started"
              className="w-full sm:w-auto h-12 md:h-auto px-6 py-3.5 rounded-xl md:rounded-lg gap-2 active:scale-[0.98]"
            >
              <span>Get started free</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="surface"
              href="#how-it-works"
              className="w-full sm:w-auto h-12 md:h-auto px-6 py-3.5 rounded-xl md:rounded-lg gap-2 active:scale-[0.98]"
            >
              <PlayCircle size={18} className="text-on-surface-variant" />
              <span>See how it works</span>
            </Button>
          </div>

          {/* Reassurance Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 md:gap-4 mt-4 font-caption text-caption md:font-body-sm md:text-body-sm text-outline">
            <span className="inline-flex items-center gap-1 font-medium text-on-surface-variant">
              <CheckCircle size={14} className="text-primary-container" />
              Free 14-day trial
            </span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>2-minute setup</span>
          </div>
        </section>

        {/* Product Preview Stage */}
        <ProductPreview />
      </div>
    </div>
  );
}
