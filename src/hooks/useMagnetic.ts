import { useRef, useCallback, MouseEvent } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength, reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
