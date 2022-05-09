import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | undefined) {
  const savedCallback = useRef<() => void>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== undefined) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
