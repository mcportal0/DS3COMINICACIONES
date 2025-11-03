// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // site: 'mcportal0.github.io',
  // base: '/web-ds3-example.github.io/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});