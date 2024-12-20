import { Organization, WebSite, WithContext } from 'schema-dts';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CBE Capital',
    url: 'https://cbecapitalsc.com',
    logo: 'https://cbecapitalsc.com/images/cbe-capital-logo.png',
    description: 'Leading investment banking and financial services in Ethiopia',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Ethiopia',
      addressLocality: 'Addis Ababa'
    }
  };
}

export function generateWebsiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CBE Capital',
    url: 'https://cbecapitalsc.com'
  };
}