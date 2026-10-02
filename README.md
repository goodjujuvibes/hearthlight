# Hearthlight

A small **Social PvE · Light–Medium RP** guild in [Monsters & Memories](https://www.monstersandmemories.com/), on **Tilustra, US East PvE**.

> Good company for the Age of Discovery.

Hearthlight began in October 2026. Its founding group is still taking shape; the guild is being built together rather than around one traditional GM.

## Website

Plain static HTML, CSS, and vanilla JavaScript. No framework, dependencies, or build step. The visual foundation is the original Hearth & Harbor site at `18f9589`: dark blue night, stars, warm firelight, alternating parchment, brass, restrained teal, and its original typography and hearth mark.

The page order is hero, founding, guild life, roleplay, short charter, questions, and closing invitation. The old roster and harbor-specific imagery are removed.

| File | Purpose |
|---|---|
| `index.html` | The Hearthlight homepage, metadata, FAQ, and Discord placeholder dialog. |
| `styles.css` | The archived visual foundation with targeted additions for the new content. |
| `app.js` | Shared Discord invite setting, accessible dialog, and mobile Back behavior. |
| `fonts.css`, `assets/fonts/` | The original Almendra SC, Vollkorn, Cardo, and EB Garamond families, self-hosted with license notices. |
| `hearthlight-mark.svg`, `hearthlight-social.png` | Original hearth glyph and the Hearthlight social preview card. |
| `CNAME`, `robots.txt`, `sitemap.xml` | References for `hearthlightguild.com`. |
| `.github/workflows/deploy.yml` | GitHub Pages deployment on pushes to `main`. |

## Preview locally

Run `python3 -m http.server 8000` from the repository root, then open `http://localhost:8000/`.

## Discord invite

Replace `null` in `const DISCORD_URL` at the top of `app.js` with the new Hearthlight invite. Both join links then open Discord, and the coming-soon notes disappear. Until then, the links open an accessible, honestly labeled placeholder dialog. The old H&H invite is not used.

## Deployment and domain

GitHub Pages must use **GitHub Actions** as its build source, and its `github-pages` environment must allow `main`. The configured Pages URL is reported by the deployment.

The repository's domain references point to `hearthlightguild.com`. For that custom domain to serve the site, it must also be configured under **Settings → Pages → Custom domain**, with the domain's DNS pointing to GitHub Pages. A CNAME file alone does not configure a custom domain for an Actions deployment.

## Preserved history

`archive/hearth-and-harbor` remains at the original `18f9589` baseline. A faithful, `noindex,nofollow` comparison copy is published at `/archive/hearth-and-harbor/`, using the same self-hosted original fonts. Its visible content, styles, and behavior are preserved; the current Hearthlight homepage stays at `/`. `/concept-a/` and `/concept-b/` remain historical, `noindex,nofollow` drafts from the earlier experiment; the homepage does not use their designs or assets.

On-page copy contains no em dashes.
