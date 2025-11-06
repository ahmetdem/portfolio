# HyperForge Portfolio

A responsive single-page portfolio for a fictional indie game development collective built with React, TypeScript, TailwindCSS, and Framer Motion.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
  assets/           # Images, logos, video clips (placeholders now hosted remotely)
  components/
    cards/          # Project, event, and team member cards
    layout/         # Navbar, footer, toggles
    sections/       # Page sections (hero, about, etc.)
  data/             # JSON + TypeScript data sources
  hooks/            # Shared hooks (dark mode persistence)
  pages/            # Page-level composition
```

## Features
- Fully responsive layout with smooth scrolling navigation
- Dark/light theme toggle with `localStorage` persistence
- Animated hero with embedded gameplay trailer and press kit CTA
- Projects and events rendered from JSON data sources
- Reusable cards with hover/entrance animations powered by Framer Motion
- Mobile navigation with animated drawer
- SEO-friendly metadata configured in `index.html`

Feel free to replace remote image URLs with local assets under `src/assets/` and update the JSON files with your own data.
