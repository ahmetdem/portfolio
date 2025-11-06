import { useCallback, useEffect, useState } from 'react';

type CarouselState = {
  index: number;
  direction: 1 | -1;
};

export const useCarousel = (length: number, delay = 10000) => {
  const [state, setState] = useState<CarouselState>({ index: 0, direction: 1 });
  const [autoEnabled, setAutoEnabled] = useState(true);

  const advance = useCallback(
    (step: number) => {
      if (length === 0) return;
      setState((prev) => {
        const nextIndex = (prev.index + step + length) % length;
        const direction: 1 | -1 = step >= 0 ? 1 : -1;
        return { index: nextIndex, direction };
      });
    },
    [length]
  );

  const goTo = useCallback(
    (target: number) => {
      if (target < 0 || target >= length) return;
      setState((prev) => {
        if (target === prev.index) return prev;
        const direction: 1 | -1 = target > prev.index ? 1 : -1;
        return { index: target, direction };
      });
    },
    [length]
  );

  useEffect(() => {
    if (length <= 1 || !autoEnabled) return;
    const id = window.setInterval(() => advance(1), delay);
    return () => window.clearInterval(id);
  }, [advance, delay, length, autoEnabled]);

  return {
    index: state.index,
    direction: state.direction,
    next: () => advance(1),
    prev: () => advance(-1),
    goTo,
    setAutoAdvanceEnabled: setAutoEnabled
  };
};
