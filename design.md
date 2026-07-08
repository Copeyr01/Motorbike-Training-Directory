# GetOnBikes — Design System ("Night Ride")

Black canvas throughout, poster-scale display type, single light-blue accent. Replaces the paper/ink "sharp premium" direction previously documented here — that direction is retired, not just parked.

**Status:** applied to the real homepage (`index.html` + `css/homepage.css`). School profile pages, the licence guide, `list-your-school.html` and the legal pages have **not** been migrated yet — they still run on the original light/pill-shaped system (`css/style.css`) until they get their own pass in this direction. See Open items.

## Brand
- **Name:** GetOnBikes
- **Positioning:** UK-wide directory for motorbike training. Real riders, real prices, no spin.
- **Homepage hero:** stacked poster headline + a short subtitle + one search bar. The headline is short and functional (what the visitor is here to do), not just the brand name treated as a poster.

---

## Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0A0A0A` | Page background — near-black, not pure black |
| `--surface` | `#151515` | Cards, listing rows, licence chips, tile fills |
| `--surface-alt` | `#181818` | Search bar / input fill |
| `--line` | `#262626` | Card borders |
| `--line-soft` | `#1E1E1E` | Section dividers, nav border |
| `--white` | `#FFFFFF` | Headlines, primary text |
| `--text-soft` | `#B8B8B8` | Hero subtitle, body copy on dark |
| `--text-faint` | `#9A9A9A` | Secondary labels, nav links |
| `--text-mute` | `#8A8A8A` | Meta text (review counts, locations) |
| `--accent` (light blue) | `#6FCBFF` | The single accent — "On" in wordmark, headline highlight word, links, stat numerals, primary button fill |
| `--accent-ink` | `#0A0A0A` | Text sitting on top of the accent fill (buttons) |
| `--accent-dark` | `#3FA6E0` | Hover/pressed state for accent-filled elements |

Light blue is the sole accent — same role fluro-cyan would have played, softer and less strobe-like against the black ground.

---

## Typography

**Display/headings:** Unbounded, weight 900 for the poster-scale hero (stacked, `line-height: 0.92`, tight tracking), weight 700 for section headings (~1.5rem).

**Body/UI:** Space Grotesk — weights 400 (body copy), 500 (subtitle, nav, form placeholder), 600 (nav links, meta labels), 700 (buttons, card titles, stat labels).

**Rules:**
- Sentence case in body copy; hero headline is set in caps for poster impact.
- Accent colour is reserved for one word/element at a time — never whole paragraphs, never multiple competing accent moments in the same view.

---

## Shape language

Soft and rounded throughout — the opposite of the retired cut-corner system:
- **Buttons / search pill:** fully rounded, `border-radius: 100px`.
- **Cards, chips, tiles:** `border-radius: 12–14px`, 1px `--line` border, `--surface` fill.
- **No clip-path cuts, no sharp corners anywhere in this direction.**

**Texture:** a faint (6% opacity) noise/grain overlay on the hero band, for depth on the flat black.

**Shadows:** none — flat dark cards throughout.

---

## Components

### Nav
Wordmark left (Space Grotesk 700, "On" in accent — GetOnBikes' own capitalisation already isolates the word) | quiet text links, `--text-faint` | "List your school" as an accent-outlined pill (transparent fill, accent border + text) — a secondary action, not filled. Schools are onboarded via outreach, not a self-serve funnel, so this stays outlined rather than filled.

### Hero
Full-width, `--bg`, grain overlay. Stacked Unbounded 900 headline (short, functional — not just the brand name), last word in `--accent`. Subtitle in `--text-soft`, max-width ~380px. Below: a single rounded search bar (`--surface-alt` fill, `--line-soft` border) with an accent-filled pill button docked inside on the right — **the one filled-accent action in the hero**, consistent with the single-primary-CTA principle carried over from the previous direction.

### Licence chip row
Equal-width `--surface` chips (one per licence stage — CBT / A1 / A2 / Full A / Mod 1 & 2), rounded 12px, `--line` border. Licence code in white 700, school count in `--text-mute` beneath. No colour-per-licence coding in this direction — chips stay neutral, accent is not spent here.

### Listing cards
`--surface` rows, rounded 14px, `--line` border. Diagonal-stripe placeholder image block left (real photography is a separate task — see Open items on the previous direction), school name (white 700) + `--text-mute` meta line. Where a school has no reviews yet, that's shown plainly ("No reviews yet") rather than faking a star rating — accent is reserved for the accent-filled pill CTA on the right ("View school →").

### Footer
`--bg` with a `--line-soft` top border (same black ground as the rest of the page, not a separate panel). 4-column grid: wordmark + one-line description, then link columns (`--text-faint` links, white 700 column headers). Bottom bar: copyright + legal links in `--text-mute`/`--line-soft` divider.

---

## Layout

- Page container: `1180px` max-width, `padding: 0 32px`.
- Licence chip row: equal flex/grid columns, `gap: 12px`.
- Listings: single column, `gap: 12px`.
- Footer grid: `1.4fr 1fr 1fr 1fr`, `gap: 24px`.

---

## Tone of voice

- Direct, confident, a little raw — "Real riders. Real prices. No spin."
- Poster-headline energy in the hero; everything below stays functional and quiet except for the single accent colour.
- Leads with speed/ease of finding training, not platform ethics — consistent with the earlier decision to stop marketing "rankings are never for sale" as the headline pitch, since sponsored placements are a planned revenue stream.

---

## Key decisions

- **One accent, spent deliberately.** Light blue appears in exactly one place per section — never accent-on-accent, never whole paragraphs in accent.
- **One primary filled action per view.** The hero's search button is the one filled-accent button above the fold; "List your school" stays outlined, not filled, since schools are a secondary audience reached through outreach.
- **No fake ratings.** Where a school has zero reviews, the card says so plainly — this direction doesn't invent a star rating to fill the space the "accent-coloured star rating" pattern implies.
- Full reversal of the previous system's shape rule: rounded/pill everywhere now, not cut corners.

---

## Open items

- Only the homepage has been rebuilt in this direction (`index.html` + `css/homepage.css`). School profile pages, the licence guide, `list-your-school.html`, and the legal pages are still on the original light/pill-shaped system (`css/style.css`) — migrating them is separate follow-up work, not yet started.
- Accent usage should stay disciplined as more pages are built: one accent moment per section, never accent-on-accent.
- Confirm the light-blue accent (`#6FCBFF`) against WCAG contrast on `--bg` for small text before relying on it for anything below large/UI-scale text — it's built for large text and UI elements, not fine print.
- Fonts (Unbounded, Space Grotesk) are self-hosted as real `.woff2` files under `fonts/`, not linked from Google's CDN — keeps the Cookie policy's "no third-party trackers" claim accurate (Google Fonts' CDN is a known IP-exposure concern under UK/EU privacy law).
