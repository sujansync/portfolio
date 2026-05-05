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

**`App.jsx`** — the entire UI is two components:

- `WindowPanel` — reusable chrome-style browser-window wrapper (accent gradient line, macOS traffic-light dots, fake URL bar). Props: `url` (string), `gradient` (Tailwind gradient classes, has a default). Every major section is wrapped in one.
- `Portfolio` (default export) — full page with all state, data arrays, and JSX sections.

**State in `Portfolio`:**
- `isMenuOpen` — mobile nav overlay open/closed
- `activeTab` — active project filter tab, default `'all'`
- `expandedExp` — `Set<number>` of open experience accordion indices; index 0 is open by default. `toggleExp(i)` adds/removes `i`.

**Inline data arrays** (edit these to update content):
- `projects` — `{ id, title, category, description, image (emoji), tags, impact, link }`
- `stats` — `{ label, value, href }` — hero stat counters; each tile is an anchor that scrolls to `href` on click
- `skills` — `{ category, items[] }` — skill tag groups
- `testimonials` — `{ name, company, text, rating }`
- `education` — `{ degree, institution, location, period, gpa, courses[] }`
- `certifications` — `{ name, issuer, year }`
- `experience` — `{ role, company, location, period, current (bool), icon (emoji), bullets[], tech[] }`

**Section order:** Hero → Experience → Projects → Skills → Education → Certifications → Reviews → Contact → Footer

**Nav links** (hardcoded inline in nav JSX and footer — update in both places if adding a section): Home, Experience, Projects, Skills, Education, Certifications, Reviews, Contact.

**`images/Sujan_Pic.js`** — exports a Base64-encoded profile image string imported via the `@` alias.

**`vite.config.js`** — `base: '/portfolio/'` for GitHub Pages; `@` alias → project root.

**`tailwind.config.js`** — content paths: `index.html`, `App.jsx`, `main.jsx` only. `darkMode: 'class'`. The UI is fixed dark-theme; no toggle. **If you add a new JSX file, add it to `content` here or its Tailwind classes will be purged from the production build.**

**`index.css`** — defines two custom animation utilities used in the app:
- `animate-float` — gentle vertical float on the profile image (6 s, ±12 px)
- `animate-glow-pulse` — opacity pulse on the ambient background orbs (4 s)

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Node 20 and deploys `dist/` to GitHub Pages. The workflow also has `workflow_dispatch`, so you can trigger a deploy manually from the GitHub Actions UI without pushing. Live URL: `https://sujansync.github.io/portfolio/`

## Key Patterns

- **Project filtering:** `TABS` constant (`['all', 'BIM Development', 'Enterprise Systems', 'Data & AI', 'Infrastructure', 'Education']`) drives the filter buttons. A project's `category` must exactly match a TABS entry to appear in that tab — projects with any other category string (e.g. `'AI Research'`) only appear under `'all'`. Add new categories to both `TABS` and the project object.
- **Experience accordion:** `expandedExp` is a `Set`; clicking a card calls `toggleExp(i)`. Multiple items can be open simultaneously.
- **Mobile menu:** `isMenuOpen` controls the hamburger/X swap and the dropdown under the nav bar (not a full-screen overlay — it's an inline block below the nav).
- **WindowPanel gradient:** each section passes a different `gradient` prop to give each panel a distinct accent color on its top border line.
- **OG image:** `public/og-image.png` (1200×627) is referenced in `index.html` meta tags for LinkedIn/Twitter previews. To regenerate it: open `portfolio-thumbnail.html` directly in a browser, screenshot the 1200×627 card element, and save the result as `public/og-image.png`.
