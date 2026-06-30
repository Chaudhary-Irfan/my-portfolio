import { createContext, useContext, ReactNode } from 'react';
import { useLenis } from '@/hooks/useLenis';

interface LenisContextType {
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number }) => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export function LenisProvider({ children }: { children: ReactNode }) {
  const { scrollTo } = useLenis();

  return (
    <LenisContext.Provider value={{ scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useScrollTo() {
  const context = useContext(LenisContext);
  if (!context) {
    return {
      scrollTo: (target: string | number | HTMLElement) => {
        if (typeof target === 'string') {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: target, behavior: 'smooth' });
        }
      },
    };
  }
  return context;
}
