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

The website Charter in `index.html` is the canonical Hearthlight guideline text. The Discord-ready copy below matches it verbatim, including all six headings, principles, paragraphs, emphasis, and the closing line. Keep this copy synchronized with the website; do not create a separately rewritten Discord ruleset.

Discord alone has the short operational appendix after the Charter: channel guidance and the 👍 Traveler-to-Wayfarer process. The Charter itself is identical everywhere.

<details>
<summary>Copy for Discord #guidelines (3 messages)</summary>

Message 1:

```text
**THE CHARTER**
Guidelines for good company

**I. The fire and frontier**
**Take part in the world. The hearth stays lit for you.**

Hearthlight is the cozy, familiar fireside you return to and the light you carry beyond it: the warmth of home, the campfire in the wilderness, and the lantern that lights the way into Eth-ur’s Age of Discovery.

Together we explore that frontier, journeying across Aêthoril and down into the Deep to discover and brave whatever this sundered world has in store. Group up, explore, ask questions, share what you find, start something, and invite someone along.

**II. The road and return**
**Real life comes first. Participation still matters.**

The road is yours to walk at your own pace, and the hearth stays lit when you return. People naturally play at different speeds, take breaks, explore different things, and step away for a while. None of it puts you outside the company.

There are no attendance requirements because you do not owe the guild your time. The participation expectation means that when you *are* around, actually be part of the guild: group up, talk, ask or answer questions, invite someone to explore, ask for help with a quest, or lend someone else a hand. Membership should be more than a mere silent guild tag.

Remember that real life comes first, but participation and communication still matter. If you committed to something involving other people and plans change, communicate when you reasonably can.
```

Message 2:

```text
**III. The mirth and mettle**
**Be someone people want beside them.**

Bring enough mettle to face difficult content and enough mirth to keep it fun when things go sideways. Learn your character, communicate, cooperate, take feedback well, and remember that nobody here is too good to laugh at a dumb death, including their own.

Good company is about more than playing well. Treat people decently and respect their boundaries. Harassment, bullying, bigotry, personal attacks, and public pile-ons are not welcome here. Explicit sexual content, graphic NSFW material, and sexual RP do not belong in Hearthlight’s shared spaces.

**IV. The wipes and wisdom**
**Recover, regroup, learn what you can, and move forward.**

Things will go wrong, both in real life and in the game, and that’s just how it is. Plans fall apart, people make mistakes, groups wipe, corpse runs happen, and sometimes an evening just goes sideways.

We recover, regroup, learn what we can, adjust, and move forward. A good attitude and a willingness to improve are what turn wipes into wisdom and protect the camaraderie the guild runs on.

**V. The lore and legends**
**Let the world feel like a world.**

Part of the fun is inhabiting Eth-ur rather than treating it only as a backdrop for game content. Follow rumors, learn the lore, talk in character around a campfire, give an expedition an in-world reason, or let relationships and stories grow naturally out of the adventures you are already having.

Hearthlight is light–medium RP, and people will engage with that at different depths. There is no required backstory, mandatory IC time, or overarching guild storyline to keep up with. RP is collaborative: respect other players’ boundaries, do not control their characters or outcomes without consent, and keep what you know as a player separate from what your character knows.
```

Message 3:

```text
**VI. The Monsters & Memories**
**Leave a good name behind.**

Group with strangers, trade, explore, roleplay, lend a hand, answer questions in OOC, and help foster the kind of server culture you want to play in. In a shared world, reputation travels with you and reflects on the guild.

We’re here to actually play Monsters & Memories: to venture into dangerous places, delve into dungeons, chase discoveries, journey on expeditions, survive the perils, and come back with stories. The monsters are part of the adventure. The memories are what we make with the people beside us.

Play fairly, do not grief, respect camps and shared spaces, follow the **Monsters & Memories Play Nice Policy**, and carry the Hearthlight name in a way that leaves people glad to run into us again.

That’s the whole idea: **fight the monsters, make the memories, and leave people glad they crossed paths with us, all in good company.**

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
