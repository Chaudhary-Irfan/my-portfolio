import { useCallback } from 'react';
import { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Cloud,
  Layout,
  Layers,
} from 'lucide-react';
import { skills, skillCategories } from '@/data';
import type { Skill } from '@/data/skills';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { EmptyState } from '@/components/ui/EmptyState';
import { CardTilt } from '@/components/ui/CardTilt';
import { useFilter } from '@/hooks/useFilter';

const SkillOrbit = lazy(() =>
  import('@/components/three/SkillOrbit').then((m) => ({ default: m.SkillOrbit }))
);

const iconMap: Record<string, React.ReactNode> = {
  react: <Code2 size={24} />,
  mobile: <Smartphone size={24} />,
  server: <Server size={24} />,
  database: <Database size={24} />,
  cloud: <Cloud size={24} />,
  layout: <Layout size={24} />,
  code: <Code2 size={24} />,
  layers: <Layers size={24} />,
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

export function Skills() {
  const predicate = useCallback(
    (skill: Skill, filterId: string) => skill.category === filterId,
    []
  );
  const { filter, setFilter, filtered } = useFilter(skills, predicate);

  const activeCategory = skillCategories.find((c) => c.id === filter);

  return (
    <Section id="skills" className="bg-gradient-to-b from-transparent via-plum/[0.02] to-transparent dark:via-lime/[0.02]">
      <div className="absolute top-12 right-4 md:right-12 w-32 h-32 opacity-60 pointer-events-none">
        <Suspense fallback={null}>
          <SkillOrbit className="w-full h-full" />
        </Suspense>
      </div>

      <Reveal>
        <SectionHeading
          label="Expertise"
          title="Technologies I"
          highlight="Master"
          description="Interactive technology cards showcasing depth of experience across the full stack."
        />
      </Reveal>

      <Reveal delay={0.15}>
        <FilterTabs
          tabs={skillCategories}
          activeId={filter}
          onChange={setFilter}
          className="mb-12"
          layoutId="skills-filter"
        />
      </Reveal>

      <motion.div
        key={filter}
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-h-[200px]"
        role="tabpanel"
        aria-label={activeCategory ? `${activeCategory.label} skills` : 'All skills'}
      >
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <EmptyState
              message="No technologies found in this category yet."
              onReset={() => setFilter('all')}
            />
          ) : (
            filtered.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <CardTilt>
                  <GlassCard className="group h-full cursor-default" glow>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-plum/10 dark:bg-lime/10 text-plum dark:text-lime group-hover:scale-110 transition-transform duration-300">
                        {iconMap[skill.icon] || <Code2 size={24} />}
                      </div>
                      <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase">
                        {skill.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-mono text-plum dark:text-lime mb-3">{skill.experience}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {skill.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-plum/[0.06] dark:border-lime/[0.06]">
                      <span className="text-xs text-gray-400">{skill.projectsCount} projects</span>
                      <span className="w-8 h-1 rounded-full bg-gradient-to-r from-plum to-plum-light dark:from-lime dark:to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </GlassCard>
                </CardTilt>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
