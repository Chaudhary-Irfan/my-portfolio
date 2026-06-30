import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  load: boolean;
}

export function Preloader({ load }: PreloaderProps) {
  return (
    <AnimatePresence>
      {load && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-light dark:bg-surface-dark"
        >
          <div className="text-center">
            <motion.div
              className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-plum dark:border-lime border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-display font-semibold text-gray-900 dark:text-white"
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
