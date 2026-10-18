'use client';

import * as React from 'react';
import {
  ChevronsUpDown,
  Search,
  SlidersHorizontal,
  Inbox,
  CheckCircle2,
  Zap,
  Map,
  Calendar,
  Filter,
  Plus,
  ChevronDown,
  Check,
  LayoutGrid,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Task {
  id: string;
  title: string;
  tag: string;
  priority: 'High' | 'Urgent' | 'Medium' | 'Low';
  dueDate: string;
  assignee: {
    initials: string;
    bg: string;
    text: string;
  };
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Design responsive navigation pattern & mobile drawer',
    tag: 'Design',
    priority: 'High',
    dueDate: 'Tomorrow',
    assignee: {
      initials: 'ER',
      bg: 'bg-secondary-container',
      text: 'text-on-secondary-container',
    },
    completed: false,
  },
  {
    id: '2',
    title: 'Implement OAuth2 SSO & team permission scopes',
    tag: 'Backend',
    priority: 'Urgent',
    dueDate: 'Friday',
    assignee: {
      initials: 'MT',
      bg: 'bg-tertiary',
      text: 'text-on-tertiary',
    },
    completed: false,
  },
  {
    id: '3',
    title: 'Audit color tokens for dark mode contrast ratios',
    tag: 'Design System',
    priority: 'Medium',
    dueDate: 'Sep 22',
    assignee: {
      initials: 'SK',
      bg: 'bg-primary-container',
      text: 'text-on-primary-container',
    },
    completed: false,
  },
  {
    id: '4',
    title: 'Refactor task kanban drag-and-drop state store',
    tag: 'Frontend',
    priority: 'Medium',
    dueDate: 'Sep 18',
    assignee: {
      initials: 'LP',
      bg: 'bg-surface-container-highest',
      text: 'text-on-surface',
    },
    completed: true,
  },
  {
    id: '5',
    title: 'User testing telemetry & retention funnel tracking',
    tag: 'Analytics',
    priority: 'Low',
    dueDate: 'Completed Sep 17',
    assignee: {
      initials: 'SD',
      bg: 'bg-surface-container-highest',
      text: 'text-on-surface',
    },
    completed: true,
  },
];

export function ProductPreview() {
  const [activeTab, setActiveTab] = React.useState('List (14)');
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [inProgressOpen, setInProgressOpen] = React.useState(true);
  const [reviewOpen, setReviewOpen] = React.useState(true);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const inProgressTasks = tasks.filter((t) => !t.completed);
  const reviewTasks = tasks.filter((t) => t.completed);

  return (
    <section className="mt-10 md:mt-16 relative isolate w-full">
      {/* Ambient stage elevation glow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-primary-fixed-dim/20 via-surface-tint/10 to-transparent rounded-2xl blur-xl -z-10 pointer-events-none" />

      {/* Window Container Frame */}
      <div className="w-full bg-surface-container-lowest rounded-2xl md:rounded-xl shadow-xl overflow-hidden border border-surface-container-highest/80">
        
        {/* MOBILE HEADER (lg:hidden) */}
        <div className="lg:hidden bg-surface-container-low px-3.5 py-3 flex flex-col gap-2.5 border-b border-surface-container-highest/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary-container text-on-primary flex items-center justify-center">
                <LayoutGrid size={14} />
              </div>
              <div className="flex items-center gap-1 font-label-sm text-label-sm font-semibold text-on-surface">
                <span>Acme Studio</span>
                <span className="text-outline">/</span>
                <span className="text-on-surface-variant font-normal">Core Platform</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-caption text-caption font-medium">
              Sprint 14
            </span>
          </div>

          {/* Progress Track */}
          <div className="flex flex-col gap-1.5 pt-0.5">
            <div className="flex items-center justify-between font-caption text-caption">
              <span className="text-on-surface-variant font-medium">Q3 Mobile Launch Target</span>
              <span className="text-primary-container font-semibold">68% completed</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary-container rounded-full" style={{ width: '68%' }} />
            </div>
          </div>
        </div>

        {/* DESKTOP HEADER (hidden lg:flex) */}
        <div className="hidden lg:flex h-11 bg-surface-container-low px-4 items-center justify-between select-none border-b border-surface-container-highest/60">
          {/* Left: OS dots & Workspace title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
            </div>
            <div className="h-3.5 w-px bg-surface-container-highest" />
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-primary-container text-on-primary font-caption text-caption flex items-center justify-center font-bold">
                L
              </span>
              <span className="font-label-sm text-label-sm text-on-surface font-medium">
                Acme Studio
              </span>
              <span className="text-outline font-caption text-caption">/</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Core Platform
              </span>
              <ChevronsUpDown size={16} className="text-outline" />
            </div>
          </div>

          {/* Center: Command bar trigger */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container text-outline font-body-sm text-body-sm w-72 justify-between cursor-pointer hover:bg-surface-variant transition-colors">
            <div className="flex items-center gap-2">
              <Search size={16} className="text-on-surface-variant" />
              <span className="text-on-surface-variant">
                Search tasks, views, docs...
              </span>
            </div>
            <span className="font-caption text-caption px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant shadow-sm">
              ⌘K
            </span>
          </div>

          {/* Right: Status indicator & sync state */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>All changes saved</span>
            </div>
            <div className="flex items-center -space-x-1.5">
              <div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center font-caption text-caption text-on-primary-fixed ring-2 ring-surface-container-lowest font-medium">
                ER
              </div>
              <div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center font-caption text-caption text-on-secondary-fixed ring-2 ring-surface-container-lowest font-medium">
                MT
              </div>
              <div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center font-caption text-caption text-on-tertiary-fixed ring-2 ring-surface-container-lowest font-medium">
                SK
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE TASK LIST (lg:hidden) */}
        <div className="lg:hidden p-3.5 flex flex-col gap-2.5 bg-surface-container-lowest">
          {inProgressTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2 hover:bg-surface-container transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 mt-0.5 rounded-sm bg-surface-container-highest flex items-center justify-center" />
                  <span className="font-label-md text-label-md font-medium text-on-surface leading-tight">
                    {task.title}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-caption text-caption">
                    {task.tag}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded font-caption text-caption font-medium ${
                      task.priority === 'High'
                        ? 'bg-error-container text-on-error-container'
                        : task.priority === 'Urgent'
                          ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                          : 'bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span className="text-outline font-caption text-caption">{task.dueDate}</span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full ${task.assignee.bg} ${task.assignee.text} font-caption text-[10px] font-semibold flex items-center justify-center`}
                >
                  {task.assignee.initials}
                </div>
              </div>
            </div>
          ))}

          {/* Completed Task on Mobile */}
          {reviewTasks.slice(0, 1).map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="p-2.5 rounded-lg bg-surface flex items-center justify-between opacity-75 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary-container" />
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through truncate max-w-[210px]">
                  {task.title}
                </span>
              </div>
              <span className="font-caption text-[10px] text-outline">Sep 18</span>
            </div>
          ))}
        </div>

        {/* MOBILE PREVIEW FOOTER (lg:hidden) */}
        <div className="lg:hidden px-4 py-2.5 bg-surface-container-low flex items-center justify-between border-t border-surface-container-highest/60">
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-secondary-container" />
            <span className="font-caption text-caption font-medium text-on-surface-variant">
              Auto-sync enabled
            </span>
          </div>
          <span className="font-caption text-caption text-outline">18 team nodes live</span>
        </div>

        {/* DESKTOP DASHBOARD CANVAS (hidden lg:flex) */}
        <div className="hidden lg:flex flex-row min-h-[580px]">
          {/* Left Navigation Sidebar */}
          <aside className="w-60 bg-surface-container-low p-3.5 flex flex-col justify-between shrink-0 border-r border-surface-container-highest/40">
            <div className="space-y-5">
              {/* User Context */}
              <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-surface-container transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-caption text-caption">
                    A
                  </div>
                  <span className="font-label-sm text-label-sm font-medium text-on-surface">
                    Alex Rivera
                  </span>
                </div>
                <SlidersHorizontal size={16} className="text-outline" />
              </div>

              {/* Primary Views */}
              <div className="space-y-0.5">
                <a
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="flex items-center gap-2">
                    <Inbox size={17} />
                    Inbox
                  </span>
                  <span className="font-caption text-caption px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    3
                  </span>
                </a>
                <a
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={17} />
                    My Tasks
                  </span>
                  <span className="font-caption text-caption px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                    12
                  </span>
                </a>
                <a
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Zap size={17} />
                  Active Sprints
                </a>
                <a
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <Map size={17} />
                  Roadmap
                </a>
              </div>

              {/* Pinned Projects */}
              <div className="space-y-1">
                <div className="px-2.5 font-caption text-caption uppercase tracking-wider text-outline font-semibold">
                  Pinned Projects
                </div>
                <div className="space-y-0.5">
                  <a
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm font-medium"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary-container" />
                      Q3 Mobile App
                    </span>
                    <span className="font-caption text-caption text-on-primary-fixed-variant">
                      68%
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="w-2 h-2 rounded-full bg-outline-variant" />
                    Design System v2
                  </a>
                  <a
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors font-label-sm text-label-sm"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="w-2 h-2 rounded-full bg-outline-variant" />
                    API Migration
                  </a>
                </div>
              </div>
            </div>

            {/* Online Team Sub-panel */}
            <div className="pt-4 mt-4 bg-surface-container-low rounded-lg p-2.5 border border-surface-container-highest/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-caption text-caption uppercase tracking-wider text-outline">
                  Collaborators
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface font-caption text-caption flex items-center justify-center font-medium">
                    ER
                  </div>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-secondary-container ring-1 ring-surface-container-lowest" />
                </div>
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface font-caption text-caption flex items-center justify-center font-medium">
                    MT
                  </div>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-secondary-container ring-1 ring-surface-container-lowest" />
                </div>
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface font-caption text-caption flex items-center justify-center font-medium">
                    LP
                  </div>
                  <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-outline-variant ring-1 ring-surface-container-lowest" />
                </div>
                <span className="font-caption text-caption text-on-surface-variant ml-1">
                  +4 active
                </span>
              </div>
            </div>
          </aside>

          {/* Workspace Main Content Panel */}
          <div className="flex-1 p-6 md:p-8 bg-surface-container-lowest flex flex-col justify-between overflow-x-auto">
            <div>
              {/* Project Detail Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-container-highest/30">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      Q3 Mobile App Launch
                    </h2>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={16} className="text-outline" />
                      Target: Sept 28
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span>Sprint 14 of 18</span>
                    <span className="text-outline-variant">•</span>
                    <span>Lead: Elena Rostova</span>
                  </div>
                </div>

                {/* Progress Metric Bar */}
                <div className="w-full md:w-56 p-3 rounded-lg bg-surface-container-low border border-surface-container-highest/40">
                  <div className="flex justify-between items-center mb-1.5 font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      Sprint progress
                    </span>
                    <span className="font-semibold text-primary-container">
                      68%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-container rounded-full transition-all duration-300"
                      style={{ width: '68%' }}
                    />
                  </div>
                </div>
              </div>

              {/* View Switchers & Task Actions Toolbar */}
              <div className="flex items-center justify-between pb-4 pt-4">
                {/* Views Segmented Tabs */}
                <div className="inline-flex items-center bg-surface-container-low p-1 rounded-lg">
                  {['Board', 'List (14)', 'Timeline', 'Milestones'].map(
                    (tab) => {
                      const isActive = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-1 rounded-md font-label-sm text-label-sm transition-all duration-150 cursor-pointer ${
                            isActive
                              ? 'bg-surface-container-lowest text-on-surface font-medium shadow-sm'
                              : 'text-on-surface-variant hover:text-on-surface'
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    },
                  )}
                </div>

                {/* Filters and Quick Actions */}
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-colors cursor-pointer">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm hover:bg-secondary-container transition-colors cursor-pointer">
                    <Plus size={16} />
                    <span className="hidden sm:inline">New task</span>
                  </button>
                </div>
              </div>

              {/* Structured Task Table */}
              <div className="space-y-6 mt-4">
                {/* GROUP: IN PROGRESS */}
                <div>
                  <button
                    onClick={() => setInProgressOpen(!inProgressOpen)}
                    className="flex items-center gap-2 pb-2 text-left cursor-pointer w-full group"
                  >
                    <ChevronDown
                      size={16}
                      className={`text-outline transition-transform duration-150 ${
                        inProgressOpen ? '' : '-rotate-90'
                      }`}
                    />
                    <span className="font-caption text-caption uppercase tracking-wider text-outline font-semibold">
                      In Progress ({inProgressTasks.length})
                    </span>
                  </button>

                  {inProgressOpen && (
                    <div className="space-y-1.5">
                      {inProgressTasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className="group flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 shadow-sm cursor-pointer border border-surface-container-highest/20"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-4 h-4 rounded border border-outline-variant group-hover:border-primary-container shrink-0 flex items-center justify-center transition-colors" />
                            <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                              {task.title}
                            </span>
                            <Badge variant="surface" size="sm" className="hidden sm:inline-block shrink-0">
                              {task.tag}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 shrink-0 pl-3">
                            <span
                              className={`hidden md:inline-flex items-center gap-1 font-caption text-caption ${
                                task.priority === 'Urgent'
                                  ? 'text-error font-semibold'
                                  : task.priority === 'High'
                                    ? 'text-error'
                                    : 'text-on-surface-variant'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  task.priority === 'Urgent' || task.priority === 'High'
                                    ? 'bg-error'
                                    : 'bg-outline'
                                }`}
                              />
                              {task.priority}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {task.dueDate}
                            </span>
                            <div
                              className={`w-6 h-6 rounded-full ${task.assignee.bg} ${task.assignee.text} font-caption text-caption flex items-center justify-center font-medium`}
                            >
                              {task.assignee.initials}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* GROUP: READY FOR REVIEW */}
                <div>
                  <button
                    onClick={() => setReviewOpen(!reviewOpen)}
                    className="flex items-center gap-2 pb-2 text-left cursor-pointer w-full group"
                  >
                    <ChevronDown
                      size={16}
                      className={`text-outline transition-transform duration-150 ${
                        reviewOpen ? '' : '-rotate-90'
                      }`}
                    />
                    <span className="font-caption text-caption uppercase tracking-wider text-outline font-semibold">
                      Ready for Review ({reviewTasks.length})
                    </span>
                  </button>

                  {reviewOpen && (
                    <div className="space-y-1.5">
                      {reviewTasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className="group flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors duration-150 shadow-sm cursor-pointer opacity-90 border border-surface-container-highest/20"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-4 h-4 rounded bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span className="font-body-md text-body-md text-on-surface truncate line-through text-on-surface-variant/70">
                              {task.title}
                            </span>
                            <Badge variant="surface" size="sm" className="hidden sm:inline-block shrink-0">
                              {task.tag}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 shrink-0 pl-3">
                            <span className="hidden md:inline-flex items-center gap-1 text-on-surface-variant font-caption text-caption">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  task.priority === 'Low'
                                    ? 'bg-outline-variant'
                                    : 'bg-outline'
                                }`}
                              />
                              {task.priority}
                            </span>
                            <span className="font-body-sm text-body-sm text-outline">
                              {task.dueDate}
                            </span>
                            <div
                              className={`w-6 h-6 rounded-full ${task.assignee.bg} ${task.assignee.text} font-caption text-caption flex items-center justify-center font-medium`}
                            >
                              {task.assignee.initials}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Realtime Footer Strip inside Mockup */}
            <div className="pt-6 mt-6 flex items-center justify-between text-outline font-body-sm text-body-sm border-t border-surface-container-highest/30">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-secondary" />
                <span>Auto-sync enabled across 18 team nodes</span>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <span className="hover:text-on-surface cursor-pointer transition-colors">
                  Keyboard shortcuts
                </span>
                <span>•</span>
                <span className="hover:text-on-surface cursor-pointer transition-colors">
                  Export CSV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
