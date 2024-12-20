import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after DOM updates
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant instead of smooth for consistent behavior
      });
    };

    // Queue the scroll operation
    requestAnimationFrame(scrollToTop);
  }, [pathname]); // Only trigger when pathname changes
}