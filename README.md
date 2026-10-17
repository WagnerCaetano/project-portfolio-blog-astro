# Portfolio & Blog Website

A fast, SEO-optimized portfolio and blog website built with Astro and Tailwind CSS, designed for senior software engineers to showcase their background and share technical knowledge.

## Features

- **About Sections**: Introduction, Skills, Work Experience, Education/Certifications, Contact
- **Blog System**: Markdown-based blog posts with syntax highlighting
- **Fast & SEO-Optimized**: Static site generation with meta tags, Open Graph, and structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **Type-Safe Content**: Astro Content Collections with schema validation
- **No Backend Required**: All content managed through Markdown files

## Tech Stack

- **Framework**: [Astro 6.x](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown with GitHub Flavored Markdown
- **Deployment**: GitHub Pages
- **Code Highlighting**: rehype-pretty-code with Shiki

## Getting Started

### Prerequisites

- Node.js 22.12.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-blog-astro.git
cd portfolio-blog-astro

# Install dependencies (use --legacy-peer-deps for Astro 6.x compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI
npm run astro
```

## Project Structure

```
portfolio-blog-astro/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/              # Reusable components
│   │   ├── SEO.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── BlogCard.astro
│   ├── layouts/                # Page layouts
│   │   ├── Layout.astro
│   │   └── BlogLayout.astro
│   ├── pages/                  # Route pages
│   │   ├── index.astro         # About home
│   │   └── blog/
│   │       ├── index.astro     # Blog listing
│   │       └── [slug].astro    # Individual post
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── blog/               # Markdown blog posts
│   └── styles/
│       └── global.css          # Global styles
├── agents.md                   # AI agent context
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration
├── package.json
└── README.md
```

## Customization

### Personal Information

Update the following files with your information:

1. **SEO & Site Info** (`src/components/SEO.astro`)
   - Update `siteURL`, `name`, and social links

2. **Navigation** (`src/components/Navigation.astro`)
   - Update logo/name in the navigation

3. **Footer** (`src/components/Footer.astro`)
   - Update name, bio, and social links

4. **About Content** (`src/pages/index.astro`)
   - Update all placeholder data with your information:
     - Hero section (name, title, introduction)
     - Introduction section
     - Skills (languages, frameworks, databases, tools)
     - Work Experience
     - Education & Certifications
     - Contact information

### Blog Posts

Create new blog posts in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
date: 2024-01-15
tags: ['tag1', 'tag2']
githubRepo: 'https://github.com/yourusername/repo'  # Optional
coverImage: '/images/cover.jpg'  # Optional
published: true
---

Your blog content in Markdown...

## Code blocks work too!

```javascript
console.log('Hello, World!');
```
```

### Styling

- **Tailwind Configuration**: Edit `tailwind.config.mjs` to customize colors, fonts, and breakpoints
- **Custom CSS**: Add custom styles in `src/styles/global.css`
- **Component Styles**: Use Tailwind utility classes directly in components

### SEO

- Update the `site` URL in `astro.config.mjs` to match your repository
- Customize meta descriptions in each page
- Add structured data as needed in `src/components/SEO.astro`

## Deployment

### GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Update Site URL**:
   - Edit `astro.config.mjs`
   - Update `site` to your GitHub Pages URL:
     ```js
     site: 'https://yourusername.github.io/portfolio-blog-astro'
     ```

3. **Deploy**:
   - Push to main branch
   - GitHub Actions will automatically build and deploy

### Custom Domain (Optional)

1. Add a `CNAME` file in `public/` directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider

3. Update `site` URL in `astro.config.mjs`

## Blog Features

### Supported Content

- **Markdown**: Standard Markdown syntax
- **GitHub Flavored Markdown**: Tables, task lists, strikethrough
- **Code Blocks**: Syntax highlighting for multiple languages
- **Images**: Include images in your posts
- **Links**: Internal and external links
- **GitHub Repo Links**: Optional link to related repository
- **Tags**: Categorize your posts

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|-----------|-------------|
| `title` | string | Yes | Post title |
| `description` | string | Yes | Post description for SEO |
| `date` | Date | Yes | Publication date |
| `tags` | string[] | No | Post tags |
| `githubRepo` | string | No | GitHub repository URL |
| `coverImage` | string | No | Cover image path |
| `published` | boolean | No | Whether to publish (default: true) |

## SEO Optimization

The site includes comprehensive SEO features:

- **Meta Tags**: Title, description, viewport
- **Open Graph**: Social media sharing (Facebook, LinkedIn)
- **Twitter Cards**: Twitter sharing
- **Structured Data**: JSON-LD for Person schema
- **Canonical URLs**: Prevent duplicate content issues
- **Semantic HTML**: Proper heading hierarchy and structure

## Performance

- **Static Generation**: Pre-rendered HTML for fast page loads
- **Minimal JavaScript**: Only loads JavaScript when needed
- **Image Optimization**: Ready for Astro's Image component
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Purged CSS with Tailwind

## Accessibility

- **Semantic HTML**: Proper use of HTML5 elements
- **ARIA Labels**: Labels for interactive elements
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant colors
- **Responsive Design**: Works on all screen sizes

## Future Enhancements

Potential features to add:

- [ ] Dark mode toggle
- [ ] RSS feed generation
- [ ] Search functionality
- [ ] Related posts section
- [ ] Reading time estimation
- [ ] Table of contents for blog posts
- [ ] Image optimization with Astro Image component
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:

- Open an issue on GitHub
- Check the [Astro documentation](https://docs.astro.build)
- Review the [agents.md](agents.md) file for AI agent context

## Credits

Built with:
- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Shiki](https://shiki.style/) - A beautiful syntax highlighter

---

**Happy coding! 🚀**
