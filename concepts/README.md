# Hearthlight concepts

Two complete static design drafts, with the same substantive guild copy:

- `/concept-a/`: Evolution. Blue night, the original hearth mark, brass, parchment, restrained teal, and a guild folio layout.
- `/concept-b/`: Reinterpretation. A full-width illustrated wilderness, a distant road, a small campfire, forest colors, and an evening journal layout.

Both use the tagline **Good company for the Age of Discovery.** Both are marked `noindex,nofollow`. The original root homepage, CNAME, and archived baseline are unchanged.

## Preview

From the repository root, run `python3 -m http.server 8000`, then visit:

- `http://localhost:8000/concept-a/`
- `http://localhost:8000/concept-b/`

The existing GitHub Pages workflow publishes both paths on a push to `main`.

## Discord

Set `discordUrl` in `concepts/config.js` to the new Hearthlight invite. This activates all Discord links in both drafts, removes the coming-soon notes, and updates the joining FAQ. With `null`, the buttons open an accessible coming-soon dialog. The old guild invite is not used.

## Files

The concept HTML is intentionally static, readable, and usable without a build step. `shared.css` and `shared.js` provide common structure and interactions; `a.css` and `b.css` supply the two visual systems. All artwork is local SVG. Fonts are self-hosted Latin WOFF2 subsets from Google Fonts, with their SIL Open Font License notices in `assets/fonts/`.

When editing guild copy, apply the same change to both HTML pages. Differences in typography, layout, line breaks, illustrations, or hidden decorative captions are intentional. No substantive copy differs.

The archive branch remains the original Hearth & Harbor site at `18f9589`. Choosing a concept for the root homepage, changing the domain, and using a real Discord invite are separate next steps.
