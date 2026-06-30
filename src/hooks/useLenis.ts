import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from './useReducedMotion';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [reducedMotion]);

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: { offset?: number }
  ) => {
    if (!lenisRef.current) {
      if (typeof target === 'string') {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
      return;
    }

    if (typeof target === 'string' && target.startsWith('#')) {
      const el = document.querySelector(target);
      if (el instanceof HTMLElement) {
        lenisRef.current.scrollTo(el, {
          duration: 1.2,
          offset: options?.offset ?? -80,
        });
        return;
      }
    }

    lenisRef.current.scrollTo(target, {
      duration: 1.2,
      offset: options?.offset ?? 0,
    });
  };

  return { scrollTo };
}
