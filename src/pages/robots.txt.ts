import type { APIRoute } from 'astro';
import { getBaseUrl } from '../lib/siteUrl';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(`${getBaseUrl()}sitemap-index.xml`, site).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
