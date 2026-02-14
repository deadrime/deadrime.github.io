# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog built with Vike (React SSR framework), React 19, Tailwind CSS 4, and TypeScript. The site features a blog, code snippets section, and portfolio content, all with Russian language content.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Vike
- `npm run build` - Build for production (generates static site via prerendering)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with auto-fix on .ts and .tsx files

### No Test Suite
This project does not have automated tests configured.

## Architecture

### Framework: Vike (React SSR)
- Uses Vike's file-based routing system with `+` files as the interface between framework and code
- Pages are in `/pages` directory with nested route structures (e.g., `/pages/blog/@id/+Page.tsx`)
- Prerendering is enabled (`prerender: true` in config) - the site is statically generated at build time
- Page transitions are handled via `+onPageTransitionStart.ts` and `+onPageTransitionEnd.ts`

### Content Management
- Uses `@content-collections` for MDX content processing (configuration in `content-collections.ts`)
- Two content types defined:
  - **Articles**: MDX files in `content/blog/` → generates routes at `/blog/:slug`
  - **Snippets**: MDX files in `content/snippets/` → generates routes at `/snippets/:slug`
- Content transformations include:
  - MDX compilation with remark/rehype plugins (GFM, code titles, external links, unwrapped images)
  - Table of contents generation via `generateToc` utility
  - SEO metadata extraction
- Generated content collections are imported from `content-collections` (aliased to `.content-collections/generated`)
- Content must follow `articleFrontmatterSchema`: title, description, date, topics (array), optional previewImg

### Data Loading Pattern
- Pages use `+data.ts` files for server-side data fetching
- Use `useConfig()` from `vike-react/useConfig` to dynamically set page metadata (title, description, OG tags)
- Example: blog pages fetch articles from `allArticles` collection, set SEO with `getArticleSeo()`, and throw `render(404)` if not found

### Routing Structure
- `/pages/index/` - Homepage
- `/pages/blog/index/` - Blog listing page
- `/pages/blog/@id/` - Individual blog article (dynamic route with slug)
- `/pages/snippets/index/` - Snippets listing page  
- `/pages/snippets/@id/` - Individual snippet (dynamic route with slug)
- `/pages/_error/` - Error page for 404s and other errors

### Layout & Styling
- Global layout: `layouts/LayoutDefault.tsx` (header with nav, main content area, footer)
- Tailwind CSS 4 with nested CSS support via postcss-nesting
- Theme switching: `ThemeContext.tsx` provides light/dark theme with localStorage persistence
- Theme is set via `data-theme` attribute on `<html>` and respects system preferences
- Custom fonts: Fira Code and Nunito (commented out webfont download plugin in vite config)
- Russian locale configured for dayjs date formatting

### Key Configuration Files
- `vite.config.ts` - Vike plugin, React, Tailwind, content-collections, SVGR, CSS injection plugin
- `tsconfig.json` - Path aliases: `@/*` maps to root, `content-collections` to generated files
- `eslint.config.mjs` - ESLint 9+ flat config with TypeScript, React, Import plugin, Prettier integration
- `+config.ts` - Vike default config: sets default Layout, title, lang="ru", prerender enabled

### Component Organization
- `/components` - Reusable UI components (Article, LazyImage, Link, MDX, ThemeSwitcher, etc.)
- `/layouts` - Layout components and global CSS
- `/helpers` - Utility functions (capitalize, content helpers, code highlighting, clipboard, SEO generators)
- `/hooks` - Custom React hooks
- `/schemas` - Zod schemas for content validation (articleFrontmatterSchema)
- `/providers` - React context providers (Providers component wraps app)

### Build Output
- Static files generated to `/dist` directory
- CSS is injected by JS via `vite-plugin-css-injected-by-js`
- Build target: ES2022
- SVGs processed via SVGR with SVGO optimization (removes dimensions, preserves viewBox)

## Important Conventions

### Import Aliases
- Use `@/` prefix for imports from project root (e.g., `@/components/Link`)
- Import content collections from `content-collections` (not `.content-collections/generated`)
- File extensions `.js` are used in some imports despite TypeScript (ES module convention)

### TypeScript
- Strict mode enabled
- Use `type` imports: `import { type Config } from 'vike/types'`
- ESLint enforces `@typescript-eslint/consistent-type-imports` with inline-type-imports style

### React
- React 19 with JSX runtime (no need to import React in components)
- Functional components only
- Use `'use client'` directive only for client-side-only components (like ThemeContext)

### Content Authoring
- All blog posts and snippets are MDX files with frontmatter
- Required frontmatter: title, description, date
- Optional: topics (array of strings), previewImg (string path)
- Files are automatically transformed and made available via content-collections

### Styling
- Tailwind utility-first approach
- Use Tailwind's arbitrary values for one-offs (e.g., `max-w-[calc(1180px+2rem)]`)
- Theme colors managed via CSS custom properties in global.css (accessed via Tailwind)
- Focus styles use `focus-visible:` modifier for accessibility

## Git Workflow
- Current working branch: `vike`
- Tags are used for deploy to github pages
