# Upshift — Design System

Near-wireframe UI: grayscale only, square corners, flat surfaces, minimal decoration — functionality is the whole point, not a visual language. This supersedes an earlier "functional-first" pass that still used a single orange accent and rounded corners; that pass is itself now one step short of what was asked for, so the system below removes colour and rounding entirely. Two earlier bold explorations ("Night Ride" — black/blue poster system, and a cut-corner "sharp/premium" system) remain paused. See Archived directions.

**Status:** applied site-wide. Every page (`index.html`, school profiles, licence guide, `list-your-school.html`, legal pages) runs on the one shared stylesheet, `css/style.css`.

## Brand
- **Name:** Upshift (working domain: upshiftuk.com)
- **Wordmark:** "Upshift", plain text — no colour accent on any letter.
- **Positioning:** currently piloting in Edinburgh; built to extend UK-wide. Real schools, real reviews, no spin.

---

## Colour tokens

Grayscale only — no colour accent anywhere in the UI.

| Token | Hex | Usage |
|---|---|---|
| `--text` | `#0A0A0A` | Headlines, primary text, primary button fill, borders |
| `--text-2` | `#454545` | Body copy |
| `--text-3` | `#767676` | Meta text, captions, fine print, hero eyebrow |
| `--white` | `#FFFFFF` | Page/card surfaces |
| `--off` | `#F4F4F4` | Section backgrounds, hover state for cards/rows |
| `--border` / `--border-hover` | `#0A0A0A` | Card/input borders — same value; hover feedback comes from a background tint, not a border-colour change |
| `--navy` | `#0A0A0A` | Footer background, placeholder image tiles (name kept for minimal diff; value is now plain black) |
| `--orange` / `--orange-dark` / `--orange-light` | `#0A0A0A` / `#333333` / `#F0F0F0` | Legacy token names kept so old inline styles (`color:var(--orange)` on contact links etc.) still resolve — now just dark/light grays, not a colour accent |
| `--green` / `--green-light` | `#0A0A0A` / `#F0F0F0` | Same story — kept for the same reason, resolves to grayscale |

No element gets a colour treatment other elements don't. Licence badges, which previously colour-coded by licence type, are now plain white boxes with a black border and black text — wayfinding is by label text only.

---

## Typography

System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`) — no webfonts to load, no third-party font CDN calls to disclose in the Cookie policy.

- Headings: 700–800 weight, sentence case (never all-caps outside of `.text-label` eyebrows).
- Body: 400 weight, 1.65 line-height for readability.
- `.text-label`: 700 weight, uppercase, letter-spaced — reserved for eyebrows/section labels, not body copy.

---

## Shape language

Square corners, flat surfaces, everywhere:
- **Buttons, search bars, badges, tags, pills:** `border-radius: 0` (all `--radius-*` tokens are `0`).
- **Cards (listing cards, licence cards, content cards):** `1px` solid black border, white fill, square corners.
- **Shadows:** none (`--shadow-sm` / `--shadow-md` / `--shadow-hover` are all `none`). Hover feedback on cards/rows comes from a plain background tint (`--off`) instead.
- **No gradients.** Placeholder image tiles (school initials) are a flat black fill, not the earlier navy gradient.

---

## Components

### Nav
Sticky white bar, plain-text wordmark, a school-search box, quiet text links (licence guides / regions / reviews), and "List your school" as a small **outlined** square button — a secondary action, not filled, since schools are onboarded via outreach rather than a self-serve funnel.

### Hero
White background, gray eyebrow label, plain heading + subtitle, then the primary action — two underlined text links (not boxed tabs, so they read as quiet mode-switches rather than competing with the actual form fields below them) above a search control, both on one row:
- **"Search by Licence"** (default): a licence **dropdown** (All licences / CBT / A1 / A2 / Full A — a `<select>`, not buttons, so it reads as a required-looking form field rather than a set of filter chips) + an optional postcode field + one "Find schools" submit, all inline on a single row (wrapping on narrow screens). Postcode is optional — licence alone filters the list below; adding a postcode also sorts it nearest-first and shows a distance line per card. An inline error appears under the row for anything that doesn't look like a UK postcode, rather than silently failing.
- **"Search by School"**: a single name-search input with a live results dropdown, for the minority of visitors who already know which school they want. Demoted relative to the licence mode since most visitors don't yet know which school they're looking for — that's the problem the site exists to solve.

Both modes filter/sort the same "Edinburgh training schools" list below rather than rendering a separate results view. The top-nav search box is a shortcut into "Search by School."

### Licence chip / card row
Four cards (CBT / A1 / A2 / Full A — not five), each a plain outlined licence-code box + short description + school count, linking into the licence guide. A note beneath the grid explains that Mod 1 & 2 isn't a fifth licence — it's the shared two-part practical test for A1/A2/Full A — and links to that explainer instead of presenting it as a peer option.

### Listing cards
White rows, square corners, 1px black border. Flat black placeholder image tile (initials) left, school name + short description + plain licence badges + tags, honest "No reviews yet" tag rather than a fabricated rating. A live distance line appears once a postcode search has resolved ("2.3 mi away" / "Distance unavailable" for schools without a confirmed postcode — never a guessed figure). Hover tints the row background, no shadow.

### Footer
Black panel, 4-column grid: wordmark + one-line description, then Licences / Company / Legal link columns, copyright bar beneath.

---

## Layout

- Page container: `1160px` max-width, `padding: 0 24px`.
- Licence grid: `repeat(auto-fill, minmax(155px, 1fr))`, `gap: 10px`.
- Listings: single column, `gap: 12px`.
- Footer grid: `repeat(4, 1fr)`, `gap: 32px` (collapses to 2 cols, then 1, on smaller screens).

---

## Tone of voice

- Direct, plain English — no jargon, no poster-headline copy.
- Leads with speed/ease of finding training, not platform ethics — "rankings are never for sale" is a Terms-of-Use footnote, not headline marketing, since sponsored placements are a planned future revenue stream.

---

## Key decisions

- **Wireframe-level simplicity.** No colour accent anywhere, square corners throughout, no shadows, no gradients — functionality (search, filters, real listings) is the entire visual language for now.
- **Legacy token names kept, values changed.** Rather than touch every inline `style="color:var(--orange)"` across school/legal pages, the `--orange`/`--green` tokens were repointed to grayscale values instead of renamed — same effect, smaller diff.
- **No fake ratings, no fake distances.** A school with zero reviews says so plainly. A school without a confirmed postcode shows "Distance unavailable" rather than an invented number.
- **Rebrand:** GetOnBikes → Upshift. All visible brand text, wordmarks, and contact email updated; the live site still deploys from `getonbikes.vercel.app` (domain migration is separate infrastructure work, not yet done).
- **Licence, not licence-plus-test, is the pickable unit.** CBT, A1, A2 and Full A are real, separate licence categories. Mod 1 & 2 is the practical test shared by A1/A2/Full A, not a fifth parallel licence — so it's a note/tag, not a peer filter option, in both the hero picker and the homepage licence-info grid. `licence-guide.html`'s own top-of-page anchor row still lists it as a 5th jump-link, since that's in-page navigation to a section that genuinely exists there, not a claim of peer status — worth revisiting for consistency later.
- **Guided search over freeform.** The homepage's single combined text box (name/postcode/licence keyword all mixed) was replaced by two explicit modes — pick a licence (+ optional postcode) or search a school by name — since most visitors don't know a school name yet and shouldn't have to guess the right free-text syntax to get a useful result.

---

## Archived directions

Not deleted — parked in case revisited later:
- **"Night Ride"** — black canvas, poster-scale Unbounded type, light-blue accent, fully rounded pill shapes. Was briefly live on the homepage only (`css/homepage.css`, now removed) before the functional-first pass superseded it. Self-hosted Unbounded/Space Grotesk `.woff2` fonts were removed along with it.
- **Cut-corner "sharp/premium"** — warm paper background, single cut-corner clip-path on filled surfaces, orange accent. Retired before Night Ride was built; never implemented in code.
- **First functional-first pass** — same layout as today, but kept a single orange accent colour and rounded corners (12–16px, pill buttons). Superseded by this wireframe pass within the same day.

## Open items

- Real photography/logo assets still don't exist — all imagery is placeholder flat-black tiles with initials.
- Task #9 (verify Edinburgh school data + outreach) is deferred until closer to launch.
- If a more distinctive visual language is wanted later, it should be layered back on top of this wireframe once core flows (reviews, accounts, more cities) are built and proven — not before.
