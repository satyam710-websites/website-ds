# Dopomac Systems — Website

Marketing site for Dopomac Systems - a unified Manufacturing
ERP covering Production, Quality, 4M, Maintenance, Inventory, HR, NPD and Audit.

Built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, deployed to
**GitHub Pages**.

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build      # outputs to ./dist
npm run preview    # serves the production build locally
```

## Deploying to GitHub Pages

### Option 1 — GitHub Actions (recommended)

1. Push this repo to GitHub (e.g. `dopomac-website`).
2. In the repo settings → **Pages**, set **Source = GitHub Actions**.
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` will build and deploy.
   It auto-sets the Vite base path to `/<your-repo-name>/`, so it works for any repo name.

Your site will live at:
```
https://<your-username>.github.io/<repo-name>/
```

### Option 2 — Manual `gh-pages` branch

```bash
npm run deploy
```

This builds with the default base (`/dopomac-website/`) and pushes `dist/` to a
`gh-pages` branch. If your repo has a different name, override the base:

```bash
VITE_BASE=/my-repo/ npm run build
npx gh-pages -d dist
```

### Custom domain

Add a `CNAME` file inside `public/` with your domain (e.g. `dopomacsystems.com`) and
set `VITE_BASE=/` when building.

---

## Project structure

```
src/
  components/   Navbar, Footer
  sections/     Hero, Verticals, Platform, Clients, About, Contact
  App.tsx
  main.tsx
  index.css
public/
  logo-website.svg
  404.html      SPA fallback for GitHub Pages
```
