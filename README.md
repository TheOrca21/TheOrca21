# Sudhakar Sridharan — Portfolio

A small Vite + React portfolio site. This repo builds a static site and is published to GitHub Pages.

## Quick start

- Install dependencies:

```bash
npm install
```

- Run locally:

```bash
npm run dev
# open http://localhost:5173
```

## Build

```bash
npm run build
```

Built output is in the `dist/` folder.

## Deploy (GitHub Pages)

This repository publishes the `dist/` folder to the `gh-pages` branch.

- One-off deploy using `gh-pages` package:

```bash
npx gh-pages -d dist
```

- Alternative (push `dist/` subtree):

```bash
# from repo root
git add dist && git commit -m "chore: add built site" || true
git subtree push --prefix dist origin gh-pages
```

## Notes

- Vite `base` is configured for GitHub Pages under `/TheOrca21/` in `vite.config.ts`. If you rename the repo or want a different host path, update `base` accordingly.
- Favicon and other asset links are resolved at build time; if you move the site root, ensure the `base` value reflects the Pages URL.

## Files of interest

- `vite.config.ts` — Vite configuration and `base` setting.
- `index.html` — HTML entry; favicon and module entry points.

---
If you want, I can add a GitHub Action to automate building and publishing on push to `main`.# Sudhakar Sridharan — Portfolio

Personal portfolio website for Sudhakar Sridharan, Software Engineer based in Chennai, India.

The site presents professional experience, selected projects, and technical skills — focused on full-stack software and practical AI-powered systems.

## Tech stack

- React 19
- TypeScript
- Vite
- CSS (no UI framework)
- GitHub Pages (static deployment)

No backend, database, API, or authentication.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This project is configured for a GitHub Pages **project site**:

`https://<username>.github.io/Portfolio/`

### Setup

1. Push this repository to GitHub (repository name: `Portfolio`).
2. Go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

### Base path

Production builds use `base: '/Portfolio/'` in `vite.config.ts`.

If you deploy to a user/organization site (`username.github.io`) or a custom domain, change the `base` value to `'/'`.

### External links

Before deploying, add your URLs in `src/data/links.ts`:

- GitHub
- LinkedIn
- Resume (PDF URL)

Links only appear in the navigation and contact section when URLs are provided.

## Repository structure

```
src/
├── components/       # UI components
│   ├── Hero.tsx      # Hero content (fallback layout)
│   ├── HeroVisual.tsx # Placeholder slot for future 3D
│   ├── Header.tsx
│   ├── Section.tsx
│   └── ...
├── data/             # Typed content (edit here, not JSX)
│   ├── projects.ts   # Project interface + data
│   ├── experience.ts
│   ├── skills.ts
│   ├── links.ts
│   └── ...
├── App.tsx
├── App.css
└── index.css
```

## Adding projects

Edit `src/data/projects.ts`. Each project supports:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | Project name |
| `description` | yes | Summary |
| `technologies` | yes | Tech tags |
| `type` | yes | `professional`, `open-source`, or `personal` |
| `featured` | yes | Show on homepage |
| `githubUrl` | no | Public repo link |
| `demoUrl` | no | Live demo link |
| `year` | no | Year |
| `image` | no | Screenshot path |

Professional projects without public links display a **Professional Project** label — no fake GitHub/Demo buttons.

## Future: Three.js / React Three Fiber

The hero is structured for optional 3D:

- `Hero.tsx` — content and layout (current fallback)
- `HeroVisual.tsx` — visual slot (grid placeholder today)

To add 3D later, install `three`, `@react-three/fiber`, and `@react-three/drei`, then implement `Hero3D.tsx` inside the visual slot.

## License

Private portfolio — all rights reserved.
