# Sections

One entry per section, in page order. Build one section per file in `src/components/sections/`, with its content in `src/content/`. Anchor ids match `navLinks` in `src/lib/site.ts`.

Status markers in content files: `confirmed`, `needs-confirmation` (check `docs/OPEN-ITEMS.md`), `placeholder` (never ship as real).

---

## 1. Home / hero: `#home`

- **File:** `sections/hero.tsx` · **Content:** `content/hero.ts` · **Reference:** `docs/reference/page-01.png`
- **Purpose:** First impression. Show the product in motion and push to the consultation.
- **Copy (PDF p.1):**
  - Headline: "A New Way to Experience Your Walls"
  - Paragraph: "From homes and offices to gyms, hotels and retail spaces, Print Era creates artwork around the scale and character of your interior. We print directly onto your walls in high resolution, with clear varnish available for the finishing touch. The ink sets as we print, so smaller murals can be completed in hours."
  - CTAs: "Create my wall" (→ `#contact`) and "Explore designs" (→ `#projects`)
  - Side line: "Goodbye Boring Walls, / Hello Bold / Designs"
- **Layout:** Full-screen (`min-h-svh`) background video like wallzen.ae: `<video autoPlay muted loop playsInline preload="metadata" poster>` with MP4 + WebM sources, `object-cover`, dark overlay (`bg-slate-950/40–55`) so white text passes AA. Wrap in `.on-media`. Glass nav (`glass-pill` / `glass-strong`) floating at the top over the video, sticky on scroll. Headline centred, paragraph max ~60ch, CTAs: `default` (gradient) + `glass`. "Goodbye Boring Walls…" bottom-right on desktop, under CTAs on mobile. Under reduced motion: pause the video and show the poster. On slow/save-data connections show the poster only.
- **Data:** `hero` (copy, CTAs, video paths), `navLinks`, `site`. Video files are a PLACEHOLDER (`public/videos/README.md`).

## 2. Highlights (no nav anchor)

- **File:** `sections/highlights.tsx` · **Content:** `content/highlights.ts` · **Reference:** `page-02.png`
- **Purpose:** Three quick reasons to trust Print Era.
- **Copy (PDF p.2):**
  - Title: "Malaysia's 1st large-scale wall printing provider"
  - Intro: "From a family portrait in your living room to a mural across your restaurant wall, Print Era designs artwork to fit your space and prints it directly onto the surface."
  - **Quality Assured**: "Print resolution. Up to 2,400 DPI captures vibrant colour, facial details, fine lettering and intricate patterns."
  - **Fast and Simple**: "Durable prints with direct wall application: no waiting for the finished mural to air dry. No drilling and no dust."
  - **Endless Options**: "Prints up to 23 ft high and any width, compatible with nearly all surfaces and techniques." ⚠️ height needs confirmation.
- **Layout:** Centred title + intro, then 3 `.glass` cards (1 col mobile, 3 col ≥ md), each with a lucide icon in a small gradient-tinted circle and the stat in `.stat`.
- **Data:** `highlights`.

## 3. About: `#about`

- **File:** `sections/about.tsx` · **Content:** `content/about.ts` · **Reference:** `page-03.png`, printer image `page-09.png`
- **Purpose:** Who Print Era is and what they print. PDF note: "this page should be ABOUT US PAGE". Built as a section here; whether a separate `/about` page is also wanted is an open item.
- **Copy (PDF p.3):**
  - Title: "Innovative Prints That Bring Walls to Life"
  - "At Print Era, we're bringing a new way to experience art to Malaysia. Through direct-to-wall UV printing, the wall itself becomes the canvas. A detail drawn from local heritage can stretch across an entire room, giving people a fresh way to see a place they've known for years."
  - "We design each piece around the space and the people who share it, so the finished wall tells a story that belongs there."
  - Service cards (from the draft site, shown in the PDF): Home & feature walls · Devotional artwork · Business & branding · 3D-effect & acrylic.
- **Layout:** Two columns ≥ lg: text left, printer machine image right (cut-out on a soft ambient glow, not a box). Below: 2×2 grid of small `.glass` service cards. Stacked on mobile.
- **Data:** `about`. Machine image is a PLACEHOLDER until the client sends a clean file.

## 4. Testimonials and stats: `#reviews`

- **File:** `sections/reviews.tsx` · **Content:** `content/testimonials.ts`, `content/stats.ts` · **Reference:** `page-04.png`
- **Purpose:** Social proof.
- **Copy (PDF p.4):**
  - "What our clients say" (carousel)
  - Strip title: "Malaysia's trusted direct-to-wall UV printing specialists"
  - Stats: "Printing across Malaysia and Singapore" · "5.0 ★ Average client rating" · "7 meter Max print height, any width"
- **Layout:** Heading left / carousel right ≥ lg (stacked on mobile). Embla carousel of `.glass` cards (stars, quote, name/role pill), autoplay that stops on hover/focus and is off under reduced motion; prev/next buttons and dots with labels. Stats strip under it: 3 columns, numbers in `.stat`.
- **Data:** `publishableTestimonials` only. ⚠️ All current testimonials are PLACEHOLDERS ("Olivia Wilson, CEO Borcelle" is a template). If the list is empty, hide the carousel and show only the stats strip. The 5.0 rating and 7 m height need confirmation.

## 5. Projects: `#projects` (alias `#services`)

- **File:** `sections/projects.tsx` · **Content:** `content/projects.ts` · **Reference:** `page-05.png`
- **Purpose:** Show finished work by category.
- **Copy (PDF p.5):** Title "The projects we have done". Filter tabs: 1. Premium Wall Panel Series, 2. Home & Nature, 3. Devotional, 4. Commercial (plus "All").
- **Layout:** Glass-pill filter tabs (`role="tablist"` or toggle buttons with `aria-pressed`). Grid of rounded image cards. **Premium Wall Panel Series is a bigger block** (spans 2 cols / 2 rows on desktop) with a **"Hot selling"** badge. Click opens a lightbox (`sheet` or dialog). Add an empty `<span id="services" />` at the top so old `#services` links land here.
- **Data:** `projectCategories`, `projects`, `projectsSection`. ⚠️ No real project photos yet: all items are PLACEHOLDERS. Do not present design concepts as completed projects.

## 6. Materials: `#materials`

- **File:** `sections/materials.tsx` · **Content:** `content/materials.ts` · **Reference:** `page-06.png`
- **Purpose:** Show the range of printable surfaces.
- **Copy (PDF p.6):** "Printable surfaces" · "Experience our vast range of printing capabilities across numerous surfaces." · Wood, Brick, Tile, Fabric, Plaster, Metal, Canvas, Uneven surfaces, Glass, Leather, Concrete, Wallpaper.
- **Layout:** Grid of 12 square tiles (3 cols mobile, 4 md, 6 lg), each a texture image with the label on a `glass-pill`. Needs licensed/own texture photos; until then use token-based gradient tiles + lucide icons (no stock photos without a licence).
- **Data:** `materials`, `materialsSection`.

## 7. How it works: `#how-it-works`

- **File:** `sections/how-it-works.tsx` · **Content:** `content/steps.ts` · **Reference:** `page-07.png` (top)
- **Purpose:** Remove friction: 3 simple steps.
- **Copy:** Eyebrow "Simple from start to finish" · "Your idea to your wall. In 3 easy steps." · "We guide you from your first idea through to the final print." · CTA "Let's start with your wall".
  1. **Consultation & online site assessment**: "Send your wall size (width × height), a wall photo, your location and your design idea. We assess your space online and advise you."
  2. **Mockup approval & booking**: "Review the design for your space. Once the mockup and quotation are approved, confirm your booking with a deposit."
  3. **Setup & printing**: "Our team arrives, sets up the equipment and prints the approved artwork directly onto your prepared surface."
- **Layout:** Heading + CTA left, numbered steps right (≥ lg), steps in an ordered list with `.stat` numbers in small glass pills and divider lines.
- **Data:** `howItWorks`.

## 8. Book a consultation: `#contact`

- **File:** `sections/contact.tsx` (+ client form component) · **Content:** `content/contact.ts` · **Reference:** `page-07.png` (bottom)
- **Purpose:** Main conversion: the WhatsApp enquiry.
- **Copy:** Eyebrow "Let's make it yours" · "Big idea? Start with your wall." · "Tell us a little about your space. We'll help you explore the possibilities and prepare a personalised quotation." · "+60 17-306 6563 ↗" · "Penang, Malaysia · Service across Malaysia" · button "Continue on WhatsApp" · helper text.
- **Layout:** Left: copy + phone link. Right: form in `.glass-strong`, 2-column fields ≥ sm (name/location, width/height, unit/space), full-width idea textarea and submit. shadcn `input`, `select`, `textarea`, `label`. Errors announced with `aria-describedby` / `aria-invalid`.
- **Data:** `contactSection`, `enquiryFields`, `measurementUnits`, `spaceTypes`; `buildEnquiryMessage()` + `whatsappLink()` from `site.ts`. Validate with zod + react-hook-form. See the flow in `DESIGN_REFERENCES.md` §4.

## 9. FAQs: `#faq`

- **File:** `sections/faq.tsx` · **Content:** `content/faqs.ts` · **Reference:** `page-08.png`
- **Purpose:** Answer objections before contact.
- **Copy:** Eyebrow "A few things to know" · "Good questions. Clear answers." · 8 Q&As verbatim from the draft site (wallpaper or sticker, customise, price, site visit, 3D effect, preparation, own image/logo, service area).
- **Layout:** Title left (sticky ≥ lg), shadcn `accordion` right, inside a `.glass` panel. First item open. Add FAQPage JSON-LD.
- **Data:** `faqs`, `faqSection`.

## 10. Footer

- **File:** `layout/footer.tsx` · **Reference:** `page-10.png`
- **Copy:** Logo, "A New Age of Printing", Instagram and TikTok **@print.era.my**, WhatsApp **+60 17-306 6563**, "© {year} Print Era. All rights reserved."
- **Layout:** `.glass-strong` panel, logo + tagline left, nav anchors centre, social + WhatsApp right; stacked on mobile.
- **Data:** `site`, `navLinks`. Logo files are pending (`public/images/brand/`).

Also from the draft site: a floating "Chat on WhatsApp" pill (`glass-tint-brand`, bottom-right, dismissible) built in `layout/`.
