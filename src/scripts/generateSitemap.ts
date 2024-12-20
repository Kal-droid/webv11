import fs from 'fs';
import { generateSitemapXML } from '../utils/seo/sitemap';

// Generate sitemap.xml
const sitemap = generateSitemapXML();
fs.writeFileSync('public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully!');