// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Final domain (used for canonical URLs and og:url).
  site: 'https://g-filmlab.org',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
