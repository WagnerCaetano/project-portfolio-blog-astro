# Website Changes Implementation Plan

## Overview
This plan details the implementation of dark mode toggle and blog post page improvements for the portfolio-blog-astro website.

---

## 1. Dark Mode Implementation

### 1.1 Color Scheme

#### Light Mode Colors
- **Background**: `#FFFAF1` (brownish light cream)
- **Footer Background**: Dark gray (`#1e293b` or `#0f172a`)
- **Text**: Secondary-800 (`#1e293b`)
- **Primary**: Existing blue palette (primary-500 to primary-900)

#### Dark Mode Colors
- **Background**: Dark blue (`#0a192f` or `#112240`)
- **Surface**: Slightly lighter dark blue (`#1e3a5f`)
- **Text**: Light gray/white (`#e2e8f0` or `#f1f5f9`)
- **Primary**: Adjusted blue for dark mode (`#64b5f6` or similar)

### 1.2 Technical Approach

#### Option A: Vanilla JavaScript (Recommended)
- Use `class="dark"` on HTML element
- Store preference in localStorage
- System preference detection via `window.matchMedia('(prefers-color-scheme: dark)')`
- No additional dependencies needed

#### Option B: Astro Svelte Integration
- Install `@astrojs/svelte`
- Create Svelte component for theme toggle
- More reactive but adds dependency

**Recommendation**: Option A (Vanilla JS) - simpler, no extra dependencies

### 1.3 Files to Modify

#### New Files
- `src/components/ThemeToggle.astro` - Toggle button component with sun/moon icons

#### Modified Files
- `tailwind.config.mjs` - Add dark mode configuration and color palette
- `src/styles/global.css` - Add dark mode styles and prose customization
- `src/layouts/Layout.astro` - Add theme initialization script
- `src/components/Navigation.astro` - Add theme toggle button
- `src/components/Footer.astro` - Update colors for both modes
- `src/layouts/BlogLayout.astro` - Add dark mode support
- `src/components/BlogCard.astro` - Add dark mode support
- `src/pages/index.astro` - Add dark mode classes
- `src/pages/blog/index.astro` - Add dark mode classes

### 1.4 Implementation Details

#### Tailwind Configuration
```javascript
// tailwind.config.mjs
darkMode: 'class', // Enable class-based dark mode
colors: {
  light: {
    bg: '#FFFAF1',
    surface: '#ffffff',
    text: '#1e293b',
  },
  dark: {
    bg: '#0a192f',
    surface: '#112240',
    text: '#e2e8f0',
  },
  // ... existing colors
}
```

#### Global CSS Updates
```css
/* Dark mode base styles */
html.dark body {
  @apply bg-dark-bg text-dark-text;
}

/* Light mode base styles */
html:not(.dark) body {
  @apply bg-light-bg text-light-text;
}
```

#### Theme Toggle Component
- Sun icon for light mode
- Moon icon for dark mode
- Smooth transition animation
- ARIA label for accessibility

---

## 2. Blog Post Page Improvements

### 2.1 Content Width
- Change `max-w-3xl` to `max-w-4xl` or `max-w-5xl` in BlogLayout.astro
- This provides more reading width for better content display

### 2.2 Link Styling
Current issue: Links appear unreferenced (no distinct styling)

#### Solution - Add to global.css:
```css
/* Prose link styling */
.prose a {
  @apply text-primary-600 hover:text-primary-700 underline underline-offset-2 decoration-primary-300 hover:decoration-primary-500 transition-colors;
}

html.dark .prose a {
  @apply text-blue-400 hover:text-blue-300 decoration-blue-900 hover:decoration-blue-800;
}
```

### 2.3 Code Block Improvements

#### Current Issues:
- No margin around code blocks
- Poor visual separation
- Hard to distinguish from surrounding text

#### Solution - Add to global.css:
```css
/* Code block styling */
.prose pre {
  @apply my-6 rounded-lg overflow-hidden shadow-lg;
}

.prose code {
  @apply bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 px-1.5 py-0.5 rounded text-sm font-mono;
}

.prose pre code {
  @apply bg-transparent text-inherit p-4 block overflow-x-auto;
}

html.dark .prose pre {
  @apply bg-secondary-900 border border-secondary-700;
}
```

### 2.4 Additional Typography Improvements

#### Table Styling:
```css
.prose table {
  @apply my-6 w-full border-collapse border border-secondary-200 dark:border-secondary-700;
}

.prose th {
  @apply bg-secondary-100 dark:bg-secondary-800 font-semibold;
}

.prose td, .prose th {
  @apply border border-secondary-200 dark:border-secondary-700 px-4 py-2;
}
```

#### Blockquote Styling:
```css
.prose blockquote {
  @apply my-6 pl-4 border-l-4 border-primary-500 bg-secondary-50 dark:bg-secondary-800/50 italic text-secondary-700 dark:text-secondary-300;
}
```

#### List Styling:
```css
.prose ul, .prose ol {
  @apply my-4 space-y-2;
}

.prose li {
  @apply ml-4;
}
```

### 2.5 Heading Improvements
```css
.prose h1, .prose h2, .prose h3 {
  @apply font-bold text-secondary-900 dark:text-secondary-100;
}

.prose h1 { @apply text-3xl mt-8 mb-4; }
.prose h2 { @apply text-2xl mt-6 mb-3; }
.prose h3 { @apply text-xl mt-4 mb-2; }
```

---

## 3. Implementation Order

### Phase 1: Dark Mode Foundation
1. Update `tailwind.config.mjs` with dark mode config
2. Update `global.css` with base dark mode styles
3. Create `ThemeToggle.astro` component
4. Update `Layout.astro` with theme initialization script

### Phase 2: Dark Mode Component Updates
5. Update `Navigation.astro` - Add theme toggle button
6. Update `Footer.astro` - Dark mode colors
7. Update `BlogCard.astro` - Dark mode support
8. Update `BlogLayout.astro` - Dark mode support
9. Update `index.astro` - Dark mode classes
10. Update `blog/index.astro` - Dark mode classes

### Phase 3: Blog Post Page Improvements
11. Update `BlogLayout.astro` - Increase content width
12. Update `global.css` - Link styling
13. Update `global.css` - Code block styling
14. Update `global.css` - Table, blockquote, list styling
15. Update `global.css` - Heading improvements

### Phase 4: Testing
16. Test dark mode toggle functionality
17. Verify all pages work in both modes
18. Test blog post page styling
19. Verify responsive design
20. Cross-browser testing

---

## 4. Technical Notes

### Dark Mode Persistence
- Store user preference in `localStorage` with key `'theme'`
- Check localStorage on page load
- Fall back to system preference if no stored preference
- Update `class="dark"` on `<html>` element

### Accessibility
- Theme toggle button needs proper ARIA labels
- Focus states for all interactive elements
- Sufficient color contrast in both modes
- Respect `prefers-reduced-motion` for transitions

### Performance
- Use CSS transitions for smooth mode switching
- Avoid JavaScript layout thrashing
- Minimal DOM manipulation

---

## 5. Color Palette Reference

### Light Mode
| Element | Color | Tailwind Class |
|---------|-------|----------------|
| Background | #FFFAF1 | custom |
| Surface | #FFFFFF | white |
| Primary | #0ea5e9 | primary-500 |
| Text | #1e293b | secondary-800 |
| Footer | #1e293b | secondary-900 |

### Dark Mode
| Element | Color | Tailwind Class |
|---------|-------|----------------|
| Background | #0a192f | custom |
| Surface | #112240 | custom |
| Primary | #64b5f6 | custom |
| Text | #e2e8f0 | slate-200 |
| Footer | #0a192f | custom |

---

## 6. File Changes Summary

### New Files (1)
- `src/components/ThemeToggle.astro`

### Modified Files (9)
- `tailwind.config.mjs`
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/layouts/BlogLayout.astro`
- `src/components/BlogCard.astro`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`

---

## 7. Success Criteria

- [ ] Dark mode toggle works and persists across page loads
- [ ] Light mode background is #FFFAF1
- [ ] Dark mode background is dark blue
- [ ] Footer is dark gray in light mode
- [ ] Blog post page is wider (max-w-4xl or max-w-5xl)
- [ ] Links are properly styled and visible
- [ ] Code blocks have proper margin and styling
- [ ] Tables are properly styled
- [ ] Blockquotes are properly styled
- [ ] All pages work in both light and dark modes
- [ ] Responsive design maintained
- [ ] Accessibility standards met
