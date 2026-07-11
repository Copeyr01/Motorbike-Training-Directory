# Upshift — Design System

Plain, functional UI: clear layout, working search/filter/listing flows, minimal decoration. This is a deliberate step back from two bold visual explorations ("Night Ride" — black/blue poster system, and an earlier cut-corner "sharp/premium" system) — both are paused, not deleted, in case a bold direction is revisited once core flows are solid. See Archived directions.

**Status:** applied site-wide. Every page (`index.html`, school profiles, licence guide, `list-your-school.html`, legal pages) runs on the one shared stylesheet, `css/style.css`.

## Brand
- **Name:** Upshift (working domain: upshiftuk.com)
- **Wordmark:** "Upshift", with **"Up" set in the accent colour** and the rest in body text colour.
- **Positioning:** currently piloting in Edinburgh; built to extend UK-wide. Real schools, real reviews, no spin.

---

## Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--orange` (accent) | `#E85D24` | Wordmark's "Up", primary button fill, hero eyebrow, active/hover states — the one accent colour, used sparingly |
| `--orange-dark` | `#c44d1a` | Accent hover state |
| `--orange-light` | `#FEF0EA` | Accent tint background |
| `--green` | `#00AA6C` | Trust/rating signals only (rating bubble, trust-stat numerals) |
| `--green-light` | `#E0F5EE` | Trust tint background |
| `--text` | `#0D0D0D` | Headlines, primary text |
| `--text-2` | `#4A4A4A` | Body copy |
| `--text-3` | `#767676` | Meta text, captions, fine print |
| `--white` | `#FFFFFF` | Page/card surfaces |
| `--off` | `#F2F2F2` | Section backgrounds (page-wrap, trust band) |
| `--border` | `#E0E0E0` | Card/input borders, dividers |
| `--border-hover` | `#B0B0B0` | Card border on hover |
| `--navy` | `#0f1f3d` | Footer background, placeholder image tiles |

One accent colour, spent deliberately — orange marks the single primary action per view; green is reserved for trust/rating signals so it never competes with the accent.

---

## Typography

System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`) — no webfonts to load, no third-party font CDN calls to disclose in the Cookie policy.

- Headings: 700–800 weight, sentence case (never all-caps outside of `.text-label` eyebrows).
- Body: 400 weight, 1.65 line-height for readability.
- `.text-label`: 700 weight, uppercase, letter-spaced — reserved for eyebrows/section labels, not body copy.

---

## Shape language

Plain rounded rectangles — no clip-path cuts, no poster-scale display type:
- **Buttons, search bars, badges, tags, pills:** fully rounded (`--radius-pill`, 100px).
- **Cards (listing cards, licence cards, content cards):** `--radius-xl` (16px) or `--radius-lg` (12px), 1px `--border`, `--white` fill.
- **Shadows:** soft, functional drop shadows on hover only (`--shadow-sm` / `--shadow-hover`) — not a flat/no-shadow system.

---

## Components

### Nav
Sticky white bar, wordmark left (`<span class="accent">Up</span>shift`), a school-search box, quiet text links (licence guides / regions / reviews), and "List your school" as a small **outlined** button — a secondary action, not filled, since schools are onboarded via outreach rather than a self-serve funnel.

### Hero
White background, eyebrow label, plain heading + subtitle, then the one primary action: a rounded search bar (text input + licence dropdown + filled orange submit button) with a live results dropdown beneath it. A single row of plain stats sits under the search (schools listed / licence types covered / reviews so far) — no separate duplicate trust-stat band.

### Licence chip / card row
Five equal cards (CBT / A1 / A2 / Full A / Mod 1 & 2), each a colour-coded licence badge + short description + school count, linking into the licence guide. Per-licence badge colours (`--licence-*-bg` / `--licence-*-text`) are the one place colour-coding beyond the single accent is used, since they function as wayfinding, not brand decoration.

### Listing cards
White rows, rounded, 1px border. Placeholder image tile (gradient block with initials) left, school name + short description + real licence badges + tags, honest "No reviews yet" tag rather than a fabricated rating. A live distance line appears once a postcode search has resolved ("2.3 mi away" / "Distance unavailable" for schools without a confirmed postcode — never a guessed figure).

### Footer
Navy panel, 4-column grid: wordmark + one-line description, then Licences / Company / Legal link columns, copyright bar beneath.

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

- **Functionality first.** Both bold explorations (Night Ride, cut-corner "sharp/premium") are paused in favour of a plain, working UI — search, filters, and real listings take priority over a distinctive visual language.
- **One accent, spent deliberately.** Orange marks exactly one primary action per view; "List your school" and other secondary actions stay outlined, not filled.
- **No fake ratings, no fake distances.** A school with zero reviews says so plainly. A school without a confirmed postcode shows "Distance unavailable" rather than an invented number.
- **Rebrand:** GetOnBikes → Upshift. All visible brand text, wordmarks, and contact email updated; the live site still deploys from `getonbikes.vercel.app` (domain migration is separate infrastructure work, not yet done).

---

## Archived directions

Not deleted — parked in case revisited later:
- **"Night Ride"** — black canvas, poster-scale Unbounded type, light-blue accent, fully rounded pill shapes. Was briefly live on the homepage only (`css/homepage.css`, now removed) before this functional-first pass superseded it. Self-hosted Unbounded/Space Grotesk `.woff2` fonts were removed along with it.
- **Cut-corner "sharp/premium"** — warm paper background, single cut-corner clip-path on filled surfaces, orange accent. Retired before Night Ride was built; never implemented in code.

## Open items

- Real photography/logo assets still don't exist — all imagery is placeholder gradient tiles with initials.
- Licence badge colour tokens are per-licence, not per-brand — confirmed intentional (wayfinding, not decoration) but worth re-checking if the palette changes.
- Task #9 (verify Edinburgh school data + outreach) is deferred until closer to launch.
