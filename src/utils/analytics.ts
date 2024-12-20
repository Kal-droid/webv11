type EventName = 'hero_button_click' | 'navigation' | 'form_submit';
type EventData = Record<string, string | number | boolean>;

export const trackEvent = (eventName: EventName, data: EventData) => {
  // This is a placeholder for your actual analytics implementation
  console.log(`[Analytics] ${eventName}:`, data);
  
  // Example implementation with Google Analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, data);
  }
};