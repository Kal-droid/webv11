import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './analytics';
import { updateMetaTags } from './meta';

export function useSchemaMonitor() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname);

    // Update meta tags
    updateMetaTags(location.pathname);
  }, [location]);
}