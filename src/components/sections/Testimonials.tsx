import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => {
      const next = c + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const t = testimonials[current];

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-transparent via-plum/[0.02] to-transparent dark:via-lime/[0.02]">
      <Reveal>
        <SectionHeading
          label="Testimonials"
          title="Client"
          highlight="Stories"
          description="What partners and clients say about working together."
        />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-8 md:p-12 text-center relative">
                <Quote
                  size={40}
                  className="absolute top-6 left-6 text-plum/20 dark:text-lime/20"
                />
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plum to-plum-light dark:from-lime dark:to-emerald-400 flex items-center justify-center text-white dark:text-gray-900 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-xl bg-white/60 dark:bg-surface-card/60 border border-plum/10 dark:border-lime/10 text-gray-600 dark:text-gray-400 hover:text-plum dark:hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? 'w-6 bg-plum dark:bg-lime'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              aria-label="Next testimonial"
              className="p-2.5 rounded-xl bg-white/60 dark:bg-surface-card/60 border border-plum/10 dark:border-lime/10 text-gray-600 dark:text-gray-400 hover:text-plum dark:hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
