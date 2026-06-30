import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], enabled = true) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]?.replace('#', '') ?? '');

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    const ids = sectionIds.map((id) => id.replace('#', ''));
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        if (visibleSections.size === 0) return;

        let bestId = '';
        let bestRatio = -1;
        let bestIndex = -1;

        visibleSections.forEach((ratio, id) => {
          const index = ids.indexOf(id);
          if (ratio > bestRatio || (ratio === bestRatio && index > bestIndex)) {
            bestRatio = ratio;
            bestId = id;
            bestIndex = index;
          }
        });

        if (bestId) setActiveSection(bestId);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return activeSection;
}
