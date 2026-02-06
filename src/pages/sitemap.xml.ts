import type { APIRoute } from 'astro';
import { LOCALES, PAGE_IDS, SITE_URL, getPath } from '../lib/site';

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = PAGE_IDS.map((pageId) => {
    const primary = `${SITE_URL}${getPath('en', pageId)}`;
    const alternates = LOCALES.map((locale) => {
      const href = `${SITE_URL}${getPath(locale, pageId)}`;
      return `<xhtml:link rel=\"alternate\" hreflang=\"${locale}\" href=\"${href}\" />`;
    }).join('');

    const priority = pageId === 'home' ? '1.0' : '0.8';
    const changefreq = pageId === 'home' ? 'daily' : 'weekly';

    return `<url><loc>${primary}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority>${alternates}</url>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
