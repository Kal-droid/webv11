// Google Search Console tracking
export function initializeSearchConsole() {
  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = process.env.VITE_GOOGLE_SITE_VERIFICATION; // Get from environment variable
  document.head.appendChild(meta);
}

// Analytics tracking
export function trackPageView(path: string) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}