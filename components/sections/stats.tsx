import * as React from 'react';
import { StatCard } from '@/components/ui/stat-card';

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

const statsData: StatItem[] = [
  {
    value: '10x',
    label: 'Faster sprints',
    sublabel: 'From backlog to release',
  },
  {
    value: '99.4%',
    label: 'On-time delivery',
    sublabel: 'Across engineering tracks',
  },
  {
    value: '2M+',
    label: 'Tasks resolved',
    sublabel: 'With zero sync friction',
  },
  {
    value: '<50ms',
    label: 'Global latency',
    sublabel: 'Optimistic UI feedback',
  },
];

export function Stats() {
  return (
    <section className="w-full px-5 py-6 md:w-[80%] md:px-0 md:py-16 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 text-left md:text-center">
      {statsData.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          sublabel={stat.sublabel}
        />
      ))}
    </section>
  );
}
