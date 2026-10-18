import * as React from 'react';
import {
  FolderTree,
  CheckSquare,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export function Features() {
  return (
    <section
      id="features"
      className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-16 mx-auto flex flex-col gap-5 md:gap-14"
    >
      {/* Header */}
      <div className="text-left md:text-center max-w-2xl md:mx-auto">
        <span className="font-caption text-[11px] md:text-caption tracking-widest text-primary-container font-semibold uppercase">
          Capabilities
        </span>
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl font-semibold text-on-surface tracking-tight leading-snug mt-1.5 md:mt-2">
          Designed for speed and focus
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-2 md:mt-3">
          Eliminate tool fragmentation with an opinionated environment that
          respects engineering and design velocity.
        </p>
      </div>

      {/* Grid: Stacked on mobile, 3-col on desktop */}
      <div className="flex flex-col gap-3.5 lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Feature / Capability 1 */}
        <div className="p-4 md:p-8 rounded-2xl md:rounded-xl bg-surface-container-lowest md:bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-3 md:gap-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-surface-container md:bg-surface-container-lowest text-primary-container shadow-sm flex items-center justify-center md:mb-6">
              <FolderTree size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex flex-col gap-1 md:gap-0">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface md:mb-3 font-semibold">
                Organize projects without the chaos
              </h3>
              <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
                Structure initiatives with flexible hierarchies, custom
                workflows, and unified milestones that bring clarity.
              </p>
            </div>
          </div>

          {/* Micro Preview */}
          <div className="p-3 rounded-xl bg-surface-container-low md:bg-surface-container-lowest flex flex-col gap-2 mt-3 md:mt-8 shadow-sm">
            <div className="flex items-center justify-between text-caption font-caption text-on-surface">
              <span className="font-medium">Platform v2.4 (Q3 Target)</span>
              <span className="text-primary-container font-semibold">
                2 of 4 ready
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest md:bg-surface-container-low/50">
              <span className="font-label-sm text-label-sm text-on-surface">
                Auth architecture
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-caption text-caption">
                Done
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest md:bg-surface-container-low/50">
              <span className="font-label-sm text-label-sm text-on-surface">
                Dynamic search index
              </span>
              <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-medium">
                In review
              </span>
            </div>
          </div>
        </div>

        {/* Feature / Capability 2 */}
        <div className="p-4 md:p-8 rounded-2xl md:rounded-xl bg-surface-container-lowest md:bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-3 md:gap-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-surface-container md:bg-surface-container-lowest text-primary-container shadow-sm flex items-center justify-center md:mb-6">
              <CheckSquare size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex flex-col gap-1 md:gap-0">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface md:mb-3 font-semibold">
                Manage tasks with clarity
              </h3>
              <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
                Prioritize what matters with clear ownership, custom attributes,
                and automated updates that reduce meetings.
              </p>
            </div>
          </div>

          {/* Micro Preview */}
          <div className="p-3 rounded-xl bg-surface-container-low md:bg-surface-container-lowest flex items-center justify-between mt-3 md:mt-8 shadow-sm">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-caption text-[10px] font-semibold">
                  P1 Urgent
                </span>
                <span className="font-caption text-caption text-error font-medium">
                  Due in 2h
                </span>
              </div>
              <span className="font-label-sm text-label-sm font-medium text-on-surface">
                Telemetry integration
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-caption text-caption text-on-surface-variant">
                Marcus
              </span>
              <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary font-caption text-[11px] font-semibold flex items-center justify-center">
                MA
              </div>
            </div>
          </div>
        </div>

        {/* Feature / Capability 3 */}
        <div className="p-4 md:p-8 rounded-2xl md:rounded-xl bg-surface-container-lowest md:bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between shadow-sm">
          <div className="flex flex-col gap-3 md:gap-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-surface-container md:bg-surface-container-lowest text-primary-container shadow-sm flex items-center justify-center md:mb-6">
              <TrendingUp size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
            <div className="flex flex-col gap-1 md:gap-0">
              <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface md:mb-3 font-semibold">
                Keep everyone aligned on progress
              </h3>
              <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant leading-relaxed">
                Automated progress tracking and team rollups give leadership
                real-time visibility without manual status reporting.
              </p>
            </div>
          </div>

          {/* Micro Preview */}
          <div className="p-3 rounded-xl bg-surface-container-low md:bg-surface-container-lowest flex items-center justify-between mt-3 md:mt-8 shadow-sm">
            <div className="flex flex-col gap-0.5">
              <span className="font-caption text-caption text-on-surface-variant">
                Sprint Velocity
              </span>
              <span className="font-headline-sm text-headline-sm font-bold text-primary-container">
                +28% this cycle
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-8">
              <div className="w-2.5 h-4 bg-surface-container-highest rounded-t" />
              <div className="w-2.5 h-5 bg-surface-container-highest rounded-t" />
              <div className="w-2.5 h-6 bg-secondary-fixed-dim rounded-t" />
              <div className="w-2.5 h-8 bg-primary-container rounded-t" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
