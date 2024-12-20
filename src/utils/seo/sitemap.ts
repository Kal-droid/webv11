interface SitemapEntry {
  url: string;
  lastMod?: string;
  changeFreq?: string;
  priority?: number;
}

export const sitemapEntries: SitemapEntry[] = [
  { url: '/', priority: 1.0, changeFreq: 'weekly' },
  { url: '/services', priority: 0.8, changeFreq: 'weekly' },
  { url: '/expertise', priority: 0.8, changeFreq: 'monthly' },
  { url: '/vision', priority: 0.7, changeFreq: 'monthly' },
  { url: '/partnerships', priority: 0.7, changeFreq: 'monthly' },
  { url: '/contact', priority: 0.6, changeFreq: 'monthly' }
];

export function generateSitemapXML(): string {
  const entries = sitemapEntries.map(entry => `
    <url>
      <loc>https://cbecapitalsc.com${entry.url}</loc>
      ${entry.lastMod ? `<lastmod>${entry.lastMod}</lastmod>` : ''}
      ${entry.changeFreq ? `<changefreq>${entry.changeFreq}</changefreq>` : ''}
      ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${entries}
    </urlset>`;
}