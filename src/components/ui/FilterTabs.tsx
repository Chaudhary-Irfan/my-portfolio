import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FilterTab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  layoutId?: string;
}

export function FilterTabs({
  tabs,
  activeId,
  onChange,
  className,
  layoutId = 'filter-indicator',
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter options"
      className={cn('flex flex-wrap justify-center gap-2', className)}
    >
      {tabs.map((tab) => {
        const isActive = activeId === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 z-0',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime focus-visible:ring-offset-2',
              isActive
                ? 'text-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-400 border border-plum/10 dark:border-lime/10 bg-white/60 dark:bg-surface-card/60 hover:border-plum/30 dark:hover:border-lime/30'
            )}
          >
            {tab.label}
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-xl bg-plum dark:bg-lime shadow-glow-plum dark:shadow-glow -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
