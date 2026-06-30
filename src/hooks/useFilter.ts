import { useMemo, useState, useCallback } from 'react';

export function useFilter<T>(
  items: T[],
  predicate: (item: T, filterId: string) => boolean,
  initialFilter = 'all'
) {
  const [filter, setFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter((item) => predicate(item, filter));
  }, [items, filter, predicate]);

  const selectFilter = useCallback((id: string) => {
    setFilter(id);
  }, []);

  return { filter, setFilter: selectFilter, filtered };
}
