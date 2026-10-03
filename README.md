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

The website Charter in `index.html` is the canonical Hearthlight guideline text. The Discord-ready copy below matches it verbatim, including all six headings, principles, paragraphs, and closing notes. Keep this copy synchronized with the website; do not create a separately rewritten Discord ruleset.

Discord alone has the short operational appendix after the Charter: channel guidance and the 👍 Traveler-to-Wayfarer process. The Charter itself is identical everywhere.

<details>
<summary>Copy for Discord #guidelines (2 messages)</summary>

Message 1:

```text
**THE CHARTER**
Guidelines for good company

**I. The fire and frontier**
**Take part in the world.**
Group up, explore, ask questions, share what you find, and start something when the mood strikes. Hearthlight should be more than a silent tag over your head.

You do not have to be constantly active, but when you are around, be part of the company.

**II. The road and return**
**Real life comes first.**
People play at different speeds, pursue different interests, take breaks, disappear for a while, and come back when life allows. There are no attendance requirements and no race to cap.

No attendance requirement means you do not owe Hearthlight your time. The participation expectation means that when you are around, actually be part of the guild.

If you committed to a group, event, or something involving other people and plans change, communicate when you reasonably can.

**III. The mirth and mettle**
**Be someone people want in the group.**
Learn your character, communicate, cooperate, and take feedback well. Treat people decently, respect their boundaries, and remember there are actual people behind the characters and Discord names.

Harassment, bullying, bigotry, personal attacks, and public pile-ons are not welcome here. Explicit sexual content, graphic NSFW material, and sexual RP do not belong in Hearthlight’s shared spaces.

Bring enough mettle to face difficult things and enough mirth not to make the game miserable when something goes wrong.

**IV. The wipes and wisdom**
**Recover, regroup, and keep moving.**
Bad pulls, wrong turns, corpse runs, mistakes, and real-life interruptions are part of the game. Learn what you can without turning setbacks into blame or drama.

Sometimes the best thing to do is laugh, recover the bodies, and try again.
```

Message 2:

```text
**V. The lore and legends**
**Let the world feel like a world.**
Hearthlight is light–medium RP. Join in at whatever depth makes the game more fun for you.

RP is collaborative. Respect other players’ boundaries, do not control another person’s character or outcomes without their consent, and keep what you know as a player separate from what your character knows.

A few lines in /say around a campfire can be enough. Other times characters, stories, or whole adventures may grow into something deeper. Neither way is more correct.

**VI. The Monsters & Memories**
**Leave a good name behind.**
Aêthoril is bigger than Hearthlight. Group with strangers, trade, explore, roleplay, and become part of the server around us.

Play fairly, do not grief, respect camps and shared spaces, follow the Monsters & Memories Play Nice Policy, and be the kind of people others are glad to run into again.

We’re here to actually play Monsters & Memories together, to see what’s out there, and to remember that the people beside us matter as much as whatever we’re chasing.

These guidelines apply in game and in Discord. If something needs attention, contact a Founder privately. You do not have to confront someone first. Founders may step in as needed to uphold these guidelines.

**For Discord**
Keep things roughly in their appropriate channels, but nobody is going to police every conversation that wanders off-topic.

If you’ve read, understand, and are good with the Charter above, react 👍 to this message. One of the Founders will welcome you from Traveler to Wayfarer.
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
