# GetOnBikes — Design System

## Brand
- **Name:** GetOnBikes
- **Tagline:** Find the right training. Get on the road.
- **Positioning:** TripAdvisor-style directory for UK motorbike training. Trusted utility — honest, direct, human.

---

## Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--orange` | `#E85D24` | Primary CTA, brand accent, logo highlight |
| `--orange-dark` | `#c44d1a` | Hover state for orange |
| `--orange-light` | `#FEF0EA` | Orange tint backgrounds |
| `--green` | `#00AA6C` | Rating bubbles, trust signals, Riders' Choice badges |
| `--green-light` | `#E0F5EE` | Green tint backgrounds |
| `--text` | `#0D0D0D` | Headlines, primary text |
| `--text-2` | `#4A4A4A` | Body text, descriptions |
| `--text-3` | `#767676` | Labels, meta, placeholders |
| `--white` | `#FFFFFF` | Page bg, card bg |
| `--off` | `#F2F2F2` | Surface bg, fact cards, trust band |
| `--border` | `#E0E0E0` | Card borders, dividers |
| `--border-hover` | `#B0B0B0` | Hover border state |
| `--navy` | `#0f1f3d` | Footer bg, school logo blocks only |

### Licence badge colours
| Licence | Background | Text |
|---|---|---|
| CBT | `#E8F5E9` | `#1B5E20` |
| A1 | `#E3F2FD` | `#0D47A1` |
| A2 | `#FFF8E1` | `#E65100` |
| Full A | `#FCE4EC` | `#880E4F` |
| Mod 1 & 2 | `#EEEEEE` | `#333333` |

---

## Typography

**Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`

**Weights used:** 400 (regular), 600 (semibold), 800 (extrabold). No other weights.

| Role | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Display | `2.25rem` | 800 | `-0.5px` | 1.2 |
| H1 | `1.75rem` | 800 | `-0.3px` | 1.25 |
| H2 | `1.375rem` | 700 | — | 1.3 |
| H3 | `1.125rem` | 700 | — | 1.4 |
| Body | `1rem` | 400 | — | 1.65 |
| Body sm | `0.875rem` | 400 | — | 1.6 |
| Label/eyebrow | `0.6875rem` | 700 | `0.1em` | — |
| Fine print | `0.75rem` | 400 | — | 1.5 |

**Rules:**
- Sentence case everywhere
- Uppercase only for labels/eyebrows
- Never use bold (700+) for body copy

---

## Spacing & radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Small badges |
| `--radius-md` | `8px` | Fact cards, small inputs |
| `--radius-lg` | `12px` | Rating summary, step tags |
| `--radius-xl` | `16px` | Cards, content blocks |
| `--radius-pill` | `100px` | Buttons, tags, search bars, region pills |

**Spacing scale:** 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 / 56 / 64px

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.08)` | Navbar |
| `--shadow-md` | `0 2px 12px rgba(0,0,0,0.10)` | Hero search bar |
| `--shadow-hover` | `0 4px 20px rgba(0,0,0,0.13)` | Card hover state |

---

## Components

### Rating bubble
Green circle, white bold score. Three sizes.
```css
.rating-bubble {
  border-radius: 50%;
  background: var(--green);
  color: #fff;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
/* sm: 34×34px / 0.875rem */
/* md: 44×44px / 1rem    */
/* lg: 56×56px / 1.25rem */
```

### Buttons
All buttons: pill-shaped (`border-radius: 100px`), `font-weight: 600`, `border: 2px solid`.

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `--orange` | `#fff` | `--orange` |
| Green | `--green` | `#fff` | `--green` |
| Outline | transparent | `--text` | `--text` |
| Ghost | transparent | `--text-2` | `--border` |

Sizes: default `padding: 11px 22px / 0.9375rem`, sm `padding: 8px 16px / 0.875rem`

### Listing card
Horizontal grid: `200px image | 1fr content`. Border-radius `--radius-xl`. Hover: `--shadow-hover` + `--border-hover`.

Image block: dark gradient bg (`#1a2e4a → #0f1f3d`), school initials centred.
Rank badge: top-left, dark semi-transparent pill.
Riders' Choice badge: bottom-left, green pill.
Rating bubble: top-right of content area.

### Licence badges
Pill-shaped (`--radius-pill`), `font-size: 0.6875rem`, `font-weight: 600`. Colours per table above.

### Tags (course/feature tags)
`background: --off`, `border: 1px solid --border`, `border-radius: --radius-pill`, `font-size: 0.75rem`, `color: --text-2`.

### Search bar (hero)
`border: 2px solid --text`, `border-radius: --radius-pill`, height `52px`.
Sections: text input (flex:1) | select (min-width 140px, border-left) | submit button (orange, pill, margin 5px).

### Navbar search
`background: --off`, `border: 1px solid --border`, `border-radius: --radius-pill`, height `42px`.
Focus ring: `box-shadow: 0 0 0 3px rgba(232,93,36,0.1)`.

### Content cards
`background: --white`, `border: 1px solid --border`, `border-radius: --radius-xl`, `padding: 24px`.
Title: `font-size: 1.125rem / 700`, `padding-bottom: 14px`, `border-bottom: 1px solid --border`.

### Sidebar cards
Same as content card but `padding: 20px`. Title `font-size: 0.9375rem`.

---

## Layout

### Grid
Max-width container: `1160px`, `padding: 0 24px`.

### Two-column page layout
`grid-template-columns: 1fr 280px`, `gap: 24px`.
Collapses to single column at `960px`.

### Listing cards
Single column, `gap: 12px`, full container width.

### Licence cards
`grid-template-columns: repeat(auto-fill, minmax(155px, 1fr))`, `gap: 10px`.

### Region pills
`display: flex; flex-wrap: wrap; gap: 8px`.

### Trust band
`grid-template-columns: repeat(4, 1fr)`. Collapses to 2-col at `960px`.

---

## Page structure

### Navbar (sticky, z-index 100)
`height: 64px` | logo left | pill search centre | nav links | orange CTA right.

### Hero
White bg, `padding: 56px 0 44px`, `border-bottom: 1px solid --border`.
Eyebrow → H1 → subtitle → hero search bar → trust stats row.

### Trust band
`background: --off`, `border-bottom: 1px solid --border`, `padding: 20px 0`.

### Breadcrumb
`background: --white`, `border-bottom: 1px solid --border`, `padding: 12px 0`, `font-size: 0.8125rem`.

### School hero band
`background: --white`, `border-bottom: 1px solid --border`, `padding: 28px 0`.
Logo block (64px, navy gradient, border-radius xl) | name + meta + badges | score block right.

### Page wrap (content area)
`background: --off`, `padding: 28px 0 64px`.

### Footer
`background: --navy`, 4-col grid, `padding: 48px 0 28px`.

---

## Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `≤ 960px` | Page layout → 1 col. Trust band → 2 col. Footer → 2 col. |
| `≤ 700px` | Nav links hidden. Nav search hidden. Listing card → 1 col. Hero search stacks. Footer → 1 col. |

---

## Tone of voice

- Direct, honest, no filler
- Human — knowledgeable friend, not comparison-site robot
- Active voice always
- Sentence case, plain English

**Do:** "Find the right training. Get on the road."
**Do:** "No paid placements in results."
**Do:** "Help other riders make the right choice."
**Don't:** "Empowering motorcyclists to achieve their licence goals."
**Don't:** "Leveraging a best-in-class review ecosystem."

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
    school-profile.html   — school listing (template for all schools)
```

---

## Key decisions

- Stars replaced with green rating bubbles (TripAdvisor-style)
- Orange used exclusively for CTAs and brand — never for ratings or trust signals
- Green used exclusively for ratings and trust — never for CTAs
- No dark hero sections — white/off-white throughout, navy only in footer and school logo blocks
- All interactive elements pill-shaped (`border-radius: 100px`)
- Review excerpts surfaced on listing cards, not just scores
- Rank numbers (#1 in Edinburgh) on listing card image blocks
