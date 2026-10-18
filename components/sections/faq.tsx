import * as React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How does Lumio compare to legacy tools?',
    answer:
      'Unlike monolithic tools that bog down with plugins and bloated forms, Lumio is engineered around speed, keyboard navigation, and instant optimistic sync across modern platforms.',
  },
  {
    question: 'Can we import data from Jira, Asana, or Linear?',
    answer:
      'Yes. Our guided 1-click importer migrates historical issues, attachments, custom labels, and team assignments in under two minutes without disruption.',
  },
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'You get unrestricted access to all Pro features with unlimited team members. No credit card is required to begin, and you can export your data at any point.',
  },
  {
    question: 'Is Lumio enterprise-ready and SOC-2 compliant?',
    answer:
      'Lumio is SOC-2 Type II certified and GDPR compliant. We support SAML SSO, granular role-based permissions, automated audit logging, and custom retention policies.',
  },
  {
    question: 'What does pricing look like after the trial?',
    answer:
      'Lumio offers simple per-seat pricing starting at $12/user/month for standard teams, with dedicated enterprise tiers including tailored SLAs and custom onboarding.',
  },
];

export function FAQ() {
  return (
    <section className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-16 mx-auto flex flex-col gap-4 md:gap-8">
      <div className="text-left md:text-center max-w-3xl md:mx-auto">
        <span className="font-caption text-[11px] md:text-caption tracking-widest text-primary-container font-semibold uppercase">
          Frequently Asked Questions
        </span>
        <h2 className="font-headline-md md:font-headline-xl text-headline-md md:text-headline-xl font-semibold text-on-surface tracking-tight mt-1 md:mt-2">
          Everything you need to know
        </h2>
        <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant mt-1.5 md:mt-3">
          Have a question that isn&apos;t answered here? Reach out anytime.
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 pt-1">
        {faqData.map(({ question, answer }) => (
          <details
            key={question}
            className="group p-3.5 md:p-6 rounded-xl border border-surface-container-highest bg-surface-container-lowest shadow-sm [&_summary::-webkit-details-marker]:hidden transition-colors"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-label-md md:font-headline-sm text-label-md md:text-headline-sm text-on-surface font-semibold select-none">
              <span>{question}</span>
              <ChevronDown
                size={20}
                className="text-on-surface-variant md:text-outline transition-transform duration-200 group-open:rotate-180 shrink-0"
              />
            </summary>
            <p className="pt-2.5 md:pt-4 font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
