'use client';

import * as React from 'react';
import { Check, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Pricing() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>(
    'annual',
  );

  const prices = {
    starter: billingCycle === 'annual' ? 12 : 15,
    pro: billingCycle === 'annual' ? 19 : 24,
    enterprise: billingCycle === 'annual' ? 49 : 59,
  };

  return (
    <section
      id="pricing"
      className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-16 mx-auto flex flex-col gap-5 md:gap-12"
    >
      {/* Header & Toggle */}
      <div className="text-left md:text-center max-w-2xl md:mx-auto">
        <span className="font-caption text-[11px] md:text-caption tracking-widest text-primary-container font-semibold uppercase">
          Pricing Plans
        </span>
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl font-semibold text-on-surface tracking-tight leading-snug mt-1.5 md:mt-2">
          Simple, scalable pricing
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2 md:mt-3">
          Start free for 14 days. No credit card required. Cancel anytime.
        </p>

        {/* Billing Switcher */}
        <div className="inline-flex items-center self-start md:self-center p-1 rounded-xl bg-surface-container-low shadow-sm mt-5 md:mt-8">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-3.5 py-1.5 rounded-lg font-label-sm md:font-label-md text-label-sm md:text-label-md transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-3.5 py-1.5 rounded-lg font-label-sm md:font-label-md text-label-sm md:text-label-md transition-all cursor-pointer flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Annual</span>
            <span className="px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-caption text-[10px] md:text-caption font-semibold">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-stretch">
        {/* Starter Plan */}
        <div className="p-5 md:p-8 rounded-2xl bg-surface-container-lowest md:bg-surface-container-low flex flex-col justify-between shadow-sm border border-surface-container-highest/40">
          <div>
            <div className="flex flex-col gap-1 mb-2 md:mb-3">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-semibold text-on-surface">
                Starter
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Essential collaboration tools for emerging squads.
              </p>
            </div>
            <div className="my-4 md:my-6 flex items-baseline gap-1">
              <span className="font-headline-xl-mobile md:font-display-hero-mobile text-headline-xl-mobile md:text-display-hero-mobile font-bold text-on-surface">
                ${prices.starter}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                / user / month
              </span>
            </div>

            <Button
              variant="surface"
              href="#"
              data-path="get-started"
              className="w-full h-11 md:h-auto justify-center px-4 py-3 rounded-xl md:rounded-lg border border-surface-container-highest"
            >
              Start free trial
            </Button>

            <div className="mt-6 md:mt-8 space-y-2.5 md:space-y-3 pt-4 border-t border-surface-container md:border-transparent">
              <div className="font-caption text-caption uppercase tracking-wider text-outline font-semibold mb-2 md:mb-3">
                Includes
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Up to 10 active members</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Unlimited tasks &amp; milestones</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Real-time optimistic sync</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Community &amp; email support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="relative p-5 md:p-8 rounded-2xl bg-surface-container-lowest ring-2 ring-primary-container flex flex-col justify-between shadow-md md:shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-semibold text-on-surface">
                Pro
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Complete system for scaling product engineering teams.
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-caption text-[11px] font-semibold shrink-0">
              MOST POPULAR
            </span>
          </div>

          <div>
            <div className="my-4 md:my-6 flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-headline-xl-mobile md:font-display-hero-mobile text-headline-xl-mobile md:text-display-hero-mobile font-bold text-primary-container">
                  ${prices.pro}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  / user / month
                </span>
              </div>
              <span className="font-caption text-[11px] text-primary-container font-medium">
                {billingCycle === 'annual'
                  ? '$19/mo billed annually'
                  : 'Billed monthly'}
              </span>
            </div>

            <Button
              variant="primary"
              href="#"
              data-path="get-started"
              className="w-full h-11 md:h-auto justify-center gap-2 px-4 py-3 rounded-xl md:rounded-lg shadow-md"
            >
              <span>Get started free</span>
              <ArrowRight size={18} />
            </Button>

            <div className="mt-6 md:mt-8 space-y-2.5 md:space-y-3 pt-4 border-t border-surface-container md:border-transparent">
              <div className="font-caption text-caption uppercase tracking-wider text-outline font-semibold mb-2 md:mb-3">
                Everything in Starter, plus
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <CheckCircle2
                  size={16}
                  className="text-primary-container shrink-0"
                />
                <span>Unlimited team members</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <CheckCircle2
                  size={16}
                  className="text-primary-container shrink-0"
                />
                <span>Sprint velocity rollups &amp; reports</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <CheckCircle2
                  size={16}
                  className="text-primary-container shrink-0"
                />
                <span>Automated issue &amp; PR integrations</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <CheckCircle2
                  size={16}
                  className="text-primary-container shrink-0"
                />
                <span>Priority 24/7 Slack &amp; email support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="p-5 md:p-8 rounded-2xl bg-surface-container-lowest md:bg-surface-container-low flex flex-col justify-between shadow-sm border border-surface-container-highest/40">
          <div>
            <div className="flex flex-col gap-1 mb-2 md:mb-3">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-semibold text-on-surface">
                Enterprise
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Maximum security, compliance, and custom governance.
              </p>
            </div>
            <div className="my-4 md:my-6 flex items-baseline gap-1">
              <span className="font-headline-xl-mobile md:font-display-hero-mobile text-headline-xl-mobile md:text-display-hero-mobile font-bold text-on-surface">
                ${prices.enterprise}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                / user / month
              </span>
            </div>

            <Button
              variant="surface"
              href="#"
              data-path="demo"
              className="w-full h-11 md:h-auto justify-center px-4 py-3 rounded-xl md:rounded-lg border border-surface-container-highest"
            >
              Schedule demo
            </Button>

            <div className="mt-6 md:mt-8 space-y-2.5 md:space-y-3 pt-4 border-t border-surface-container md:border-transparent">
              <div className="font-caption text-caption uppercase tracking-wider text-outline font-semibold mb-2 md:mb-3">
                Everything in Pro, plus
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>SAML 2.0 Single Sign-On (SSO)</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Granular role &amp; audit logging</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>99.99% Uptime SLA commitment</span>
              </div>
              <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                <Check size={16} className="text-primary-container shrink-0" />
                <span>Dedicated customer success manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
