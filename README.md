# Ricardo Plata · Portfolio

React, Vite, React Router, CSS and bilingual interface (EN/ES). This repository is the one connected to the published Vercel project.

## Work locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173/`). Use `npm run lint` and `npm run build` before committing. `dist/` and `node_modules/` are generated and ignored by Git.

## Routes and content

- `/` redirects to `/en`.
- `/en` and `/es` show the redesigned Home.
- `/{en|es}/work/{slug}` shows one of the four current cases: `aura-drive`, `kokoro`, `gu-qi`, or `beyond-the-shadows`.
- Previous `/projects/{slug}` URLs redirect to the corresponding English case study.
- The Home interface is bilingual; the original case study prose is currently in English and will be edited when each case is redesigned.

The Home data lives in `src/data/projects.js`, its translations in `src/locales/{en,es}`, and layout/styles in `src/components` and `src/styles`. The Home uses the later aurora, project mosaic, About, and Contact components from the redesign while showing only the four published cases. The four existing case pages are in `src/pages`. `src/legacy.css` holds their older styles until they are redesigned, while `src/index.css` imports the new foundation. Existing case study media remain in `src/assets`. Lightweight WebP previews for Home live in `src/media`.

## Editing and publishing

Work on a separate branch and review on localhost. Vercel uses `vercel.json` to serve the app for direct entry to nested routes. Do not merge into the production branch until the Home and cases have been reviewed. Keep image/video files referenced by case pages until their replacements are ready.
