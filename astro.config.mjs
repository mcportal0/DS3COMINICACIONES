// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://mcportal0.github.io',
  base: 'DS3COMUNICACIONES',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});