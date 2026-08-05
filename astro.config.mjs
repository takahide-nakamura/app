import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 本番サイトのドメインURL
  site: 'https://takahide-nakamura.github.io',
  // GitHub Pagesのリポジトリ名に合わせたサブディレクトリパス設定
  base: '/app',
  
  integrations: [sitemap()],
});