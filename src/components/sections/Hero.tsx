import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2, Briefcase } from 'lucide-react';
import { profile, socialLinks, stats, techChips, typewriterRoles } from '@/data';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedCounter, FloatingBlob, GridOverlay, NoiseTexture, MouseGlow } from '@/components/ui/Effects';
import { useScrollTo } from '@/context/LenisContext';
import avatarImg from '@/Assets/me.png';

const FloatingGeometries = lazy(() =>
  import('@/components/three/FloatingGeometries').then((m) => ({ default: m.FloatingGeometries }))
);

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterRoles[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % typewriterRoles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <span className="text-plum dark:text-lime font-medium">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  const { scrollTo } = useScrollTo();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <Suspense fallback={null}>
        <FloatingGeometries className="absolute inset-0 z-[1] pointer-events-none opacity-70" />
      </Suspense>
      <MouseGlow />
      <GridOverlay />
      <NoiseTexture />

      <FloatingBlob
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-plum/20 dark:bg-lime/10 blur-[100px]"
        delay={0}
      />
      <FloatingBlob
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-plum-light/30 dark:bg-emerald-500/10 blur-[120px]"
        delay={2}
      />
      <FloatingBlob
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-400/10 dark:bg-lime/5 blur-[80px]"
        delay={4}
      />

      <div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          background:
            'linear-gradient(135deg, rgba(109,40,217,0.08) 0%, rgba(196,181,253,0.12) 50%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal delay={0.1}>
              <Badge variant="success" pulse className="mb-6">
                {profile.availability}
              </Badge>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                {profile.title} · {profile.yearsExperience}+ Years
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <h1 className="font-display text-hero font-extrabold text-gray-900 dark:text-white mb-4">
                Building{' '}
                <span className="bg-gradient-to-r from-plum via-plum-light to-plum dark:from-lime dark:via-emerald-400 dark:to-lime bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  premium
                </span>
                <br />
                software products.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-2 max-w-xl">
                {profile.tagline}
              </p>
              <p className="text-lg mb-6">
                <TypewriterText />
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Building2 size={14} className="text-plum dark:text-lime" />
                  {profile.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-plum dark:text-lime" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-plum dark:text-lime" />
                  {profile.role}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-wrap gap-3 mb-8">
                {techChips.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/60 dark:bg-surface-card/60 backdrop-blur border border-plum/10 dark:border-lime/10 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="flex flex-wrap gap-4">
                <Button href="#projects" size="lg" onClick={(e) => { e.preventDefault(); scrollTo('#projects', { offset: -80 }); }}>
                  View Projects <ArrowRight size={18} />
                </Button>
                <Button href={socialLinks.whatsapp} variant="secondary" size="lg">
                  Let's Talk
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-plum/[0.06] dark:border-lime/[0.06]">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl text-plum dark:text-lime">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} direction="left">
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-plum/20 to-plum-light/20 dark:from-lime/10 dark:to-emerald-400/10 blur-2xl scale-110" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-plum/10 dark:border-lime/10 shadow-float">
                  <img
                    src={avatarImg}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/20 dark:from-lime/10 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl bg-white/80 dark:bg-surface-card/80 backdrop-blur-xl border border-plum/10 dark:border-lime/10 shadow-glass"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400">Currently at</p>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{profile.company}</p>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
