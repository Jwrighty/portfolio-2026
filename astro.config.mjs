import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: confirm ownership of jasonwright.io before go-live
  site: 'https://jasonwright.io',
  output: 'static',
  // Keeps generated sitemap URLs aligned with the canonical paths built in
  // src/lib/meta.ts (and with how Vercel serves the static output).
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
