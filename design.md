# GetOnBikes — Design System

**v2 — sharp/premium direction.** Supersedes the original pill-shaped, TripAdvisor-literal system below. Decided through a homepage redesign exercise (see `pages/` once task #11 lands); documents the direction, not yet applied to every page in the repo.

## Brand
- **Name:** GetOnBikes
- **Tagline:** Find the right training. Get on the road.
- **Homepage hero hook:** "What do you want to ride?" — a direct, conversational question standing in for a marketing headline, mirroring how confident consumer products (e.g. Tripadvisor's "Where to?") let the primary action answer the question rather than describing it in a subtitle.
- **Positioning:** Edinburgh-first directory for UK motorbike training. The fastest way to compare schools and licences in one place — honest, direct, human.
- **Primary message:** speed and ease of finding the right training — *not* an anti-monetization pledge. Sponsored placements are a planned revenue stream (see Key decisions) and shouldn't be undercut by the site's own marketing copy.

---

## Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--paper` | `#F7F4EF` | Page background (warm off-white, not pure white) |
| `--ink` | `#17130F` | Headlines, primary text, primary button fill |
| `--ink-soft` | `#4A443C` | Body text, descriptions |
| `--ink-faint` | `#8B8478` | Labels, meta, placeholders, inactive tabs |
| `--accent` | `#E1461C` | Brand statement colour — big flat blocks, active-tab underline. **Not** the primary button fill (see Key decisions) |
| `--accent-dark` | `#B93513` | Hover state for accent |
| `--trust` | `#0B6E4F` | Reserved exclusively for rating/review-trust signals |
| `--trust-soft` | `#E4F1EC` | Trust tint backgrounds (e.g. "No reviews yet" tag) |
| `--line` | `#E4DFD2` | Card borders, dividers |
| `--white` | `#FFFFFF` | Card surfaces sitting on paper |

### Licence colour system
A jewel-tone palette, one hue per licence stage — reserved for **large wayfinding tiles** (the homepage licence grid). Small inline badges on cards/profiles stay neutral (ink-bordered, no fill) so a row of several badges next to a school name doesn't turn into visual noise — colour-coding is for scanning five tiles at a glance, not for decorating every mention of "CBT."

| Licence | Hex | Usage |
|---|---|---|
| CBT | `#0F5C5C` | Teal — licence tile fill only |
| A1 | `#1E3A6E` | Navy — licence tile fill only |
| A2 | `#8A5A0F` | Ochre — licence tile fill only |
| Full A | `#6E1E3A` | Wine — licence tile fill only |
| Mod 1 & 2 | `#3A3A32` | Charcoal-olive — licence tile fill only |

---

## Typography

**Display/headings:** Sora, weight 800 (hero, promo headline) or 600 (sub-headings, tab labels, button text). Large and confident — headlines should be big enough that the page needs almost nothing else in the hero.

**Body:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif` — unchanged from v1. Body copy doesn't need a custom face; legibility over personality.

**Data/labels:** IBM Plex Mono, weight 600. Used *only* where something is genuinely tabular or a discrete data point — stat callouts, area/meta labels on cards, licence-tile school counts. Not a decorative accent; if it's not a number or a structured label, it's not mono.

**Rules:**
- Sentence case everywhere except licence-tile labels (CBT, A1, A2 etc. — already acronyms/codes)
- No border-radius on type — headline scale carries the "premium" feeling, not letter-spacing tricks
- `text-wrap: balance` on large headlines

---

## Shape language

**The single signature motif: one cut corner.** Every filled surface — buttons, the promo block, licence tiles — has exactly one corner cut at an angle (CSS `clip-path`), not rounded. This replaces v1's rule entirely:

> ~~All interactive elements pill-shaped (`border-radius: 100px`)~~ — **reversed.** No pill shapes, no soft rounded corners anywhere in v2. Sharp edges throughout; the one cut corner is the entire shape vocabulary, used consistently rather than mixing rounded and sharp.

Cut size scales with the element — roughly 15–20% of the element's height (a small button might cut ~10px, a full-width promo block might cut ~20–24px). Corner position (top-right vs. bottom-left) varies by component but should stay consistent per component type across the site.

**Spacing scale:** 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 / 56 / 64px — unchanged from v1.

**Shadows:** Mostly none. v2 is a flat design — depth comes from colour contrast and the cut-corner motif, not soft drop shadows. Reserve `box-shadow` only where a sticky element genuinely needs to separate from scrolling content behind it (e.g. sticky nav on scroll), and keep it minimal (`0 1px 3px rgba(0,0,0,0.06)` at most).

---

## Components

### Buttons
Sharp rectangle, one cut corner (top-right by default). No border-radius.

| Variant | Background | Text | Usage |
|---|---|---|---|
| Primary (ink) | `--ink` | `--paper` | **The single primary action on any given page** — see Key decisions. Currently: the search button. |
| Outline | transparent, `2px solid --ink` | `--ink` | Secondary actions |
| Quiet link | transparent, no border | `--ink-soft`, underline on hover | Everything else (nav links, "List your school", card CTAs) |

Do not use `--accent` as a button fill. It's a brand/statement colour, not an action colour.

### Hero
Eyebrow and subtitle are gone. Structure: huge headline (Sora 800, ~5rem+) → licence-type tabs (text tabs, active state = ink text + accent underline) → one sharp-cornered search bar (thick ink border, ink-filled button). No stat row in the hero — stats live in the promo block instead, so the hero stays a single uncluttered moment.

### Promo block
Full-bleed `--accent` background, one cut corner (bottom-left). Bold headline (Sora 800, white) pitching speed/comprehensiveness — not the rankings pledge. Supporting sentence beneath. Stats presented as a mono-numeral column (not squeezed into the hero), each with a one-line caption. No button in this block — it's a trust/statement moment, not a second competing CTA.

### Licence tile grid
Five full-bleed tiles (one per licence stage), solid colour per the licence colour system above, cut corner (top-right), label + one-line description + count in Plex Mono, all in white text bottom-aligned. Replaces v1's white card + badge + count-text pattern entirely — this is the site's answer to a photography-led category grid, using flat colour instead of stock imagery we don't have yet.

### Coverage strip
A single quiet line ("Now live in Edinburgh — more UK cities coming as we grow"), ink-bordered, no fill. Replaces v1's dedicated "Popular regions" section — a whole section for one city read as boilerplate.

### Listing cards
Flat white cards on `--line`-coloured gaps (no border-radius, no shadow). Area/meta label in Plex Mono with a short accent-coloured rule to the left. School name in Sora 600. Licence badges stay neutral (ink border, no fill — see Licence colour system). "No reviews yet" tag uses `--trust-soft`/`--trust` — the only place colour signals trust, kept separate from the accent.

### Nav
Logo (Sora 800) | text links (Licence guides / Regions / Reviews) | "List your school" as a plain quiet link, same weight as the other nav links — **not** a filled button. Schools are a secondary audience reached through outreach, not a self-serve homepage funnel; the nav shouldn't visually compete with the hero's one real CTA.

---

## Layout

### Grid
Max-width container: `1180px`, `padding: 0 32px`.

### Two-column page layout (school profile pages)
`grid-template-columns: 1fr 280px`, `gap: 24px` — unchanged from v1 pending task #11.

### Licence tile grid
`grid-template-columns: repeat(5, 1fr)`, `gap: 2px` (the gap shows `--line`, giving hairline separation without borders). Collapses to `repeat(3, 1fr)` at `≤1000px`.

### Listings
Single column, `gap: 2px` on a `--line` background (same hairline-separation technique as the tile grid).

---

## Page structure

### Navbar
Logo left | text nav links | "List your school" as a quiet text link far right (no filled button in the nav — see Components).

### Hero
`--paper` background. Huge headline → licence tabs → search bar. No eyebrow, no subtitle, no stat row.

### Promo block
Full-bleed `--accent`, cut bottom-left corner. Sits directly under the hero, before any other section.

### Licence tile grid
Directly below the promo block. Section label ("Find training for your licence") kept small/quiet — the tiles do the work.

### Coverage strip + listings
Quiet coverage line, then the real school listings, flat cards on hairline `--line` gaps.

### Footer
Unchanged structurally from v1 (4-col grid, navy background) pending task #11 — copy updated to match the new positioning (see Tone of voice).

---

## Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≤ 1000px` | Licence tile grid → 3 col. Promo block → 1 col (stats stack under headline). |
| `≤ 960px` | School profile two-column layout → 1 col. |
| `≤ 700px` | Nav links hidden. Listing cards → 1 col. Hero headline scales down (~3.2rem). |

---

## Tone of voice

- Direct, honest, no filler
- Human — knowledgeable friend, not comparison-site robot
- Active voice always
- Sentence case, plain English
- Lead with speed/ease of finding training, not platform ethics — the anti-monetization pledge is real but belongs in the small print (Terms of Use), not the headline

**Do:** "What do you want to ride?"
**Do:** "Every Edinburgh school. One search."
**Do:** "Help other riders make the right choice."
**Don't:** "Empowering motorcyclists to achieve their licence goals."
**Don't:** "Leveraging a best-in-class review ecosystem."
**Don't (anymore):** leading with "Rankings are never for sale" as the hero/promo headline — true, but it's a policy footnote now, not the pitch.

---

## File structure

```
getonbikes/
  index.html              — homepage
  design.md               — this file
  css/
    style.css             — single shared stylesheet, all tokens as CSS vars
  pages/
    licence-guide.html    — CBT guide (template for all licence pages)
    schools/
      edinburgh-motorcycle-training.html
      two-wheels.html
      saltire-motorcycle-training.html
      harleys-rider-training.html
```

---

## Key decisions

- **One primary CTA per page, and only one.** The homepage's single filled, ink-coloured button is the search action. Everything else — "List your school," card links, tile navigation — stays visually quiet. Multiple competing bold elements read as no hierarchy at all.
- **Riders first.** GetOnBikes' core job is helping a rider find the right training fast. Schools are a real but secondary audience, onboarded through direct outreach (not a self-serve homepage funnel) — so the nav CTA for schools stays a plain link, never a bold button competing with the rider-facing search.
- **Sponsored placements are planned, and the marketing shouldn't contradict that.** Organic rank stays review-driven and is never sold — that policy still exists (see Terms of Use) — but it's no longer the headline pitch, since leading with an anti-monetization pledge undercuts pitching schools on paid placement later. When sponsored slots ship, they must be clearly labeled and separate from organic rank, never blended into it.
- Licence colour-coding lives on the large wayfinding tiles only — inline badges on cards/profiles stay neutral to avoid visual noise.
- No pill shapes, no rounded corners anywhere — one consistent cut-corner motif instead.
- Flat design — colour and contrast create hierarchy, not drop shadows.

---

## Open items for task #11 (applying this across the site)

This document captures the homepage direction. Not yet decided/extended:
- School profile pages (breadcrumb, sidebar cards, school-hero band) haven't been redesigned in the cut-corner language yet — v1's rounded treatment is still live there.
- Legal pages (Privacy/Terms/Cookie) and the licence guide page are still on the v1 pill-shaped system.
- Dark mode was not considered for v2 — this is a light-only direction so far.
- Mobile nav (hamburger/collapse behaviour) wasn't designed; v1 just hides nav links under 700px, which may not be adequate long-term.
