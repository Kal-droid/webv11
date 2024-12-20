import { useState, useEffect } from 'react';
import { breakpoints } from '../utils/theme';

type Breakpoint = keyof typeof breakpoints;

export function useMediaQuery(breakpoint: Breakpoint) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${breakpoints[breakpoint]})`;
    const mediaQuery = window.matchMedia(query);
    
    const updateMatches = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateMatches);

    return () => {
      mediaQuery.removeEventListener('change', updateMatches);
    };
  }, [breakpoint]);

  return matches;
}