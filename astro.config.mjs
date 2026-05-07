import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ia-medecin.com',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: item.url === 'https://www.ia-medecin.com/' ? 1.0 : 0.8,
        };
      },
    }),
  ],
});
