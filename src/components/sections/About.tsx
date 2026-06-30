import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, MapPin } from 'lucide-react';
import { profile, timeline, stats } from '@/data';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedCounter } from '@/components/ui/Effects';
import aboutImg from '@/Assets/about.png';

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Trophy,
};

export function About() {
  return (
    <Section id="about" className="bg-gradient-to-b from-transparent via-plum/[0.02] to-transparent dark:via-lime/[0.02]">
      <Reveal>
        <SectionHeading
          label="Story"
          title="About"
          highlight="Me"
          description="A professional journey driven by craftsmanship, curiosity, and a commitment to building software that matters."
        />
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
        <Reveal direction="right">
          <GlassCard className="p-8">
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
              <MapPin size={14} className="text-plum dark:text-lime" />
              {profile.location}
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-plum to-plum-light dark:from-lime dark:to-emerald-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{profile.bio}</p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Currently working as a <strong className="text-gray-900 dark:text-white">{profile.role}</strong> at{' '}
              <strong className="text-plum dark:text-lime">{profile.company}</strong>.
            </p>
            <blockquote className="border-l-2 border-plum dark:border-lime pl-4 italic text-gray-500 dark:text-gray-400">
              "{profile.quote}"
            </blockquote>
            <p className="mt-4 text-sm text-gray-400">{profile.education}</p>
          </GlassCard>
        </Reveal>

        <Reveal direction="left">
          <motion.div whileHover={{ scale: 1.02 }} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-plum/20 to-transparent dark:from-lime/10 blur-2xl" />
            <img
              src={aboutImg}
              alt="Developer at work"
              className="relative rounded-3xl w-full border border-plum/10 dark:border-lime/10 shadow-float"
              loading="lazy"
            />
          </motion.div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center py-6" hover={false}>
              <div className="text-3xl font-display font-bold text-plum dark:text-lime">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-10 text-center">
          Professional Timeline
        </h3>
      </Reveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-plum/30 via-plum-light/30 to-transparent dark:from-lime/30 dark:via-emerald-400/30 md:-translate-x-px" />

        {timeline.map((item, i) => {
          const Icon = typeIcons[item.type];
          const isLeft = i % 2 === 0;

          return (
            <Reveal key={item.id} delay={i * 0.1}>
              <div
                className={`relative flex items-start gap-6 mb-10 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <GlassCard className="inline-block text-left">
                    <span className="text-xs font-mono text-plum dark:text-lime">{item.year}</span>
                    <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-plum/80 dark:text-lime/80 font-medium">{item.organization}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-surface-card border-2 border-plum dark:border-lime flex items-center justify-center z-10">
                  <Icon size={14} className="text-plum dark:text-lime" />
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
