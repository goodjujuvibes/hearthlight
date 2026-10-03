# Hearthlight

A small **Social PvE · Light–Medium RP** guild in [Monsters & Memories](https://www.monstersandmemories.com/), on **Tilustra, US East PvE**.

> A warm place to return to.
> Good company for the journeys ahead.

Hearthlight began in October 2026. Its founding group is still taking shape; the guild is being built together rather than around one traditional GM.

## Website

Plain static HTML, CSS, and vanilla JavaScript. No framework, dependencies, or build step. The visual foundation is the original Hearth & Harbor site at `18f9589`: dark blue night, stars, warm firelight, alternating parchment, brass, restrained teal, and its original typography and hearth mark.

The page order is hero, founding, guild life, short charter, roleplay, questions, and closing invitation. The old roster and harbor-specific imagery are removed.

| File | Purpose |
|---|---|
| `index.html` | The Hearthlight homepage, metadata, short charter, and FAQ. |
| `styles.css` | The archived visual foundation with targeted additions for the new content. |
| `app.js` | Shared Discord invite setting for the join buttons and FAQ link. |
| `fonts.css`, `assets/fonts/` | The original Almendra SC, Vollkorn, Cardo, and EB Garamond families, self-hosted with license notices. |
| `hearthlight-mark.svg`, `hearthlight-social.png` | Original hearth glyph and the Hearthlight social preview card. |
| `CNAME`, `robots.txt`, `sitemap.xml` | References for `hearthlightguild.com`. |
| `.github/workflows/deploy.yml` | GitHub Pages deployment on pushes to `main`. |

## Preview locally

Run `python3 -m http.server 8000` from the repository root, then open `http://localhost:8000/`.

## Charter and Discord guidelines

The six-part website Charter is the shared guideline set for Hearthlight, in game and in Discord. Its plain statements cover participation, real-life commitments, respectful conduct and shared content boundaries, setbacks, RP consent and character knowledge, and the wider server community. The closing note explains how to raise concerns and how Founders uphold the guidelines.

The Discord-ready draft below uses the same Charter text, with only channel guidance and the welcome reaction added. Keep it synchronized with the Charter in `index.html`.

<details>
<summary>Copy for Discord #guidelines (two messages)</summary>

Message 1:

```text
**THE CHARTER**
Guidelines for good company

**I. The fire and frontier**
**Take part in the world.**
Group up, explore, ask questions, share what you find, and start things when the mood strikes. Hearthlight should be more than a silent tag over your head. You don’t have to be constantly active, but when you’re around, be part of the company.

**II. The road and return**
**Real life comes first.**
People play at different speeds, take breaks, disappear for a while, and come back when life allows. There are no attendance requirements and no race to cap. If you committed to something and plans change, communicate when you reasonably can.

**III. The mirth and mettle**
**Be someone people want in the group.**
Learn your character, communicate, cooperate, and take feedback well. Treat people decently. No harassment, bullying, bigotry, personal attacks, or public pile-ons. Respect boundaries and back off when asked. Explicit sexual content, graphic NSFW material, and sexual RP don’t belong in Hearthlight’s shared spaces.
```

Message 2:

```text
**IV. The wipes and wisdom**
**Recover, regroup, and keep moving.**
Bad pulls, wrong turns, corpse runs, mistakes, and real-life interruptions are part of the game. Learn what you can without turning setbacks into blame. Bring enough mettle to improve and enough mirth to laugh when everything goes spectacularly wrong.

**V. The lore and legends**
**Keep RP optional, collaborative, and respectful.**
Join in at the depth you enjoy. Respect other players’ boundaries, don’t control their characters without consent, and keep what you know as a player separate from what your character knows in RP.

**VI. The Monsters & Memories**
**Leave a good name behind.**
Aêthoril is bigger than Hearthlight. Group with strangers, trade, explore, roleplay, and become part of the server around us. Play fairly, don’t grief, respect camps and shared spaces, follow the Monsters & Memories Play Nice Policy, and be the kind of people others are glad to run into again.

These guidelines apply in game and in Discord. If something needs attention, contact a Founder privately. You don’t have to confront someone first. Founders may step in, remove content, or remove access when needed to uphold these guidelines.

We’re here to actually play Monsters & Memories together, to see what’s out there, and to remember that the people beside us matter as much as whatever we’re chasing.

**For Discord**
Please keep posts in the appropriate channels. If you’ve read, understand, and agree with the Charter, react 👍 to this message. A Founder will welcome you in as a Wayfarer. If you need clarification or help with an issue, message a Founder privately.
```

</details>

## Discord invite

Set `const DISCORD_URL` at the top of `app.js` to the Hearthlight invite. The join buttons and FAQ link open Discord directly. Keep their static `href` values in `index.html` in sync so they also work without JavaScript. If no valid invite is configured, the join buttons stay hidden; there is no placeholder dialog or coming-soon copy. The old H&H invite is not used.

## Deployment and domain

GitHub Pages must use **GitHub Actions** as its build source, and its `github-pages` environment must allow `main`. The configured Pages URL is reported by the deployment.

The repository's domain references point to `hearthlightguild.com`. For that custom domain to serve the site, it must also be configured under **Settings → Pages → Custom domain**, with the domain's DNS pointing to GitHub Pages. A CNAME file alone does not configure a custom domain for an Actions deployment.

## Preserved history

`archive/hearth-and-harbor` remains at the original `18f9589` baseline. A faithful, `noindex,nofollow` comparison copy is published at `/archive/hearth-and-harbor/`, using the same self-hosted original fonts. Its visible content, styles, and behavior are preserved; the current Hearthlight homepage stays at `/`. `/concept-a/` and `/concept-b/` remain historical, `noindex,nofollow` drafts from the earlier experiment; the homepage does not use their designs or assets.

On-page copy contains no em dashes.
