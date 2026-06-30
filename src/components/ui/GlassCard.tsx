import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6',
        'bg-white/70 dark:bg-surface-card/60',
        'backdrop-blur-xl',
        'border border-plum/[0.08] dark:border-lime/[0.08]',
        'shadow-glass dark:shadow-glass-dark',
        hover && 'transition-all duration-500 hover:-translate-y-1 hover:shadow-float',
        glow && 'dark:shadow-glow',
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-plum/[0.03] to-transparent dark:from-lime/[0.03] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
