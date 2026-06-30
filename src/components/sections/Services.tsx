import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import {
  Layers,
  Smartphone,
  LayoutDashboard,
  Plug,
  Wrench,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { services } from '@/data';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Reveal, staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { CardTilt } from '@/components/ui/CardTilt';
import { socialLinks } from '@/data';

const DeviceMockup3D = lazy(() =>
  import('@/components/three/DeviceMockup3D').then((m) => ({ default: m.DeviceMockup3D }))
);

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers size={28} />,
  smartphone: <Smartphone size={28} />,
  'layout-dashboard': <LayoutDashboard size={28} />,
  plug: <Plug size={28} />,
  wrench: <Wrench size={28} />,
};

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 opacity-40 pointer-events-none hidden lg:block">
        <Suspense fallback={null}>
          <DeviceMockup3D className="w-full h-full" />
        </Suspense>
      </div>

      <Reveal>
        <SectionHeading
          label="Services"
          title="What I"
          highlight="Deliver"
          description="Agency-grade development services with clear deliverables, timelines, and business value."
        />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={staggerItem}>
            <CardTilt maxTilt={5}>
            <GlassCard className="h-full group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-plum/5 to-plum-light/5 dark:from-lime/5 dark:to-emerald-400/5 pointer-events-none" />

              <div className="p-3 rounded-2xl w-fit bg-plum/10 dark:bg-lime/10 text-plum dark:text-lime mb-5 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon]}
              </div>

              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="mb-4 p-3 rounded-xl bg-plum/[0.03] dark:bg-lime/[0.03] border border-plum/[0.06] dark:border-lime/[0.06]">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Business Value</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.value}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 size={14} className="text-plum dark:text-lime shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-plum/[0.06] dark:border-lime/[0.06]">
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={12} /> {service.timeline}
                </span>
                <Button href={socialLinks.whatsapp} variant="ghost" size="sm" magnetic={false}>
                  Get Quote →
                </Button>
              </div>
            </GlassCard>
            </CardTilt>
          </motion.div>
        ))}
      </motion.div>

      <Reveal>
        <GlassCard className="text-center py-12 px-8">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
            Ready to build something{' '}
            <span className="bg-gradient-to-r from-plum to-plum-light dark:from-lime dark:to-emerald-400 bg-clip-text text-transparent">
              exceptional
            </span>
            ?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss your project and create a premium digital product together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={socialLinks.email} size="lg">
              Start a Project
            </Button>
            <Button href={socialLinks.linkedin} variant="secondary" size="lg">
              View LinkedIn
            </Button>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
