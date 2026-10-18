import * as React from 'react';

const steps = [
  {
    num: '01',
    mobileStep: '01',
    desktopStep: '01 · Plan your work',
    title: 'Plan your work & milestones',
    description:
      'Outline initiatives, set realistic timelines, and map cross-team dependencies in a clean timeline with zero lag.',
  },
  {
    num: '02',
    mobileStep: '02',
    desktopStep: '02 · Move tasks forward',
    title: 'Move tasks forward in sync',
    description:
      'Assign clear owners, discuss implementation directly in task threads, and automate state handoffs across devices.',
  },
  {
    num: '03',
    mobileStep: '03',
    desktopStep: '03 · See progress clearly',
    title: 'See progress with rollup visibility',
    description:
      'Understand engineering velocity, spot bottlenecks early, and share polished roadmap views instantly with leadership.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-16 mx-auto"
    >
      <div className="w-full bg-surface-container-low rounded-2xl p-5 md:p-12 flex flex-col gap-5 md:gap-12 shadow-sm">
        <div className="flex flex-col gap-1 md:gap-2 max-w-3xl">
          <span className="font-caption text-[11px] md:text-caption tracking-widest text-primary-container font-semibold uppercase">
            Step-by-step execution
          </span>
          <h2 className="font-headline-md md:font-headline-xl text-headline-md md:text-headline-xl font-semibold text-on-surface tracking-tight">
            How Lumio keeps teams moving
          </h2>
          <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant">
            From first sprint backlog to final production rollout, Lumio
            simplifies every coordination layer.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map(({ num, desktopStep, title, description }) => (
            <div
              key={num}
              className="p-3.5 md:p-0 rounded-xl md:rounded-none bg-surface-container-lowest md:bg-transparent shadow-sm md:shadow-none flex md:flex-col items-start gap-3 md:gap-3"
            >
              <span className="font-headline-sm text-headline-sm font-bold text-primary-container shrink-0 mt-0.5 md:hidden">
                {num}
              </span>
              <span className="hidden md:inline-block font-label-md text-label-md font-semibold text-secondary">
                {desktopStep}
              </span>
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h4 className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm font-semibold text-on-surface">
                  {title}
                </h4>
                <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-normal md:leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
