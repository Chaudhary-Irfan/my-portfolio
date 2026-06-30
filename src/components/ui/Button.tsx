import { motion } from 'framer-motion';
import { ReactNode, RefObject } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  magnetic?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  magnetic = true,
  type = 'button',
  disabled,
}: ButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(0.25);

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: cn(
      'text-white dark:text-gray-900',
      'bg-gradient-to-r from-plum to-plum-light dark:from-lime dark:to-emerald-400',
      'shadow-glow-plum dark:shadow-glow',
      'hover:shadow-float hover:-translate-y-0.5',
      'focus-visible:ring-plum dark:focus-visible:ring-lime'
    ),
    secondary: cn(
      'text-gray-900 dark:text-gray-100',
      'bg-white/80 dark:bg-surface-card/80 backdrop-blur-xl',
      'border border-plum/10 dark:border-lime/10',
      'hover:border-plum/30 dark:hover:border-lime/30 hover:-translate-y-0.5',
      'focus-visible:ring-plum dark:focus-visible:ring-lime'
    ),
    ghost: cn(
      'text-gray-600 dark:text-gray-300',
      'hover:text-plum dark:hover:text-lime',
      'focus-visible:ring-plum dark:focus-visible:ring-lime'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const ripple = (
    <span className="absolute inset-0 overflow-hidden rounded-2xl">
      <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-active:scale-[2.5] group-active:opacity-0 opacity-0" />
    </span>
  );

  const gradientBorder = variant === 'primary' && (
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-plum via-plum-light to-plum dark:from-lime dark:via-emerald-400 dark:to-lime opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
  );

  if (href) {
    return (
      <motion.a
        ref={ref as RefObject<HTMLAnchorElement>}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        onClick={onClick}
        onMouseMove={magnetic ? handleMouseMove : undefined}
        onMouseLeave={magnetic ? handleMouseLeave : undefined}
        whileTap={{ scale: 0.97 }}
      >
        {gradientBorder}
        {ripple}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}
      onMouseMove={magnetic ? handleMouseMove : undefined}
      onMouseLeave={magnetic ? handleMouseLeave : undefined}
      whileTap={{ scale: 0.97 }}
    >
      {gradientBorder}
      {ripple}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
