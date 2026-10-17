---
title: 'Getting Started with Astro: The Modern Web Framework'
description: 'Discover why Astro is becoming the go-to framework for building fast, content-focused websites with zero JavaScript by default.'
date: 2024-03-10
tags: ['Astro', 'Web Development', 'Frontend', 'Performance']
published: true
---

Astro has taken the web development world by storm with its innovative approach to building fast websites. In this post, we'll explore what makes Astro special and how to get started with it.

## What is Astro?

[Astro](https://astro.build) is a modern web framework that delivers lightning-fast performance by shipping zero JavaScript to the browser by default. It's designed for content-driven websites like blogs, portfolios, and documentation sites.

### Key Features

- **Zero JavaScript by default**: Only send the JavaScript you actually need
- **Island Architecture**: Hydrate interactive components independently
- **Framework Agnostic**: Use React, Vue, Svelte, or vanilla JavaScript
- **Built-in Optimizations**: Image optimization, code splitting, and more
- **Content Collections**: Type-safe content management for Markdown and MDX

## Getting Started

Let's create a new Astro project:

```bash
npm create astro@latest my-astro-site
cd my-astro-site
npm install
npm run dev
```

Your site will be available at `http://localhost:4321`.

## Project Structure

```
my-astro-site/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── layouts/     # Page layouts
│   └── pages/       # Route pages
├── astro.config.mjs # Configuration
└── package.json
```

## Creating Your First Page

Create a new file in `src/pages/about.astro`:

```astro
---
const pageTitle = 'About Me';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>{pageTitle}</h1>
    <p>Welcome to my Astro site!</p>
  </body>
</html>
```

## Using Components

Astro uses `.astro` files for components, which combine HTML, CSS, and JavaScript:

```astro
---
const props = Astro.props;
interface Props {
  title: string;
  description?: string;
}

const { title, description } = props;
---

<div class="card">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  .card {
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style>
```

## Content Collections

For blog posts and other content, use Astro's Content Collections:

1. Create a collection in `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

2. Add Markdown files to `src/content/blog/`:

```md
---
title: 'My First Post'
date: 2024-03-10
tags: ['Astro', 'Tutorial']
---

This is my first blog post!
```

3. Query and display content:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => (
    <li>
      <a href={`/blog/${post.slug}`}>
        {post.data.title}
      </a>
    </li>
  ))}
</ul>
```

## Adding Interactivity

When you need JavaScript, use client directives:

```astro
<Counter client:load />
```

```astro
---
let count = 0;
---

<button onClick={() => count++}>
  Count: {count}
</button>
```

Available directives:
- `client:load` - Load on page load
- `client:idle` - Load when browser is idle
- `client:visible` - Load when element is visible
- `client:media` - Load when media query matches

## Deployment

Astro builds to static HTML, making it easy to deploy anywhere:

```bash
npm run build
```

Popular hosting options:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## Why Choose Astro?

### Performance

Astro sites are incredibly fast because they ship minimal JavaScript. The framework automatically:
- Removes unused CSS
- Optimizes images
- Code splits JavaScript
- Minifies HTML, CSS, and JS

### Developer Experience

- TypeScript support out of the box
- Hot module replacement
- Intuitive file-based routing
- Rich ecosystem of integrations

### Flexibility

Mix and match frameworks in the same project:

```astro
---
import ReactCounter from '../components/ReactCounter.jsx';
import VueButton from '../components/VueButton.vue';
import SvelteCard from '../components/SvelteCard.svelte';
---

<ReactCounter client:load />
<VueButton client:idle />
<SvelteCard client:visible />
```

## Resources

- [Official Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [GitHub Repository](https://github.com/withastro/astro)
- [Awesome Astro](https://github.com/sauced/awesome-astro)

## Conclusion

Astro is an excellent choice for building fast, modern websites without sacrificing developer experience. Its zero-JS-by-default approach, combined with the flexibility to add interactivity when needed, makes it perfect for content-driven sites.

Ready to build something amazing with Astro? Check out the [starter template](https://github.com/yourusername/astro-starter) and start your journey today!
