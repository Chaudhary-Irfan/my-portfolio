import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SectionDivider() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <hr className="border-plum/[0.06] dark:border-lime/[0.06]" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="h-px origin-center bg-gradient-to-r from-transparent via-plum/20 dark:via-lime/20 to-transparent"
      />
    </div>
  );
}
