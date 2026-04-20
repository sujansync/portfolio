# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

There are no tests configured.

## Architecture

Single-page React portfolio app for Sujan Khadka, built with Vite + Tailwind CSS + lucide-react.

**`App.jsx`** — the entire UI is one default-exported component (`Portfolio`) containing:
- State: `isMenuOpen` (mobile nav), `scrollY` (scroll position), `activeTab` (project filter)
- Inline data arrays: `projects`, `skills`, `testimonials`, `education`, `certifications` — edit these to update content
- Tailwind CSS for all styling; dark mode uses `dark:` variants (class strategy)
- lucide-react for icons

**Section order:** Hero → Projects → Skills → Education & Certifications → Testimonials → Contact

Nav links: Home, Projects, Skills, Education, Contact (same array used for desktop nav, mobile menu, and footer).

**`images/Sujan_Pic.js`** — exports a Base64-encoded profile image string. The `@/images/` import alias resolves to the project root via `vite.config.js`.

**`vite.config.js`** — sets `base: '/uigen-components/'` for GitHub Pages deployment and `@` → project root alias.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

## Key Patterns

- Project filtering: `project.category` is matched against `activeTab`; new categories must be added to both the filter button list and the project data with matching strings.
- Mobile menu: `isMenuOpen` drives both the hamburger/X icon swap and the full-screen overlay visibility.
- Parallax: `scrollY` state feeds inline `transform: translateY(...)` styles — avoid removing the scroll listener if parallax sections are still in use.
