Amelia Brain 3D (Three.js)

[VIEW VIDEO DEMO](https://www.youtube.com/watch?v=y0XOuSNlHx8)

![Screenshot](./screenshot/brain3d.png)

## Overview

Interactive brain visualization built on Three.js r91, GSAP, postprocessing, and three-bas. This repo includes small compatibility fixes so it runs on modern Node/npm on Windows without modifying core features.

## What changed in this fork

To make the project install and run smoothly today, the following non-invasive changes were applied:

- .npmrc: Force public registry and relax peer/engine checks
  - registry=https://registry.npmjs.org/
  - legacy-peer-deps=true
  - engine-strict=false
  - audit=false, fund=false
- package-lock.json: Deleted legacy lockfile that referenced a private Artifactory registry so install could fetch from npmjs
- ESLint during dev: Disabled in `config/index.js` (useEslint: false) and added `.eslintrc.json` to turn off the `linebreak-style` rule (Windows CRLF)
- index.html: Removed hard-coded bundle/script tags; let HtmlWebpackPlugin inject correct dev/prod bundles
- Three.js geometry API shim: Added a tiny shim in `src/app.js` mapping `setAttribute`/`deleteAttribute` to legacy `addAttribute` to keep three-bas happy with r91

These tweaks keep dependencies at their historical versions and avoid risky upgrades to webpack 5 / Babel 7.

## Requirements

- Node.js: Works with current Node (tested on v22), but if you run into environment quirks, Node 14 LTS is closest to the era of the toolchain.
- OS: Windows/macOS/Linux. On Windows, CRLF is handled via the ESLint change above.

## Development

1. Install dependencies
	- npm install
2. Start the dev server
	- npm run dev
3. Open the URL printed in the console (defaults to http://localhost:8080)

Assets (OBJ model, textures, fonts) are served from `static/` via webpack-dev-server and CopyWebpackPlugin.

## Production build

- npm run build
- The output will be in `dist/`.

## Fork and publish to your GitHub

Option A: Use GitHub UI
- Click "Fork" on GitHub, then clone your fork and push any local changes.

Option B: From this local checkout
1. Initialize git (if not already)
	- git init
2. Add your fork as origin (replace USERNAME and REPO as needed)
	- git remote add origin https://github.com/USERNAME/REPO.git
3. Commit and push
	- git add .
	- git commit -m "chore: working dev setup + Windows/Node fixes"
	- git push -u origin master

## Optional: Publish with GitHub Pages

- Build: npm run build
- Push contents of `dist/` to a `gh-pages` branch
  - You can use the `gh-pages` npm package or set up Pages to serve from `/docs` and copy `dist` there.

## Notes and future improvements

- Consider upgrading to webpack 5 and three r12x+ if you plan active development; this will remove the shim and deprecated plugins (extract-text-webpack-plugin, eslint-loader).
- Re-enable ESLint once a consistent LF strategy is in place (e.g., .editorconfig and git autocrlf settings).
- Lock Node via `.nvmrc` (e.g., `14`) if you want stricter reproducibility.

