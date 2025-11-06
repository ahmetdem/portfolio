import { useCallback, useEffect, useMemo, useState } from 'react';

export const useInViewport = <T extends Element>(options?: IntersectionObserverInit) => {
  const [target, setTarget] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  const mergedOptions = useMemo<IntersectionObserverInit>(
    () => ({
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? '0px',
      threshold: options?.threshold ?? 0.3
    }),
    [options?.root, options?.rootMargin, options?.threshold]
  );

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      mergedOptions
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [target, mergedOptions]);

  const ref = useCallback((node: T | null) => {
    setTarget(node);
  }, []);

  return { ref, isInView };
};
