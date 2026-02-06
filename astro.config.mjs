import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aicaricature.tech',
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
