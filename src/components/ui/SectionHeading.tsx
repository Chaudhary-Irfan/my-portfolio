import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-plum dark:text-lime bg-plum/5 dark:bg-lime/5 border border-plum/10 dark:border-lime/10">
          {label}
        </span>
      )}
      <h2 className="font-display text-section font-bold text-gray-900 dark:text-gray-50">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="bg-gradient-to-r from-plum to-plum-light dark:from-lime dark:to-emerald-400 bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function Section({ children, id, className }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={cn('relative py-24 md:py-32 px-4 md:px-8', className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
