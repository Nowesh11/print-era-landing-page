# Print Era: landing page design spec

> **Status:** v1.0. This is the design source of truth for the Print Era landing page. Every component prompt must read this file first.
> **Style:** iOS 26 Liquid Glass. Simple, modern, light and premium.
> **Sources:** the client's sample PDF (`print-era-website-sample.pdf`, 11 pages, rendered to `docs/reference/page-XX.png`), the current draft site, and the reference links in section 13.

---

## 0. How to use this file

- Build each section exactly as described in **section 9**, using only the tokens in **sections 3–6** and the components in **section 8**.
- If this file and the PDF disagree on **content**, the PDF wins. If they disagree on **style**, this file wins: the PDF borrows its layouts from another company's site (Wallzen), and we're turning them into Print Era's own Liquid Glass look.
- Never invent facts: prices, reviews, client names, ratings, project locations or photos. Anything not confirmed is marked `PLACEHOLDER` in `src/content/` and listed in `docs/OPEN-ITEMS.md`.
- When a value here can't be built as written, stop and say why. Don't quietly swap in something else.

---

## 1. Design direction

**One sentence:** a bright, airy page where the client's artwork and printed walls are the colour, and frosted, light-catching glass panels float above them to hold the text and controls.

The client's own target mockup is on PDF page 11 (the "company colour" mockup): a light pearl page, a floating glass nav pill with the logo, a huge navy headline, a blue-to-violet gradient pill CTA, a glass stats strip, rounded artwork cards, and glass chips for "How it works". **That's the look to match and refine.**

### Principles

1. **Content first, glass second.** Glass is for navigation, controls, labels and stats that float above content. Never put glass on top of glass, and never use it on long body text.
2. **Colour comes from the work.** The page is near-white. Saturated colour comes from the photos and video of printed walls, and from one brand gradient used only for primary actions.
3. **Light is the detail.** Every glass surface has a bright top edge (specular highlight), a soft inner glow and a soft shadow. That edge is what makes it read as glass rather than grey film.
4. **Calm motion.** Smooth, spring-like movement on interaction only. Nothing loops except the hero video.
5. **Readable everywhere.** Text on glass must pass WCAG AA against the busiest thing that could be behind it.

### What we keep and what we change from the PDF references

| From the PDF                                     | Keep                                                             | Change                                                                                 |
| ------------------------------------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Wallzen hero (page 1)                            | Full-screen background video, big centred message, one clear CTA | Wallzen's black and green nav and pink button → glass nav pill and brand gradient pill |
| Green "We Print On Your Wall" blocks (pages 2–4) | The content and the printer machine image                        | Wallzen's flat green background → light page, glass cards, ambient brand glow          |
| "Hello Bold Designs" in green and pink           | The line itself                                                  | Pink is Wallzen's colour, not Print Era's. Use the brand gradient for "Bold Designs"   |
| Grey sample backgrounds                          | Nothing                                                          | They're only the client's mock-up canvas, not a design colour                          |
| Page 11 mockup                                   | Almost everything                                                | Refine spacing, add motion and real states, make it fully responsive                   |

---

## 2. Brand

- **Name:** Print Era™ (the ™ is used in the logo lockup only, not in body copy)
- **Tagline:** "A New Age of Printing"
- **Secondary line:** "Goodbye boring walls. Hello bold designs."
- **Logo:** a gradient "p" mark whose dot is a separate circle, plus the "Print Era" wordmark. Ask the client for SVG files and put them in `public/images/brand/`. Until they arrive, use a temporary text wordmark, never a traced or redrawn copy.
  - On light backgrounds: gradient mark + navy wordmark (`--ink`)
  - On the video or dark backgrounds: gradient mark + white wordmark
  - Minimum height: 28 px in the nav, 40 px in the footer. Clear space around it equal to the height of the dot.
- **Social:** Instagram and TikTok `@print.era.my`
- **WhatsApp:** +60 17-306 6563 (`https://wa.me/60173066563`)
- **Location:** based in Penang, serving Malaysia and Singapore

---

## 3. Colour

All colours are CSS variables in the Tailwind v4 `@theme` block. **No raw hex in components.** The values below were sampled from the logo, the colour swatch and the mockup in the PDF.

### 3.1 Brand

| Token             | Hex       | Where it comes from / used for                                                                                                                                                             |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--brand-sky`     | `#8ED9FD` | Logo, top of the "p". Light highlights, glow blobs                                                                                                                                         |
| `--brand-blue`    | `#0976ED` | Logo. Links, focus ring, active tab text                                                                                                                                                   |
| `--brand-indigo`  | `#555BE5` | Logo. Icons, step numbers                                                                                                                                                                  |
| `--brand-violet`  | `#7444DE` | Logo, the dot. Icon accents                                                                                                                                                                |
| `--brand-purple`  | `#9455ED` | Logo. Gradient end                                                                                                                                                                         |
| `--cta-start`     | `#243CD8` | Mockup CTA, left                                                                                                                                                                           |
| `--cta-mid`       | `#490DD7` | Mockup CTA, middle                                                                                                                                                                         |
| `--cta-end`       | `#A656F1` | Mockup CTA, right                                                                                                                                                                          |
| `--glow-cyan`     | `#0DA7C3` | "Company colour" swatch                                                                                                                                                                    |
| `--glow-deep`     | `#1623D4` | "Company colour" swatch                                                                                                                                                                    |
| `--glow-lavender` | `#CCB6F7` | "Company colour" swatch                                                                                                                                                                    |
| `--brand-green`   | `#7ED957` | The brand board background. **Accent only:** success ticks, the "available" dot, the "Hot selling" pulse. Never a section background, and never used for text on white (it fails contrast) |

### 3.2 Neutrals (light theme)

| Token           | Hex                   | Use                                                     |
| --------------- | --------------------- | ------------------------------------------------------- |
| `--canvas`      | `#F8F6F7`             | Page background (sampled from the mockup, a warm pearl) |
| `--canvas-2`    | `#F3F2F8`             | Alternating section tint (cool lavender-white)          |
| `--surface`     | `#FFFFFF`             | Solid cards and the glass fallback                      |
| `--ink`         | `#0B0D33`             | Headlines and primary text (the mockup's deep navy)     |
| `--ink-2`       | `#3A3D60`             | Body text                                               |
| `--ink-3`       | `#6B6E8C`             | Captions, meta, placeholders (only at 14 px or larger)  |
| `--line`        | `rgba(11,13,51,0.08)` | Dividers, input borders                                 |
| `--line-strong` | `rgba(11,13,51,0.14)` | Hover borders                                           |

### 3.3 Gradients

```css
--gradient-cta: linear-gradient(
  100deg,
  var(--cta-start) 0%,
  var(--cta-mid) 45%,
  var(--cta-end) 100%
);
--gradient-brand: linear-gradient(
  135deg,
  var(--brand-sky) 0%,
  var(--brand-blue) 35%,
  var(--brand-indigo) 65%,
  var(--brand-purple) 100%
);
--gradient-ambient: linear-gradient(
  135deg,
  var(--glow-cyan) 0%,
  var(--glow-deep) 50%,
  var(--glow-lavender) 100%
);
--gradient-text: linear-gradient(
  90deg,
  var(--brand-blue),
  var(--brand-purple)
); /* for one accent word per heading, at most */
```

### 3.4 Rules

- **One primary action per view** uses `--gradient-cta`. Everything else is glass or text.
- Gradient text only on display headings (32 px or larger), at most one word or phrase per heading.
- **Dark mode:** not in v1. Liquid Glass on light is the client's request. The tokens are structured so a dark set can be added later.

---

## 4. Typography

| Role                 | Font                                            | Notes                                                                 |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| Display and headings | **Plus Jakarta Sans** (700–800)                 | Geometric, close to the mockup's heavy headline and the logo wordmark |
| Body and UI          | **Inter** (400–600)                             | Highly legible on glass                                               |
| Numbers in stats     | Inter with `font-variant-numeric: tabular-nums` | 2,400 DPI, 5.0, and so on                                             |

Load both with `next/font/google` (self-hosted, `display: swap`, Latin subset only).

### Scale (fluid with `clamp`, 375 px → 1440 px)

| Token     | Size                     | Line height | Tracking          | Weight | Use                                        |
| --------- | ------------------------ | ----------- | ----------------- | ------ | ------------------------------------------ |
| `display` | clamp(44px, 7vw, 88px)   | 1.0         | -0.035em          | 800    | Hero H1                                    |
| `h1`      | clamp(36px, 5vw, 64px)   | 1.05        | -0.03em           | 800    | Section titles                             |
| `h2`      | clamp(28px, 3.5vw, 44px) | 1.1         | -0.025em          | 700    | Sub-titles                                 |
| `h3`      | clamp(20px, 2vw, 24px)   | 1.25        | -0.015em          | 700    | Card titles                                |
| `lead`    | clamp(17px, 1.4vw, 20px) | 1.55        | 0                 | 400    | Intro paragraphs                           |
| `body`    | 16px                     | 1.6         | 0                 | 400    | Body text                                  |
| `small`   | 14px                     | 1.5         | 0                 | 500    | Captions, meta                             |
| `eyebrow` | 12px                     | 1.2         | 0.16em, UPPERCASE | 600    | Section labels ("WALL & SURFACE PRINTING") |
| `stat`    | clamp(24px, 2.4vw, 32px) | 1.1         | -0.02em           | 700    | Stat numbers                               |

- Body text measure: 60–70 characters (`max-width: 65ch`).
- Headlines use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Sentence case everywhere except the eyebrow labels.

---

## 5. Layout, spacing and shape

- **Container:** `max-width: 1280px`, side padding 20 px (mobile), 32 px (tablet), 48 px (desktop). Hero and video are full-bleed.
- **Grid:** 12 columns on desktop, 6 on tablet, 4 on mobile. Gutter 24 px (16 px on mobile).
- **Spacing scale (px):** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.
- **Section padding:** `clamp(72px, 10vw, 128px)` top and bottom.
- **Breakpoints:** 375 (base), 640, 768, 1024, 1280, 1536. Test at 375, 768, 1280 and 1920.

### Radius (Liquid Glass is very round)

| Token           | Value  | Use                                        |
| --------------- | ------ | ------------------------------------------ |
| `--radius-pill` | 9999px | Nav, buttons, chips, tabs, stats strip     |
| `--radius-xl`   | 32px   | Large cards, the form panel, project tiles |
| `--radius-lg`   | 24px   | Standard cards, material tiles             |
| `--radius-md`   | 16px   | Inputs, small cards                        |
| `--radius-sm`   | 10px   | Badges                                     |

Nested shapes are concentric: inner radius = outer radius − padding.

### Elevation

```css
--shadow-1: 0 1px 2px rgba(11, 13, 51, 0.04), 0 4px 12px rgba(11, 13, 51, 0.05);
--shadow-2:
  0 2px 4px rgba(11, 13, 51, 0.04), 0 12px 32px rgba(11, 13, 51, 0.08);
--shadow-3:
  0 4px 8px rgba(11, 13, 51, 0.05), 0 24px 64px rgba(11, 13, 51, 0.12);
--shadow-cta:
  0 8px 24px rgba(73, 13, 215, 0.35), 0 2px 6px rgba(36, 60, 216, 0.25);
```

---

## 6. The Liquid Glass material

This is the heart of the look. Build it **once** as utilities in `globals.css`. Every component uses these utilities and never writes its own blur.

### 6.1 Anatomy of a glass surface

1. **Fill:** translucent white, so whatever is behind shows through blurred.
2. **Backdrop:** `blur()` + `saturate()`, which makes the colours behind it richer, the way real glass does.
3. **Specular edge:** a bright 1 px highlight on the top inner edge. This one detail is what reads as "glass".
4. **Rim:** a faint 1 px border, white on top fading lower down, with a very subtle darker edge at the bottom for separation.
5. **Inner glow:** a soft white radial light from the top-left.
6. **Shadow:** soft and diffuse, from `--shadow-*`.

### 6.2 The three variants

| Utility        | Fill                    | Backdrop                    | Use                                                                                                   |
| -------------- | ----------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| `.glass-clear` | `rgba(255,255,255,.14)` | `blur(14px) saturate(180%)` | Over the video and photos only (hero CTAs, labels on images). Needs a darkening scrim behind for text |
| `.glass`       | `rgba(255,255,255,.55)` | `blur(20px) saturate(170%)` | Default: cards, chips, tabs, the stats strip                                                          |
| `.glass-thick` | `rgba(255,255,255,.75)` | `blur(28px) saturate(160%)` | The nav pill, the form panel, the mobile menu sheet, the FAQ panel                                    |

Plus modifiers:

- `.glass-tint`: adds a faint brand tint (`linear-gradient(135deg, rgba(142,217,253,.18), rgba(148,85,237,.14))`) under the fill, for the active tab and selected items.
- `.glass-interactive`: hover = fill +8 % opacity, lift `translateY(-2px)`, `--shadow-3`; press = `scale(.98)`.

### 6.3 Reference CSS (adapt to Tailwind v4 `@utility`)

```css
.glass {
  position: relative;
  isolation: isolate;
  background: rgba(255, 255, 255, 0.55);
  -webkit-backdrop-filter: blur(20px) saturate(170%);
  backdrop-filter: blur(20px) saturate(170%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
    /* specular top edge */ inset 0 -1px 0 rgba(11, 13, 51, 0.06),
    /* faint lower rim */ var(--shadow-2);
}
.glass::before {
  /* inner glow */
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  background: radial-gradient(
    120% 80% at 20% 0%,
    rgba(255, 255, 255, 0.55),
    transparent 60%
  );
  pointer-events: none;
}

/* Fallbacks */
@supports not (
  (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))
) {
  .glass,
  .glass-thick {
    background: rgba(255, 255, 255, 0.94);
  }
  .glass-clear {
    background: rgba(11, 13, 51, 0.55);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass-thick,
  .glass-clear {
    background: var(--surface);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
@media (prefers-contrast: more) {
  .glass,
  .glass-thick {
    background: var(--surface);
    border-color: var(--line-strong);
  }
}
```

### 6.4 Enhancements (progressive, optional, built last)

- **Moving specular highlight:** on desktop pointers, glass cards track the pointer with CSS variables `--mx` and `--my`, moving a soft radial highlight across the surface. Turn it off for touch and for `prefers-reduced-motion`.
- **Refraction edge:** an SVG `feDisplacementMap` filter that bends the background slightly at the edges. **Use it on the nav pill and the hero CTA only**, Chromium only, behind `@supports`. Everything must look complete without it.
- **Scroll edge effect:** a 24 px gradient fade under the sticky nav, so content softly disappears beneath it instead of colliding.

### 6.5 Ambient background (what the glass sits on)

Glass on a plain white page looks like nothing. Behind the light sections, render `<GlassAmbient />`:

- 3–4 large blurred blobs (`filter: blur(80–120px)`, opacity .25–.45) in `--glow-cyan`, `--glow-deep`, `--glow-lavender` and `--brand-sky`, placed off-centre and different in each section
- a very slow drift (40–60 s, ±40 px) that stops completely under `prefers-reduced-motion`
- `position: absolute`, `pointer-events: none`, `aria-hidden`, behind the content

### 6.6 Glass rules

- Never put glass on glass. A chip inside a glass card is a solid or tinted chip, not another blur.
- Keep it to 8 or fewer blurred elements visible on screen at once (for performance).
- Never blur a full-width area that scrolls (it's expensive). The nav pill is fine; a full-page overlay isn't.
- Text on `.glass-clear` always has a darkening scrim behind it (see the hero).

---

## 7. Motion

Use the `motion` package. Feel: smooth, physical, quick to respond.

| Token           | Value                                             | Use                     |
| --------------- | ------------------------------------------------- | ----------------------- |
| `--ease-out`    | `cubic-bezier(.22,1,.36,1)`                       | Entrances               |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)`                       | Movement between states |
| spring (motion) | `{ type: "spring", stiffness: 380, damping: 32 }` | Tabs, nav, toggles      |
| `--dur-fast`    | 150ms                                             | Hover, press            |
| `--dur-base`    | 250ms                                             | Small transitions       |
| `--dur-slow`    | 500ms                                             | Section reveals         |

Patterns:

- **Reveal on scroll:** fade + 16 px rise + slight blur (4 px → 0), once per element, staggered by 60 ms within a group. Runs when 15 % of the element is visible.
- **Nav morph:** after 80 px of scroll, the nav pill shrinks (padding −4 px, slightly thicker glass) with a spring.
- **Tabs:** the active glass indicator slides between tabs (motion `layoutId`).
- **Buttons:** hover lifts 2 px and brightens the gradient; press scales to .98.
- **Cards:** hover lifts 4 px; the image inside scales 1.04 over 600 ms.
- **Accordion:** height animates smoothly; the "+" icon rotates 45° into "×".
- **`prefers-reduced-motion`:** no movement or parallax, no blob drift, the video doesn't autoplay (the poster shows instead), and reveals become a plain 150 ms fade.

---

## 8. Components

All built on shadcn/ui primitives, restyled with these tokens.

### 8.1 Nav (floating glass pill)

- Fixed, 16 px from the top, centred, `max-width: 1120px`, `.glass-thick`, `--radius-pill`, height 64 px (56 px after scroll).
- Left: logo. Centre: About · Our Work · Surfaces · How It Works · FAQ. Right: **"Get a quote"** (`--gradient-cta` pill).
- Links: 15 px, weight 500, `--ink-2`. Hover → `--ink`. The current section's link gets a small glass tint pill behind it (scroll-spy).
- Over the hero video, the nav starts as `.glass-clear` with white text, and becomes `.glass-thick` with navy text once it leaves the hero.
- **Below 1024 px:** logo + "Get a quote" + a menu button. The menu opens a glass sheet from the top with large tap targets (52 px or more) and the WhatsApp number at the bottom.

### 8.2 Buttons

| Variant       | Look                                                                                                         | Use                    |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `primary`     | `--gradient-cta` fill, white text, `--shadow-cta`, inner top highlight `inset 0 1px 0 rgba(255,255,255,.35)` | One per view           |
| `glass`       | `.glass` + `--ink` text                                                                                      | Secondary actions      |
| `glass-clear` | `.glass-clear` + white text                                                                                  | Secondary on the video |
| `link`        | `--ink` text with a 1.5 px underline offset 4 px; the underline animates on hover                            | "Explore our work"     |
| `whatsapp`    | the `primary` look + a WhatsApp icon                                                                         | Every WhatsApp action  |

Sizes: `lg` 56 px high, 28 px padding, 17 px text · `md` 48 px · `sm` 40 px. Always pills. Icons 18–20 px, gap 8 px. The trailing arrow (`↗` / `→`) nudges 2 px on hover.

### 8.3 Chips and segmented tabs

- Chips: `.glass` pill, 36 px high, 14 px / weight 500 text.
- Segmented tabs (project filters): a glass track holding chips; the active one has `.glass-thick` + `.glass-tint`, `--ink` text and the sliding indicator. On mobile the row scrolls sideways with scroll-snap and fades at both edges.

### 8.4 Cards

- **Feature card:** `.glass`, `--radius-lg`, 28 px padding, a 44 px icon tile (brand gradient at 12 % opacity, icon in `--brand-indigo`), an `h3` title and body text.
- **Project tile:** image cover at `--radius-xl`, with a `.glass-clear` caption bar inset 12 px from the bottom (title + category), and a glass arrow button in the corner. Hover: lift + image zoom.
- **Testimonial card:** `.glass`, `--radius-xl`, 5 stars (`--brand-violet`), the quote in `lead` size, then the avatar, name and role. A `PLACEHOLDER` label shows in development.
- **Stat:** the `stat` number + a `small` label, separated by thin vertical `--line` dividers inside one glass strip.

### 8.5 Form fields

- Inputs: 52 px high, `--radius-md`, a solid `rgba(255,255,255,.85)` fill inside the glass panel (never glass on glass), a 1 px `--line` border. Focus: `--brand-blue` border plus a 4 px `rgba(9,118,237,.18)` ring.
- Labels sit above the field: 14 px, weight 600, `--ink`. Helper and error text: 13 px. Errors in `#C2263D`, with an icon, never colour alone.
- Selects use the shadcn select, styled to match.

### 8.6 Accordion (FAQ)

- Each item is a row in one `.glass-thick` panel, separated by `--line`. The question is 17 px / weight 600; the answer is `body` / `--ink-2`. A glass "+" button on the right turns into "×".
- Only one item open at a time; the first is open by default.

### 8.7 Floating WhatsApp button

- Bottom-right, 20 px inset, 56 px round, `primary` gradient + WhatsApp glyph. On desktop hover, a glass label "Chat on WhatsApp" slides out to the left.
- Appears after the hero, and hides while the contact section is on screen (to avoid a duplicate).

### 8.8 Icons

`lucide-react`, 1.75 stroke, 20 px (24 px in feature tiles). WhatsApp, Instagram and TikTok use simple brand-glyph SVGs, the only exception.

---

## 9. Sections (in the client's order, from the PDF)

Each entry lists: the anchor, the reference page, the layout, the copy, and the enhancements over the PDF. Copy in quotes is the client's text; fix only spelling and grammar.

### 9.0 Nav: see 8.1

### 9.1 Hero, `#home`, PDF page 1

**The client asks for:** a full-screen background video like wallzen.ae.

**Layout**

- Full-bleed `100svh` (minimum 640 px, maximum 1000 px). A `<video>` cover: `autoplay muted loop playsinline preload="metadata"`, with a poster image.
- **Scrim** over the video for legibility: `linear-gradient(180deg, rgba(11,13,51,.55) 0%, rgba(11,13,51,.15) 40%, rgba(11,13,51,.65) 100%)`, plus a soft brand glow (`--glow-deep` at 25 %, radial, bottom-left).
- Content centred on mobile, left-aligned in a 7-column area on desktop:
  - eyebrow chip (`.glass-clear`): "Wall & surface printing · Malaysia"
  - H1 (`display`, white): **"A New Way to Experience Your Walls"**
  - lead (white at 85 %, max 560 px): "From homes and offices to gyms, hotels and retail spaces, we print artwork directly onto your walls in high resolution. The ink sets as we print, so smaller murals can be finished in hours."
  - CTAs: `primary lg` **"Create my wall"** → `#contact` · `glass-clear lg` **"Explore designs"** → `#work`
  - small line under the buttons: "Goodbye boring walls. **Hello bold designs.**" (the second sentence in `--gradient-text`, lightened for the dark background)
- **Glass stats strip** (`.glass`, pill) pinned at the bottom of the hero, half overlapping the next section (like the PDF page 11 mockup):
  - **2,400 DPI**: Maximum resolution
  - **[TBC]**: Maximum print height _(see OPEN-ITEMS)_
  - **Hours, not days**: Small murals finished
  - **MY & SG**: Service area
    On mobile it becomes a 2×2 grid inside the glass card.
- A pause/play glass button (40 px) in the bottom-right corner of the video (WCAG 2.2.2).

**Video spec:** 10–20 s loop of printing in progress and finished walls. 1080p H.264 MP4 under 4 MB plus a WebM, and a 720p version for mobile (`<source media>`). Poster as AVIF/WebP. Until the client supplies footage, use the poster image only, and log it in OPEN-ITEMS.

### 9.2 Highlights, PDF page 2

- Background `--canvas` + ambient blobs.
- Centred heading block:
  - eyebrow: "Why Print Era"
  - h1: "Malaysia's 1st large-scale **wall printing** provider" (the bold part in `--gradient-text`) _(the "1st" claim needs client proof: see OPEN-ITEMS)_
  - lead: "From a family portrait in your living room to a mural across your restaurant wall, Print Era designs artwork to fit your space and prints it directly onto the surface."
- 3 feature cards (8.4), 3 columns on desktop, stacked on mobile:
  1. **Quality assured** (icon `BadgeCheck`): "Up to 2,400 DPI captures vibrant colour, facial details, fine lettering and intricate patterns."
  2. **Fast and simple** (icon `Zap`): "Durable prints applied directly to the wall, with no waiting for the mural to air-dry. No drilling and no dust."
  3. **Endless options** (icon `Infinity`): "Prints up to [TBC] high and any width, on nearly every surface and technique."

### 9.3 About, `#about`, PDF page 3

The PDF marks this as **"this page should be ABOUT US PAGE"**. Build it as the About section here; whether a separate `/about` page is also needed is in OPEN-ITEMS.

- Background `--canvas-2`.
- Two columns on desktop (text 6 columns · visual 6 columns), stacked on mobile with the visual first.
  - **Text:** eyebrow "About Print Era"; h1 "Innovative prints that **bring walls to life**"; then the two paragraphs:
    - "At Print Era, we're bringing a new way to experience art to Malaysia. Through direct-to-wall UV printing, the wall itself becomes the canvas. A detail drawn from local heritage can stretch across an entire room, giving people a fresh way to see a place they've known for years."
    - "We design each piece around the space and the people who share it, so the finished wall tells a story that belongs there."
  - **Visual:** the Print Era printer (PDF page 9, the cut-out with the logo on its screen) standing on a soft glass plinth (a blurred ellipse shadow), with 2 small floating glass tags: "UV direct-to-wall" and "Up to 2,400 DPI". Slow parallax on desktop.
- Below that, **`#services`**: 4 service cards in a 4-column grid (2×2 on tablet, stacked on mobile). Each has a coloured icon tile, an index ("01 — Personal") and a title + one line:
  1. **Home & feature walls**: nature scenes, statement art and family portraits
  2. **Devotional artwork**: detailed, personalised designs for prayer spaces
  3. **3D-effect & acrylic**: artwork with visual depth, and custom acrylic panels
  4. **Business & branding**: logos, restaurant murals and brand feature walls

### 9.4 Reviews, `#reviews`, PDF page 4

- Background `--canvas` + a large lavender blob.
- Heading row: eyebrow "Reviews"; h1 "What our **clients say**"; and the carousel arrows (glass round buttons) on the right on desktop.
- **Carousel** (Embla): testimonial cards (8.4). 3 visible on desktop, 1.15 on mobile (the next card peeks in). Gentle autoplay every 6 s that pauses on hover or focus, with dots below. **All reviews are PLACEHOLDER until the client sends real ones with permission. The PDF's "Olivia Wilson, CEO Borcelle" is template text and must never go live.**
- **Trust strip** (`.glass`, pill, under the carousel): "Malaysia's trusted direct-to-wall UV printing specialists" · **5.0 ★** Average client rating _(TBC: source)_ · **[TBC]** Max print height, any width · Printing across Malaysia and Singapore.

### 9.5 Projects, `#work`, PDF page 5

- Background `--canvas-2`.
- Heading: eyebrow "Our work"; h1 "The projects **we have done**"; lead "Every design is customised to your space, size and style."
- **Segmented tabs** (8.3): All · **Premium Wall Panel Series** · Home & Nature · Devotional · Commercial.
- **Bento grid** (desktop: 4 columns, auto rows of 260 px):
  - **Premium Wall Panel Series** is the hero tile: 2×2, with a gradient-ring "🔥 Hot selling" badge (a glass badge with `--brand-green` pulse dot) and a short line + "View series" button. The client asked for this to be **bigger and marked as the hot-selling product**.
  - Other projects: 1×1 or 2×1 tiles (8.4) with a caption bar.
  - Tablet: 2 columns (the hero tile spans 2). Mobile: 1 column, with the hero tile first.
- Changing the filter animates the tiles (layout animation, 300 ms).
- Clicking a tile opens a glass lightbox: the image, title, category, and location if confirmed.
- **"A closer look"** strip (from the PDF page 11 mockup): 2–3 close-up detail crops of one mural, with glass labels ("Lotus detail"), showing off the print resolution.
- Every image without a confirmed real project is labelled "Design concept" (as the draft site does).

### 9.6 Surfaces, `#surfaces`, PDF page 6

- Background `--canvas` + ambient.
- Heading centred: eyebrow "Materials"; h1 "Printable **surfaces**"; lead "Experience our wide range of printing capabilities across numerous surfaces."
- Grid of 12 tiles: 6 columns on desktop, 4 on tablet, 3 on mobile. Each tile is a square texture photo at `--radius-lg`, with a centred `.glass` chip label.
  - Wood · Brick · Tile · Fabric · Plaster · Metal · Canvas · Uneven surfaces · Glass · Leather · Concrete · Wallpaper
- Hover: the tile lifts and the chip becomes `.glass-thick`.
- Below the grid: "Have another surface? **Ask us →**" (link to WhatsApp).

### 9.7 How it works, `#how-it-works`, PDF page 7

- Background `--canvas-2`.
- Desktop: 5 / 7 columns. **Left (sticky):** eyebrow "Simple from start to finish"; h1 "Your idea to your wall. **In 3 easy steps.**"; lead "We guide you from your first idea through to the final print."; then the `glass` button "Let's start with your wall →".
- **Right:** 3 step cards (`.glass`) joined by a vertical gradient line that fills as you scroll:
  1. **Consultation & online site assessment**: "Send your wall size (width × height), a wall photo, your location and your design idea. We assess your space online and advise you."
  2. **Mockup approval & booking**: "Review the design for your space. Once the mockup and quotation are approved, confirm your booking with a deposit."
  3. **Setup & printing**: "Our team sets up the equipment and prints the approved artwork directly onto your prepared surface."
- Each step has a 44 px glass number badge ("01") in `--gradient-text`.
- Mobile: everything stacked; the line runs down the left side.

### 9.8 Book a consultation, `#contact`, PDF page 8

- Background: a soft panel of `--gradient-ambient` at 18 % opacity with blobs, so the glass form really shines here.
- Desktop: 5 / 7 columns.
  - **Left:** eyebrow "Let's make it yours"; h1 "Big idea? **Start with your wall.**"; lead "Tell us a little about your space. We'll help you explore the possibilities and prepare a personalised quotation."; the WhatsApp number as a large link "+60 17-306 6563 ↗"; "Penang, Malaysia · Serving Malaysia and Singapore".
  - **Right:** a `.glass-thick` form panel at `--radius-xl`, 32 px padding:
    - Your name* · Project location (city / state)*
    - Wall width* · Wall height* (numbers only)
    - Measurement unit* (Feet · Inches · Centimetres · Metres) · Space type* (Home / feature wall · Prayer space · Business / commercial · Acrylic printing · Other)
    - Your design idea (textarea, 4 rows)
    - `whatsapp` button, full width: **"Continue on WhatsApp"**
    - note under the button: "Opens WhatsApp with your enquiry ready to send. Please attach a photo of your wall in the chat."
- Validate with zod (inline errors after the user leaves a field, all errors on submit). On submit, build the message and open `https://wa.me/60173066563?text=…` in a new tab. **No data is stored or sent anywhere else.**
- Mobile: stacked, with the form first after the heading.

### 9.9 FAQ, `#faq`, PDF page 9

- Background `--canvas`.
- Desktop: 4 / 8 columns. **Left (sticky):** eyebrow "A few things to know"; h1 "Good questions. **Clear answers.**"; and a small glass card: "Still unsure? Chat with us on WhatsApp" + button.
- **Right:** the accordion (8.6), with these 8 questions from the draft site:
  1. Is this wallpaper or a sticker? → "No. The artwork is printed directly onto the wall with a UV wall printer. There is no wallpaper sheet or sticker layer."
  2. Can I customise my own design? → "Yes. Share your idea, a reference image or your artwork. We'll customise the design for your wall and review a mockup with you before printing."
  3. How do I get a price? → "Send us your wall width and height, a photo of the wall, your location and your preferred design. We'll assess your requirements and give you a personalised quotation."
  4. Do you visit the site before quoting? → "Consultation and assessment are done online, using your photos and measurements. We'll advise you on preparation and the space needed for our equipment before the printing day."
  5. Is the 3D effect physically raised? → "No. The depth is a visual effect within the printed artwork."
  6. What should I prepare? → "Clear photos of the wall and its surroundings, the wall size, and the ceiling height."
  7. Can I use my own image or logo? → "Yes. Send the highest-quality original you have, and we'll check it for detail and proportion at your print size."
  8. Where do you provide services? → "We're based in Penang and serve customers across Malaysia and Singapore. Share your location and we'll confirm availability."
- Add `FAQPage` JSON-LD for search engines.

### 9.10 Closing CTA and footer

- **CTA bar** (from the mockup): a full-width `.glass` pill: "**Have a wall in mind?**" + the `whatsapp` button "Chat on WhatsApp".
- **Footer** on `--canvas-2`:
  - logo + "A New Age of Printing"
  - quick links (About, Our Work, Surfaces, How It Works, FAQ)
  - contact (WhatsApp, Penang, Malaysia)
  - social glass icon buttons (Instagram, TikTok `@print.era.my`)
  - bottom row: "© 2026 Print Era. All rights reserved." · "Designed with purpose. Printed with perfection."

---

## 10. Imagery

- **Style:** real printed walls in real rooms, with warm natural light. Close-ups that show detail. No generic stock "interior" photos passed off as projects.
- **Treatment:** `--radius-lg` or `--radius-xl` corners; no filters; consistent warm white balance.
- **Formats:** `next/image`, AVIF/WebP, correct `sizes`, a blur placeholder; only the hero poster is `priority`.
- **Alt text:** describe the artwork and the space ("Tiger mural printed on a living room feature wall"). Purely decorative images use `alt=""`.
- **Supplied by the client** (see OPEN-ITEMS): logo SVG, hero video, project photos by category, the Premium Wall Panel Series photos, the 12 surface textures, the printer photo in high resolution.

---

## 11. Accessibility (required)

- WCAG 2.2 AA. Text contrast at least 4.5:1 (3:1 for 24 px or larger), **measured against the busiest background behind the glass**, not against white.
- Visible focus on every interactive element: a 2 px `--brand-blue` ring with a 2 px offset, plus a white halo on dark backgrounds.
- Fully usable by keyboard: tabs (arrow keys), carousel (buttons + arrow keys), accordion, lightbox (focus trap, Esc closes), the mobile menu.
- The hero video: muted, has a pause button, and doesn't autoplay with reduced motion. No content exists only in the video.
- Respect `prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast`.
- Touch targets at least 44 × 44 px. Form fields have real `<label>`s, `aria-invalid` and linked error text.
- One `<h1>` per page (the hero). Section titles are `<h2>` in the HTML, even though they use the `h1` visual size.
- A skip link ("Skip to content"), landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`), and `lang="en"`.

---

## 12. Performance and SEO

- Lighthouse targets: **mobile 90+** performance, **100** accessibility, best practices and SEO.
- LCP under 2.5 s (the hero poster is the LCP: preload it), CLS under 0.05, INP under 200 ms.
- Video: `preload="metadata"`, the mobile 720p source, no autoplay on `Save-Data` or slow connections (show the poster).
- Glass: 8 or fewer blurred elements on screen; animate only `transform` and `opacity`; `will-change` only during animation.
- Lazy-load everything below the hero; Embla and the lightbox load on demand.
- Metadata: title "Print Era | Direct-to-Wall UV Printing in Malaysia", a description, Open Graph image (1200 × 630, glass style), `LocalBusiness` JSON-LD (Penang, WhatsApp, Instagram), `FAQPage` JSON-LD, `sitemap.xml`, `robots.txt`.

---

## 13. References

| Link                                                                       | Take from it                                                                                  | Don't take                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| PDF (`docs/reference/page-01…11.png`)                                      | Section order, content, the page 11 target mockup, the brand colours                          | The grey mock-up canvas; Wallzen's green and pink |
| https://print-era.brainylamb33.chatgpt.site/#services                      | All copy, the FAQ, the form fields and the WhatsApp flow                                      | Its layout (we're redesigning it)                 |
| https://www.wallzen.ae/                                                    | The full-screen video hero effect                                                             | Their video, images, colours or copy              |
| https://www.mockplus.com/blog/post/liquid-glass-effect-design-examples     | The Liquid Glass feel: translucency, specular edges, depth, used selectively                  | Nothing to copy directly                          |
| https://developer.apple.com/documentation/technologyoverviews/liquid-glass | Apple's Liquid Glass principles: glass for controls and navigation, content first, legibility | —                                                 |

---

## 14. Acceptance checklist for every section

- [ ] Matches its entry in section 9 and its PDF reference page
- [ ] Uses only tokens and glass utilities (no raw hex, no one-off blur)
- [ ] Looks right at 375, 768, 1280 and 1920 px (screenshot each)
- [ ] Glass text passes contrast against the worst-case background
- [ ] Works with the keyboard alone; focus is visible
- [ ] Reduced motion, reduced transparency and the no-backdrop-filter fallback all look complete
- [ ] No invented facts; placeholders are labelled and listed in OPEN-ITEMS
- [ ] `pnpm check` passes (lint, typecheck, format, build, e2e + axe)
- [ ] Lighthouse mobile performance stays at 90 or above

---

## 15. Open items for the client (mirror into `docs/OPEN-ITEMS.md`)

1. **Maximum print height.** The PDF says "up to 23 ft" in one place and "7 meter" in another; the mockup says "2.7 m standard". Which is correct?
2. **"Malaysia's 1st" claim.** Can it be backed up? (It's an advertising claim.)
3. **5.0 rating.** Where does it come from (Google reviews?), and how many reviews?
4. **Real testimonials**, with written permission to publish names and roles.
5. **Logo** as SVG (mark + wordmark, light and dark versions).
6. **Hero video** footage (or permission to film a job).
7. **Project photos** for each category, including the **Premium Wall Panel Series** (what is it exactly: a product line, with sizes and designs?).
8. **Surface texture photos** (12), or approval to use licensed stock images.
9. **Separate About page** or the section only?
10. **Print speed** ("4–8 m²/hr" in the mockup): confirm it before showing it.
11. **Domain** and **languages** (English only, or English plus Bahasa Malaysia?).
