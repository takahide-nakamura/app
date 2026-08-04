// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages用仮URL（本番公開時にアカウント名等に合わせて変更可能）
  site: 'https://example.github.io',
  integrations: [sitemap()],
});