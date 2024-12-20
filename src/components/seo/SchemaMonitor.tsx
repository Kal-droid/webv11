import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../utils/seo/analytics';
import { pageMeta } from '../../utils/seo/meta';

export default function SchemaMonitor() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname);

    // Update schema markup based on current page
    const currentPage = location.pathname.split('/')[1] || 'home';
    const meta = pageMeta[currentPage as keyof typeof pageMeta];

    if (meta) {
      // Update meta tags
      document.title = `${meta.title} - CBE Capital`;
      const descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        descriptionTag.setAttribute('content', meta.description);
      }
    }
  }, [location]);

  return null;
}