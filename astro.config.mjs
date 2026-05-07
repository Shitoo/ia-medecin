import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ia-medecin.com',
  integrations: [sitemap()],
});
