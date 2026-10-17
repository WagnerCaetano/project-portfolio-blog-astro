// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io/portfolio-blog-astro',
  integrations: [tailwind()],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
        },
      ],
    ],
    shikiConfig: {
      theme: 'github-dark',
      langs: [],
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
          chunkFileNames: 'assets/[hash].js',
          entryFileNames: 'assets/[hash].js',
        },
      },
    },
  },
});
