# henrik.ink

Personal website of Henrik — home, CV, and selected work.

**Live site:** [https://henrik.ink](https://henrik.ink)

## Stack

- [Astro 6](https://astro.build/) — static site generation
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [TypeScript](https://www.typescriptlang.org/)
- Based on the [AstroWind](https://github.com/arthelokyo/astrowind) template

## Pages

| Route | File                    | Description                       |
| ----- | ----------------------- | --------------------------------- |
| `/`   | `src/pages/index.astro` | Home and short bio                |
| `/cv` | `src/pages/cv.astro`    | Experience, education, and skills |

## Development

Requires **Node.js >= 24.0.0**.

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:4321](http://localhost:4321).

### Commands

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the development server           |
| `npm run build`   | Build the production site to `dist/`   |
| `npm run preview` | Preview the production build locally   |
| `npm run check`   | Run Astro, ESLint, and Prettier checks |
| `npm run fix`     | Auto-fix lint and formatting issues    |

## Project structure

```
src/
├── pages/           # Routes (index, cv, 404)
├── layouts/         # Page and site layouts
├── components/      # UI widgets and shared components
├── assets/styles/   # Tailwind theme and global styles
├── config.yaml      # Site metadata, SEO, and feature flags
└── navigation.ts    # Header and footer links
```

Content and copy live directly in the page files. Site-wide settings (title, description, canonical URL) are in `src/config.yaml`. Navigation links and footer social icons are in `src/navigation.ts`.

## Deployment

The site is a static build deployed from the `dist/` directory.

```bash
npm run build
```

Production hosting is on **Cloudflare Pages**, connected to this repository. Pushes to `main` trigger a build automatically. Build settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 24 (from `.node-version`)

The custom domain `henrik.ink` is configured in Cloudflare.

## CI

GitHub Actions runs on every push and pull request to `main`:

- **build** — `npm ci` and `npm run build`
- **check** — `npm ci` and `npm run check`

## License

MIT — see [LICENSE.md](./LICENSE.md). The site is built on AstroWind, which is also MIT-licensed.
