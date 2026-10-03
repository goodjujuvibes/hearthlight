# Hearthlight

A small **Social PvE · Light–Medium RP** guild in [Monsters & Memories](https://www.monstersandmemories.com/), on **Tilustra, US East PvE**.

> A warm place to return to.
> Good company for the journeys ahead.

Hearthlight began in October 2026. Its founding group is still taking shape; the guild is being built together rather than around one traditional GM.

## Website

Plain static HTML, CSS, and vanilla JavaScript. No framework, dependencies, or build step. The visual foundation is the original Hearth & Harbor site at `18f9589`: dark blue night, stars, warm firelight, alternating parchment, brass, restrained teal, and its original typography and hearth mark.

The page order is hero, beginning, guild life, Charter, light–medium RP, and closing invitation. The old roster and harbor-specific imagery are removed.

| File | Purpose |
|---|---|
| `index.html` | The Hearthlight homepage, metadata, Charter, and light–medium RP section. |
| `styles.css` | The archived visual foundation with targeted additions for the new content. |
| `app.js` | Shared Discord invite setting for the join buttons. |
| `fonts.css`, `assets/fonts/` | The original Almendra SC, Vollkorn, Cardo, and EB Garamond families, self-hosted with license notices. |
| `favicon.svg` | The original flame favicon at a stable, crawlable URL. |
| `hearthlight-mark.svg`, `hearthlight-social.png` | Original hearth glyph and the Hearthlight social preview card. |
| `CNAME`, `robots.txt`, `sitemap.xml` | References for `hearthlightguild.com`. |
| `.github/workflows/deploy.yml` | GitHub Pages deployment on pushes to `main`. |

## Preview locally

Run `python3 -m http.server 8000` from the repository root, then open `http://localhost:8000/`.

The homepage preloads the four typefaces used in the hero. Font faces use
`font-display: block` to avoid a flash of mismatched system fonts on a normal
first load. The browser briefly waits to draw text; on an unusually slow or
failed font request, readable fallback text remains available after its bounded
block period. The original font files and weight selections are preserved.

## Charter and Discord guidelines

The website Charter in `index.html` is the canonical Hearthlight guideline text. The Discord-ready copy below matches it verbatim, including all six headings, principles, paragraphs, emphasis, and the closing line. Keep this copy synchronized with the website; do not create a separately rewritten Discord ruleset.

Discord alone has the short operational appendix after the Charter: channel guidance and the 👍 Traveler-to-Wayfarer process. The Charter itself is identical everywhere.

<details>
<summary>Copy for Discord #guidelines (3 messages)</summary>

Message 1:

```text
**THE CHARTER**
Guidelines for good company

**I. The Fire & Frontier**
**Take part in the world with a hearth that stays lit for you.**

Hearthlight is the cozy, familiar fireside you return to and the light you carry beyond it: the warmth of home, the campfire in the wilderness, and the lantern that lights the way into Eth-ur’s Age of Discovery.

Together we explore that frontier, journeying across Aêthoril and down into the Deep to discover and brave whatever this sundered world has in store. Group up, explore, ask questions, share what you find, start something, and invite someone along.

**II. The Road & Return**
**Real life comes first, and participation matters.**

The road is yours to walk at your own pace, and the hearth stays lit when you return. People naturally play at different speeds, take breaks, explore different things, and step away for a while. None of it puts you outside the company.

There are no attendance requirements because you do not owe the guild your time. The participation expectation means that when you are around, actually be part of the guild: group up, talk, ask or answer questions, invite someone to explore, ask for help with a quest, or lend someone else a hand. Membership should be more than a mere silent guild tag.

If you committed to something involving other people and plans change, communicate when you reasonably can.
```

Message 2:

```text
**III. The Mirth & Mettle**
**Be someone people want beside them, in game and out.**

Bring enough mettle to learn your character, take on difficult content, communicate, cooperate, and take feedback well. Bring enough mirth to laugh at yourself, celebrate other people’s wins, make room for different personalities, and remember that we’re here to enjoy the game and have fun.

Good fellowship is about more than playing well. Treat people decently, act with integrity, and respect their boundaries. Harassment, bullying, bigotry, discrimination, and personal attacks are not welcome here.

**IV. The Wipes & Wisdom**
**Recover, regroup, learn what you can, adjust, and move forward.**

Things will go wrong, both in real life and in the game, and that’s just how it is. Plans fall apart, people make mistakes, groups wipe, corpse runs happen, and sometimes an evening just goes sideways.

What matters is how we handle these things. Own mistakes, help each other recover, keep perspective, and don’t let frustration take over. Sometimes there’s something to learn from it, and sometimes you just have to laugh or brush it off and try again.

**V. The Lore & Legends**
**Make room for story and immersion.**

Part of Hearthlight is treating Eth-ur like a world worth inhabiting, not just a backdrop for game mechanics. RP can be as light as a few words in /say, giving your character some lore and personality, or giving an adventure an in-world reason. It can also grow into recurring scenes, dynamic character relationships, and stories over time.

Hearthlight is a light–medium RP guild, and people will engage with that at different depths. There is no required backstory, mandatory IC time, or overarching guild storyline to keep up with.

Remember that RP is collaborative: respect other players’ boundaries, do not control their characters or outcomes without consent, and keep what you know as a player separate from what your character knows.
```

Message 3:

```text
**VI. The Monsters & Memories**
**Be part of what makes the game worth remembering.**

The developers have made a game and a world we genuinely want to spend time in. Being part of it means grouping with strangers, trading, exploring, roleplaying, lending a hand, answering questions in OOC, and helping foster the kind of server culture you want to keep coming back to. In a shared world, what each of us adds to it matters.

Play fairly, do not grief, respect camps and shared spaces, follow the [Monsters & Memories Play Nice Policy](https://account2.monstersandmemories.com/policy/pnp), and carry the Hearthlight name in a way that leaves people glad they crossed paths with us.

*We fight the monsters, make the memories, and add something good to the world along the way, all in good company together.*

**For Discord**
Keep things roughly in their appropriate channels, but nobody is going to police every conversation that wanders off-topic.

If you’ve read, understand, and are good with the Charter above, react 👍 to this message. One of the Founders will welcome you from Traveler to Wayfarer.
```

</details>

## Discord invite

Set `const DISCORD_URL` at the top of `app.js` to the Hearthlight invite. The join buttons open Discord directly. Keep their static `href` values in `index.html` in sync so they also work without JavaScript. If no valid invite is configured, the join buttons stay hidden; there is no placeholder dialog or coming-soon copy. The old H&H invite is not used.

## Deployment and domain

GitHub Pages must use **GitHub Actions** as its build source, and its `github-pages` environment must allow `main`. The configured Pages URL is reported by the deployment.

The repository's domain references point to `hearthlightguild.com`. For that custom domain to serve the site, it must also be configured under **Settings → Pages → Custom domain**, with the domain's DNS pointing to GitHub Pages. A CNAME file alone does not configure a custom domain for an Actions deployment.

## Preserved history

`archive/hearth-and-harbor` remains at the original `18f9589` baseline. A faithful, `noindex,nofollow` comparison copy is published at `/archive/hearth-and-harbor/`, using the same self-hosted original fonts. Its visible content, styles, and behavior are preserved; the current Hearthlight homepage stays at `/`. `/concept-a/` and `/concept-b/` remain historical, `noindex,nofollow` drafts from the earlier experiment; the homepage does not use their designs or assets.

On-page copy contains no em dashes.
