import { useEffect, useState } from 'react';

type Mode = 'light' | 'dark';

const storageKey = 'hexacore-theme';

export const useDarkMode = () => {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(storageKey) as Mode | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem(storageKey, mode);
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { mode, toggle };
};
