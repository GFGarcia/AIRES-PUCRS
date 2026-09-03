// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
// Canonical origin of the deployed site. Override per environment with SITE_URL
// (e.g. a Netlify/Vercel deploy preview) — everything else derives from `Astro.site`.
const site = process.env.SITE_URL ?? 'https://www.airespucrs.org';

// https://astro.build/config
export default defineConfig({
  site,

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en' }
      },
      filter: (page) => !page.includes('/404')
    })
  ],

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: false
    }
  },

  // Prefetch on hover for every internal link, so navigations feel instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  image: {
    // Emit responsive srcset/sizes for <Image>/<Picture> and markdown images.
    responsiveStyles: true,
    layout: 'constrained'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
