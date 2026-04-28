# Sujan Khadka – Portfolio

Personal portfolio site for Sujan Khadka, a Software Engineer and BIM Developer. Built with React + Vite + Tailwind CSS and deployed to GitHub Pages.

**Live site:** https://sujansync.github.io/portfolio/

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (fixed dark theme)
- lucide-react icons
- GitHub Actions → GitHub Pages (auto-deploy on push to `main`)

## Development

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → dist/
npm run preview  # preview dist/ locally
```

## Structure

All UI lives in a single `App.jsx` file with two components: `WindowPanel` (reusable chrome-style card wrapper) and `Portfolio` (the full page). Content is edited by modifying the inline data arrays (`projects`, `experience`, `skills`, `education`, `certifications`, `testimonials`, `stats`) at the top of `Portfolio`.

The profile photo is Base64-encoded in `images/Sujan_Pic.js`. The OG preview image for LinkedIn/Twitter is `public/og-image.png`, with its source template at `portfolio-thumbnail.html`.
