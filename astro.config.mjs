import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.BASE_URL ? 'https://xpfasd.github.io' : 'https://aicaricature.tech',
  base: process.env.BASE_URL || '/',
  trailingSlash: 'always',
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
