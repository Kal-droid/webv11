import { MetaData, defaultMeta } from './types';

export function updateMetaTags(pathname: string) {
  const currentPage = pathname.split('/')[1] || 'home';
  const meta = pageMeta[currentPage as keyof typeof pageMeta];
  
  if (meta) {
    document.title = `${meta.title} - CBE Capital`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description);
    }
  }
}

export const pageMeta: Record<string, MetaData> = {
  home: {
    ...defaultMeta,
    title: 'Home',
    description: 'CBE Capital - Ethiopia\'s premier investment banking institution offering comprehensive financial solutions, market expertise, and innovative services for sustainable growth.',
    keywords: ['CBE Capital', 'Ethiopian investment banking', 'financial services Ethiopia', 'corporate finance']
  },
  services: {
    ...defaultMeta,
    title: 'Services & Solutions',
    description: 'Discover CBE Capital\'s comprehensive suite of investment banking services, including corporate finance, advisory services, and innovative financial solutions tailored for the Ethiopian market.',
    keywords: ['investment banking services', 'corporate finance Ethiopia', 'financial advisory', 'CBE Capital services']
  },
  expertise: {
    ...defaultMeta,
    title: 'Our Expertise',
    description: 'Leverage CBE Capital\'s deep industry expertise and market knowledge. Our team of professionals brings global experience to Ethiopia\'s financial landscape.',
    keywords: ['financial expertise', 'market knowledge', 'investment professionals', 'Ethiopian finance experts']
  },
  vision: {
    ...defaultMeta,
    title: 'Our Vision',
    description: 'CBE Capital\'s vision for transforming Ethiopia\'s financial landscape through innovation, expertise, and strategic leadership in investment banking.',
    keywords: ['financial vision', 'Ethiopian banking future', 'market transformation', 'financial innovation']
  },
  partnerships: {
    ...defaultMeta,
    title: 'Partnerships',
    description: 'Build strategic partnerships with CBE Capital. We collaborate with institutions, corporations, and investors to drive sustainable financial growth in Ethiopia.',
    keywords: ['strategic partnerships', 'financial collaboration', 'Ethiopian investment partners', 'corporate partnerships']
  },
  contact: {
    ...defaultMeta,
    title: 'Contact Us',
    description: 'Connect with CBE Capital\'s team of financial experts. We\'re here to help you navigate Ethiopia\'s investment banking landscape.',
    keywords: ['contact CBE Capital', 'Ethiopian investment banking contact', 'financial services contact']
  }
};