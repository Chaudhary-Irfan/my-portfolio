import { useEffect } from 'react';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { About } from './About';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { useScrollTo } from '@/context/LenisContext';

export function LandingPage() {
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => scrollTo(hash, { offset: -80 }), 150);
      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  return (
    <main>
      <Hero />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Contact />
    </main>
  );
}
