# Design references

Read this before building any section. Also read `docs/SECTIONS.md` and the matching `docs/reference/page-XX.png`.

## 1. Sources

| Source                                                                                                    | What to take                                                                                                                                                                      | What NOT to copy                                                                                                              |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Sample PDF**: `print-era-website-sample.pdf` (rendered as `docs/reference/page-01.png` … `page-11.png`) | The client's brief: the 9 sections in order, the copy, the brand page (p.10) and the theme page (p.11).                                                                           | The template testimonials ("Olivia Wilson, CEO Borcelle") and the competitor screenshots (Wall Zen, Dubai) shown as examples. |
| **Current draft site**: https://print-era.brainylamb33.chatgpt.site/#services                             | Copy, the FAQ answers, the how-it-works steps, the enquiry form fields and the WhatsApp message format. The new site replaces it.                                                 | Its layout and its concept images (tiger, Buddha, Thai mural are design concepts, not finished projects).                     |
| **Background video reference**: https://www.wallzen.ae/                                                   | The effect only: a full-screen hero with moving footage of wall printing, a dark overlay, white text on top and a nav floating over the video. Short, bold headline and two CTAs. | Their video, images, logo, green/black branding or copy. Never download their assets.                                         |
| **Theme reference**: https://www.mockplus.com/blog/post/liquid-glass-effect-design-examples               | The iOS 26 Liquid Glass look: translucency, blur and depth, soft highlights and edges, light tints. Use glass sparingly, on key elements only.                                    | Any of the example images.                                                                                                    |

Notes from fetching (Nov 2026):

- The draft site loaded fine; its form logic is in `app.js` (message template copied into `src/lib/site.ts`).
- wallzen.ae loaded, but the fetched HTML did not expose the `<video>` markup, so the exact overlay values are not known. Their hero order: eyebrow → 2-line H1 → one-line subhead → "Get a quote" (WhatsApp) + "See our work" link; a stats strip sits under the hero.
- The mockplus article gives no numeric blur values. Its advice: balance blur and transparency, keep text contrast high (add subtle shadow behind text if needed), soft shadows/highlights/borders for hierarchy, gentle motion only (slight scale, slow refraction), pastel/gradient backgrounds, test on low-end devices.

## 2. Theme direction

- **iOS 26 Liquid Glass**, Apple-style glassmorphism. Simple and modern.
- Lots of white space. Light page (`surface-muted`) with soft ambient colour blobs (`<GlassAmbient />`) behind glass panels.
- Use the brand gradient **sparingly**: the logo mark, the main CTA, one highlighted word at most per section.
- Glass is for key elements only: nav, cards, form, chips, CTAs. Not every box.
- Large rounded corners (24–32 px cards, full pills for buttons and the nav).
- Motion: gentle, 200–400 ms, `ease-glass`. Reveal on scroll, slight lift on hover. Always respect `prefers-reduced-motion` (wrap motion trees in `<MotionConfig reducedMotion="user">`).
- The hero is the only dark area: full-screen video with a dark overlay. Wrap it in `.on-media` so glass turns smoky and text turns white.
- The PDF's green + pink "Hello Bold Designs" styling comes from the competitor screenshot. Use the Print Era palette instead (brand green only as a small accent).

## 3. Brand tokens

All defined in `src/app/globals.css` (`@theme static`). Components use the token names, never hex.

| Token                            | Value                 | Source                                                            |
| -------------------------------- | --------------------- | ----------------------------------------------------------------- |
| `brand-sky`                      | `#8ED9FD`             | Logo "P" mark, light top (PDF p.10)                               |
| `brand-blue`                     | `#0976ED`             | Logo mark                                                         |
| `brand-indigo`                   | `#555BE5`             | Logo mark                                                         |
| `brand-violet`                   | `#7444DE`             | Logo mark                                                         |
| `brand-purple`                   | `#9455ED`             | Logo mark, lower bowl                                             |
| `glow-cyan`                      | `#0DA7C3`             | "Company colour" swatch (PDF p.11)                                |
| `glow-deep`                      | `#1623D4`             | "Company colour" swatch                                           |
| `glow-lavender`                  | `#CCB6F7`             | "Company colour" swatch                                           |
| `brand-green`                    | `#7ED957`             | Brand page background (PDF p.10). Accents only.                   |
| `slate-50` … `slate-950`         | Tailwind slate hex    | Neutrals for text and surfaces                                    |
| `ink` / `ink-body` / `ink-muted` | slate-900 / 700 / 600 | Headings / body / captions. All pass AA on white and on `.glass`. |
| `ink-inverse`                    | white                 | Text on the hero video / smoky glass                              |

Gradients (CSS variables + utilities):

- `--gradient-brand` / `bg-gradient-brand` / `text-gradient-brand`: sky → blue → indigo → violet. Logo mark, accents.
- `--gradient-cta` / `bg-gradient-cta`: indigo → violet. CTAs with white text (white on indigo 5.2:1, on violet 5.8:1). White on sky or blue fails AA, so the full brand gradient is not used under text.
- `--gradient-ambient` / `bg-gradient-ambient`: cyan → deep blue → lavender. Blurred blobs.

Fonts (`next/font`, self-hosted):

- **Headings: Lexend.** Compared against the wordmark on PDF p.10: Lexend has the same single-storey "a", the angled "t" terminal and wide round bowls. Plus Jakarta Sans has a double-storey "a" and is narrower.
- **Body: Inter.**
- Stats: `.stat` utility (Lexend + tabular, lining numbers).

Other tokens: `rounded-card-sm` (24 px), `rounded-card` (28 px), `rounded-card-lg` (32 px); `shadow-soft`, `shadow-glass`, `shadow-lifted`; `ease-glass`, `ease-spring`; `--duration-fast/base/slow` (200/300/400 ms); `text-display`, `text-title` (fluid).

Glass utilities: `.glass`, `.glass-strong`, `.glass-pill`, `.glass-tint-brand`, plus the `.on-media` scope. Each has a solid fallback when `backdrop-filter` is unsupported and a near-solid version under `prefers-reduced-transparency: reduce`. Button variants `glass` and `glass-brand` use them.

## 4. Draft site: structure, copy and WhatsApp flow

Draft site sections, in order: Hero → marquee strip → Services ("What we do", 4 cards) → Inspiration (filters + 3 concepts) → Spaces (home / business / your artwork / surface) → How it works → Contact form → FAQ → Footer + floating "Chat on WhatsApp".

Key copy kept for the new site:

- Hero eyebrow: "Custom UV wall printing · Malaysia". Headline: "A little imagination. A whole new wall." (the PDF headline replaces this).
- Line under CTAs: "Based in Penang. Creating across Malaysia."
- Services cards: in `src/content/about.ts`.
- Inspiration: "The inspiration studio" / "Find your kind of extraordinary." / "A little inspiration for your next transformation. Every design is customised to your space, size and style." Filters: All inspiration, Home & nature, Devotional, Commercial. Disclaimer in `src/content/projects.ts`.
- Spaces: "More than decoration. A feeling that belongs." Surface chips: Painted walls, Feature walls, Acrylic panels, "Other surfaces? Ask us".
- Footer: "Print Era." / "Designed with purpose. Printed with perfection." / "© {year} Print Era. All rights reserved." / "Let's create something beautiful ↗".

**WhatsApp enquiry flow** (implemented as helpers in `src/lib/site.ts`):

1. The form asks for: **Your name**, **Project location** (city / state), **Wall width** and **Wall height** (numbers), **Measurement unit** (Feet, Inches, Centimetres, Metres), **What's your space?** (Home / feature wall, Prayer space, Business / commercial, Acrylic printing, Other) and **Your design idea** (optional, max 1,500 chars). Labels and placeholders: `src/content/contact.ts`.
2. On submit, `buildEnquiryMessage()` builds the message and `whatsappLink()` opens `https://wa.me/60173066563?text=…` in a new tab, ready to send:
   ```
   Hi Print Era! I would like to enquire about printing.

   Name: …
   Location: …
   Wall size: 7 W × 5 H (Feet)
   Space: Home / feature wall
   Design idea: … (or "I would like your advice.")

   I will attach my wall photo here.
   ```
3. Helper text: "Opens WhatsApp with your enquiry ready to review and send. Please attach a photo of your wall in the chat." The customer attaches the wall photo in the chat.
4. Validate with `react-hook-form` + `zod` (name ≤ 100, location ≤ 120, width/height > 0).

The draft also linked `https://wa.me/message/NAZEC2DQITJLH1` (a WhatsApp Business short link) for the phone number and floating button. The new site uses `wa.me/60173066563` everywhere so the number is explicit.
