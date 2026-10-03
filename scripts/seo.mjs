import { readFileSync, writeFileSync } from 'node:fs';

const hosting = JSON.parse(readFileSync('.openai/hosting.json', 'utf8'));
const origin = (process.env.SITE_URL || 'https://gula-logrono-antojos.originfps.chatgpt.site').replace(/\/$/, '');
if (!/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(origin)) throw new Error('SITE_URL must be an HTTPS origin');
const structuredData = {
  '@context': 'https://schema.org', '@type': 'FoodEstablishment',
  '@id': `${origin}/#gula`, name: 'GULA', url: `${origin}/`,
  description: 'Tartas de queso, fresas con salsas y helado soft en Logroño.',
  address: { '@type': 'PostalAddress', streetAddress: 'C. Siervas de Jesús, 2', addressLocality: 'Logroño', addressRegion: 'La Rioja', postalCode: '26001', addressCountry: 'ES' },
  sameAs: ['https://www.instagram.com/tienesgula/'],
  hasMap: 'https://www.google.com/maps/search/?api=1&query=GULA%20Calle%20Siervas%20de%20Jes%C3%BAs%202%20Logro%C3%B1o',
  // Do not add telephone, hours, rating, priceRange or coordinates without confirmation.
};
let html = readFileSync('dist/index.html', 'utf8');
const staticSeo = `<link rel="canonical" href="${origin}/" />\n<meta property="og:url" content="${origin}/" />\n<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`;
html = html.replace('</head>', `${staticSeo}\n</head>`);
writeFileSync('dist/index.html', html);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`);
console.log(`SEO generated for ${origin} (${hosting.project_id})`);
