// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set to the final domain once known (used for canonical URLs and og:url).
  site: 'https://www.g-filmlab.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
