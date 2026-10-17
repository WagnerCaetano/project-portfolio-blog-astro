# Portfolio/Blog Website - Project Context

## Project Overview

This is a personal portfolio and blog website built with Astro and Tailwind CSS, designed for a senior software engineer to showcase their background and share technical knowledge through blog posts.

## Technology Stack

- **Framework**: Astro 6.x (static site generator)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Content**: Markdown files for blog posts via Astro Content Collections
- **Deployment**: GitHub Pages (free static hosting)
- **Build Tool**: Vite (bundled with Astro)

## Project Structure

```
portfolio-blog-astro/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automatic deployment
├── public/                     # Static assets (images, favicons, etc.)
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── SEO.astro          # SEO meta tags component
│   │   ├── Navigation.astro    # Main navigation with about/blog tabs
│   │   ├── Footer.astro        # Site footer with social links
│   │   └── BlogCard.astro      # Blog post preview card component
│   ├── layouts/                # Page layouts
│   │   ├── Layout.astro        # Base layout with SEO
│   │   └── BlogLayout.astro    # Layout specific to blog posts
│   ├── pages/                  # Route pages
│   │   ├── index.astro         # About home page
│   │   └── blog/
│   │       ├── index.astro     # Blog listing page
│   │       └── [slug].astro    # Individual blog post page
│   ├── content/                # Content collections
│   │   ├── config.ts           # Content collection schema definitions
│   │   └── blog/               # Markdown blog posts
│   └── styles/                 # Global styles
│       └── global.css          # Tailwind directives and custom CSS
├── agents.md                   # This file - project context for AI agents
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                  # Project documentation
```

## Key Components

### SEO Component (`src/components/SEO.astro`)
- Handles all SEO meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD) for Person schema
- Canonical URLs
- No-index support for draft pages

### Navigation Component (`src/components/Navigation.astro`)
- Responsive design with mobile hamburger menu
- About and Blog tabs
- Active state highlighting based on current path
- Smooth scrolling to about sections

### Footer Component (`src/components/Footer.astro`)
- Information section
- Quick links
- Social media links (GitHub, LinkedIn, Email)
- Copyright notice

### Blog Card Component (`src/components/BlogCard.astro`)
- Displays blog post preview
- Shows title, description, date, tags
- Optional GitHub repo link
- Optional cover image
- Hover effects

### Base Layout (`src/layouts/Layout.astro`)
- Includes global CSS
- Integrates SEO, Navigation, and Footer
- Provides main content slot
- Responsive design

### Blog Layout (`src/layouts/BlogLayout.astro`)
- Extends base layout
- Blog-specific header with tags and metadata
- GitHub repo link (if present)
- Prose styling for markdown content
- Back to blog link

## About Sections (index.astro)

### Hero Section
- Profile avatar (initials placeholder)
- Name and title
- Brief introduction
- Call-to-action buttons

### About Me Section
- Professional summary
- Background information
- Personal philosophy

### Skills Section
- Categorized skills:
  - Languages (TypeScript, JavaScript, Python, etc.)
  - Frameworks (React, Vue, Node.js, etc.)
  - Databases (PostgreSQL, MongoDB, etc.)
  - Tools & DevOps (Git, Docker, Kubernetes, etc.)

### Work Experience Section
- Timeline of positions
- Company, role, dates
- Description and achievements
- Visual timeline design

### Education & Certifications Section
- Education background with degrees
- Certifications with issuers and dates
- Split into two columns

### Contact Section
- Email link
- Social media buttons (LinkedIn, GitHub)
- Simple, clean design

## Blog System

### Content Collections
- Blog posts stored as Markdown files in `src/content/blog/`
- Type-safe frontmatter with schema validation
- Supports:
  - `title` (string, required)
  - `description` (string, required)
  - `date` (Date, required)
  - `tags` (array of strings, optional)
  - `githubRepo` (string, optional)
  - `coverImage` (string, optional)
  - `published` (boolean, defaults to true)

### Blog Features
- Markdown rendering with syntax highlighting
- GitHub Flavored Markdown support (tables, task lists, etc.)
- Code blocks with syntax highlighting (using rehype-pretty-code)
- Automatic heading IDs for anchor links
- Responsive typography with prose styling
- No comments section (as requested)

### Blog Pages
- **Listing Page** (`/blog`): Grid of all published posts
- **Post Page** (`/blog/[slug]`): Individual post with full content

## Styling

### Tailwind CSS Configuration
- Custom color palette (primary blue, secondary gray)
- Custom font families (system-ui for sans, monospace for code)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px

### Global CSS
- Tailwind directives
- Custom component classes
- Utility classes for common patterns
- Smooth scrolling behavior

## SEO Strategy

### On-Page SEO
- Semantic HTML5 structure
- Proper heading hierarchy
- Meta descriptions for all pages
- Alt text for images
- Internal linking

### Technical SEO
- Fast loading times (static generation)
- Mobile-responsive design
- Clean URLs
- robots.txt (can be added)
- Sitemap (can be added with @astrojs/sitemap)

### Structured Data
- JSON-LD for Person schema
- BlogPosting schema (can be added)

## Deployment

### GitHub Pages
- Automatic deployment via GitHub Actions
- Workflow: `.github/workflows/deploy.yml`
- Triggers on push to main branch
- Builds static site and deploys to GitHub Pages

### Deployment Settings Required
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Update `site` URL in `astro.config.mjs` to match your repository

## Customization Guide

### Personal Information
Update the following files with your information:
- `src/components/SEO.astro`: Update site URL, name, social links
- `src/components/Footer.astro`: Update name, bio, social links
- `src/pages/index.astro`: Update all about sections with your data
- `src/components/Navigation.astro`: Update logo/name

### Blog Posts
1. Create new Markdown files in `src/content/blog/`
2. Add frontmatter with required fields
3. Write content in Markdown
4. Set `published: false` for drafts

### Styling
- Modify `tailwind.config.mjs` for color scheme
- Update `src/styles/global.css` for custom CSS
- Use Tailwind utility classes in components

### SEO
- Update `site` URL in `astro.config.mjs`
- Customize meta descriptions
- Add structured data as needed

## Development Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Important Notes

### Legacy Peer Deps
The project uses `--legacy-peer-deps` flag for npm install due to Astro 6.x compatibility with some packages. Always use this flag when installing dependencies.

### TypeScript
The project uses TypeScript with relaxed configuration to avoid strict type checking issues with Astro 6.x. You can enable stricter checking as needed.

### Image Optimization
For production, consider using Astro's Image component for automatic image optimization. Currently, images are referenced directly in markdown.

### Future Enhancements
- Add sitemap.xml generation
- Add robots.txt
- Implement RSS feed
- Add dark mode toggle
- Add search functionality
- Add related posts section

## Placeholder Content

All content in the about sections and blog posts is placeholder content that should be customized:
- Personal information
- Work experience
- Skills
- Education
- Certifications
- Contact details
- Blog posts

## Contact Points for AI Agents

When working on this project, AI agents should:
1. Respect the existing component structure
2. Follow Tailwind CSS patterns already established
3. Maintain SEO best practices
4. Keep performance in mind (static generation)
5. Follow Astro conventions for content collections
6. Use TypeScript for type safety
7. Test responsive design across breakpoints
8. Ensure accessibility (ARIA labels, keyboard navigation, etc.)
