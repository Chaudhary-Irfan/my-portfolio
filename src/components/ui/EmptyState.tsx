import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  onReset?: () => void;
  resetLabel?: string;
}

export function EmptyState({
  message,
  onReset,
  resetLabel = 'Show all',
}: EmptyStateProps) {
  return (
    <motion.div
      key="empty-state"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="col-span-full flex flex-col items-center justify-center py-16 px-6"
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="mb-6 p-5 rounded-2xl bg-plum/5 dark:bg-lime/5 border border-plum/10 dark:border-lime/10"
      >
        <SearchX size={32} className="text-plum/60 dark:text-lime/60" aria-hidden />
      </motion.div>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">{message}</p>
      {onReset && (
        <button
          onClick={onReset}
          className="mt-4 text-sm font-medium text-plum dark:text-lime hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime rounded"
        >
          {resetLabel}
        </button>
      )}
    </motion.div>
  );
}
