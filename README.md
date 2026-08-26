# DETOUR Website

A static, GitHub Pages-ready website for DETOUR.

## Files

- `index.html` — site content
- `style.css` — visual design and responsive layout
- `script.js` — motion, language switch, decorative graphics
- `.nojekyll` — tells GitHub Pages to serve the site directly
- `assets/favicon.svg` — favicon

## Publish on GitHub Pages

1. Create a GitHub account if you do not already have one.
2. Choose the GitHub username you want to appear in the URL.
3. Create a **public** repository named exactly:

   `YOUR-USERNAME.github.io`

4. Upload every file in this package to the root of that repository.
5. Open the repository: `Settings` → `Pages`.
6. Under `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
7. Save.
8. Your site will be available at:

   `https://YOUR-USERNAME.github.io`

## Before launch

Replace the disabled Steam and Contact links in `index.html` when those destinations are ready.

The site currently uses Google Fonts. If you want a version with zero third-party font requests, replace the font import in `style.css` with local/system fonts.
