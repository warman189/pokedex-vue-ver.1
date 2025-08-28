## Pokédex Vue

Interactive Pokédex built with Vue 3 + Vite + TypeScript.

### Local development

```bash
npm ci
npm run dev
```

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages on push to `main`/`master`.

- Ensure the repo is public (or Pages enabled for private).
- In GitHub, open Settings → Pages → Build and deployment → Source: GitHub Actions.
- Push to main and wait for the workflow to finish.

The site will be available at:

```
https://warman189.github.io/pokedex-vue-ver.1/
```

Vite base path is configured via `BASE_PATH` environment variable in the workflow so assets resolve correctly under `/<repo>/`.
