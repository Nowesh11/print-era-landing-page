# Print Era landing page: project rules

@AGENTS.md

Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · Tailwind CSS v4 · shadcn/ui (Radix) · motion · pnpm.

## Before building any section

1. Read `docs/DESIGN_REFERENCES.md` and `docs/SECTIONS.md`.
2. Look at the matching `docs/reference/page-XX.png` (PDF pages rendered at 150 DPI).
3. Check `docs/OPEN-ITEMS.md` for anything unconfirmed.
4. Read `DESIGN.md` (detailed design spec, added separately). It differs from the current setup in places (heading font Plus Jakarta Sans vs Lexend, glass classes `.glass-clear`/`.glass-thick` vs `.glass-strong`/`.glass-pill`/`.glass-tint-brand`, anchors `#work`/`#surfaces` vs `#projects`/`#materials`). Agree which one wins before building the first section.

## Rules

- **Tokens only.** Colours, gradients, radius, shadows and easing come from `src/app/globals.css`. Never raw hex/rgb in components (`src/lib/brand-colors.ts` is only for the OG image / theme colour).
- **Glass:** use `.glass`, `.glass-strong`, `.glass-pill`, `.glass-tint-brand`; wrap dark media in `.on-media`. Don't invent new glass recipes. Use glass sparingly.
- **One section per file** in `src/components/sections/`; content in `src/content/`; nav/footer in `src/components/layout/`; shadcn primitives only in `src/components/ui/`.
- **Server components by default.** Add `"use client"` only to the small interactive part (carousel, form, filters).
- **Mobile first.** Check at 375, 768, 1280 and 1920 px. No horizontal scroll.
- **Accessibility:** WCAG AA contrast, visible focus, labelled controls, one `h1`. Respect `prefers-reduced-motion` (`<MotionConfig reducedMotion="user">`) and `prefers-reduced-transparency`.
- **No invented facts.** No made-up prices, reviews, client names, ratings or project photos. Placeholders stay marked `status: "placeholder"` and never render as real (e.g. use `publishableTestimonials`).
- WhatsApp links only via `whatsappLink()` / `buildEnquiryMessage()` in `src/lib/site.ts`.
- Run `pnpm check` (lint → typecheck → format:check → build → e2e) before every commit. Commits have the project owner as the only author: no AI co-author lines.
- E2E tests run on port 3100 (`E2E_PORT`) against a fresh `pnpm start`.
