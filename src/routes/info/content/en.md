# SvelteKit Project Structure Guide

## Core Files Explanation

### 1. HTML Template (app.html)

- Base HTML template for the entire application
- Contains special SvelteKit placeholders:
  - `%sveltekit.head%`: For head elements
  - `%sveltekit.body%`: For body content
- Serves as the shell for all pages

### 2. Styling (app.css)

- Global CSS styles
- Imported in layout for app-wide styling
- Contains base styles like fonts, colors, and layouts

### 3. TypeScript Definitions (app.d.ts)

- TypeScript type definitions
- Configures interfaces for:
  - Error handling
  - Page data
  - Application state
  - Platform configuration

### 4. Routing Files

#### +page.svelte

- Page component files
- Define the actual content and layout of each route
- Can include their own styles and scripts

#### +page.js

- Control page behavior
- Can configure:
  - `prerender`: Static generation at build time
  - `ssr`: Server-side rendering
  - `csr`: Client-side rendering
  - Data loading through `load` functions

#### +layout.svelte

- Shared layout component
- Wraps all pages
- Contains common elements like navigation
- Place for global styles/scripts

## Project Structure Best Practices

1. **File Organization**

   - Keep files small and focused
   - One responsibility per file
   - Group related files together
   - Extract reusable logic into utilities

2. **Routing**

   - Files in `routes` directory create URLs
   - Nested folders create nested routes
   - Special `+` files control route behavior

3. **Styling**
   - Global styles in app.css
   - Component-specific styles in .svelte files
   - Tailwind CSS available through CDN in layout
