import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Lock, Calendar, Zap } from 'lucide-react';
import { projects, projectFilters } from '@/data';
import type { Project } from '@/data/projects';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { EmptyState } from '@/components/ui/EmptyState';
import { CardTilt } from '@/components/ui/CardTilt';
import { useFilter } from '@/hooks/useFilter';

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const predicate = useCallback(
    (project: Project, filterId: string) => project.category === filterId,
    []
  );
  const { filter, setFilter, filtered } = useFilter(projects, predicate);

  const activeFilter = projectFilters.find((f) => f.id === filter);

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          label="Portfolio"
          title="Selected"
          highlight="Projects"
          description="Premium case studies showcasing real-world impact across web, mobile, and full-stack development."
        />
      </Reveal>

      <Reveal delay={0.15}>
        <FilterTabs
          tabs={projectFilters}
          activeId={filter}
          onChange={setFilter}
          className="mb-12"
          layoutId="projects-filter"
        />
      </Reveal>

      <div className="space-y-8 min-h-[300px]" role="tabpanel" aria-label={activeFilter ? `${activeFilter.label} projects` : 'All projects'}>
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <EmptyState
              message="No projects found in this category yet."
              onReset={() => setFilter('all')}
            />
          ) : (
            filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardTilt maxTilt={4}>
                  <GlassCard
                    className={`overflow-hidden ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    hover
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                      <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <motion.div
                          className="aspect-video rounded-2xl overflow-hidden border border-plum/10 dark:border-lime/10 bg-gradient-to-br from-plum/5 to-transparent dark:from-lime/5"
                          animate={{ scale: hoveredId === project.id ? 1.02 : 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={`${project.title} preview`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center p-8">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-plum/10 dark:bg-lime/10 flex items-center justify-center text-plum dark:text-lime">
                                  {project.private ? <Lock size={28} /> : <Zap size={28} />}
                                </div>
                                <p className="font-display font-bold text-xl text-gray-900 dark:text-white">
                                  {project.title}
                                </p>
                              </div>
                            </div>
                          )}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-plum/40 dark:from-gray-900/60 to-transparent pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredId === project.id ? 1 : 0.3 }}
                          />
                        </motion.div>
                      </div>

                      <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                            <Calendar size={12} /> {project.timeline}
                          </span>
                          {project.private && (
                            <span className="px-2 py-0.5 rounded-md text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                              Private
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Problem</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.problem}</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Impact</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.impact}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-plum/5 dark:bg-lime/5 text-plum dark:text-lime border border-plum/10 dark:border-lime/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.ghLink && (
                            <Button href={project.ghLink} variant="secondary" size="sm">
                              <Github size={16} /> GitHub
                            </Button>
                          )}
                          {project.demoLink && (
                            <Button href={project.demoLink} size="sm">
                              <ExternalLink size={16} /> Live Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </CardTilt>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
