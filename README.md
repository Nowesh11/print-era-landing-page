# Print Era landing page

Landing page for **Print Era** ("A New Age of Printing"), a Penang company doing direct-to-wall UV printing for homes and businesses in Malaysia and Singapore.

Stack: Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui · motion · Playwright.

> **Status:** setup only. `src/app/page.tsx` is a temporary design-token preview; the sections are built one by one next.

## Run it

Requires Node 20.9+ and pnpm.

```bash
pnpm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
pnpm dev                     # http://localhost:3000 (use --port if 3000 is taken)
```

| Script                         | What it does                                                          |
| ------------------------------ | --------------------------------------------------------------------- |
| `pnpm dev`                     | Dev server (Turbopack)                                                |
| `pnpm build` / `pnpm start`    | Production build / server                                             |
| `pnpm lint`                    | ESLint, zero warnings allowed                                         |
| `pnpm typecheck`               | `tsc --noEmit`                                                        |
| `pnpm format` / `format:check` | Prettier (+ Tailwind class sorting)                                   |
| `pnpm test:e2e`                | Playwright smoke test + axe (Chromium, 375 px and 1440 px, port 3100) |
| `pnpm analyze`                 | Turbopack bundle analyzer (`next analyze`)                            |
| `pnpm analyze:webpack`         | `@next/bundle-analyzer` on a webpack build                            |
| `pnpm check`                   | lint → typecheck → format:check → build → test:e2e                    |

First Playwright run: `pnpm exec playwright install chromium`.

A pre-commit hook (husky + lint-staged) formats and lints staged files.

## Design docs

- `docs/DESIGN_REFERENCES.md`: sources, theme direction, brand tokens, WhatsApp flow
- `docs/SECTIONS.md`: every section with copy, layout and data
- `docs/OPEN-ITEMS.md`: questions for the client
- `docs/reference/`: the client's PDF brief rendered as PNG, plus setup screenshots
- `CLAUDE.md`: rules for building sections

## Where things live

```
src/app/globals.css     design tokens + liquid glass utilities
src/lib/site.ts         business details, nav anchors, WhatsApp helpers
src/content/            typed copy/data (placeholders clearly marked)
src/components/ui/      shadcn primitives
src/components/sections one file per section (coming next)
public/videos/          hero video goes here (see README there)
```
