export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}

export interface SitemapEntry {
  url: string;
  lastMod?: string;
  changeFreq?: string;
  priority?: number;
}

export const defaultMeta: MetaData = {
  title: 'CBE Capital',
  description: 'Leading investment banking and financial services in Ethiopia',
  keywords: ['investment banking', 'Ethiopia', 'financial services'],
  image: '/images/cbe-capital-logo.png',
  url: 'https://cbecapitalsc.com'
};