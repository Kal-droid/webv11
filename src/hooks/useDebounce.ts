import { useCallback } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  return useCallback(
    (...args: Parameters<T>) => {
      const handler = setTimeout(() => {
        callback(...args);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [callback, delay]
  ) as T;
}