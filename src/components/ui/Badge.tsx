import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'outline';
  className?: string;
  pulse?: boolean;
}

export function Badge({ children, variant = 'default', className, pulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide',
        variant === 'default' &&
          'bg-plum/10 dark:bg-lime/10 text-plum dark:text-lime border border-plum/20 dark:border-lime/20',
        variant === 'success' &&
          'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
        variant === 'outline' &&
          'bg-transparent border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300',
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
