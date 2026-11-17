/**
 * ⚠️ TEMPORARY SETUP PREVIEW
 * Shows the design tokens, fonts, glass styles and buttons so the setup can
 * be checked. The first section prompt (Home / hero) replaces this file.
 */
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { GlassAmbient } from "@/components/glass-ambient";
import { Button } from "@/components/ui/button";
import { buildEnquiryMessage, site, whatsappLink } from "@/lib/site";

const colorGroups = [
  {
    title: "Logo gradient (primary)",
    tokens: [
      ["brand-sky", "#8ED9FD"],
      ["brand-blue", "#0976ED"],
      ["brand-indigo", "#555BE5"],
      ["brand-violet", "#7444DE"],
      ["brand-purple", "#9455ED"],
    ],
  },
  {
    title: "Background swatch (company colour)",
    tokens: [
      ["glow-cyan", "#0DA7C3"],
      ["glow-deep", "#1623D4"],
      ["glow-lavender", "#CCB6F7"],
    ],
  },
  {
    title: "Brand green (accents only)",
    tokens: [["brand-green", "#7ED957"]],
  },
  {
    title: "Neutrals (slate)",
    tokens: [
      ["slate-50", "#F8FAFC"],
      ["slate-100", "#F1F5F9"],
      ["slate-200", "#E2E8F0"],
      ["slate-300", "#CBD5E1"],
      ["slate-400", "#94A3B8"],
      ["slate-500", "#64748B"],
      ["slate-600", "#475569"],
      ["slate-700", "#334155"],
      ["slate-800", "#1E293B"],
      ["slate-900", "#0F172A"],
      ["slate-950", "#020617"],
    ],
  },
] as const;

const typeScale = [
  {
    label: "Display · Lexend",
    className: "font-heading text-display font-semibold",
  },
  {
    label: "Title · Lexend",
    className: "font-heading text-title font-semibold",
  },
  { label: "H3 · Lexend", className: "font-heading text-2xl font-semibold" },
  { label: "H4 · Lexend", className: "font-heading text-xl font-medium" },
] as const;

const bodyScale = [
  { label: "Body lg · Inter", className: "text-lg" },
  { label: "Body · Inter", className: "text-base" },
  { label: "Small · Inter", className: "text-sm" },
  { label: "Caption · Inter", className: "text-xs text-ink-muted" },
] as const;

const glassStyles = [
  { name: ".glass", className: "glass", note: "Cards and panels" },
  {
    name: ".glass-strong",
    className: "glass-strong",
    note: "Nav bar, form, modals",
  },
  {
    name: ".glass-pill",
    className: "glass-pill",
    note: "Nav, chips, small buttons",
  },
  {
    name: ".glass-tint-brand",
    className: "glass-tint-brand",
    note: "Main CTA",
  },
] as const;

const testMessage = buildEnquiryMessage({
  name: "Setup test",
  location: "Penang",
  width: 7,
  height: 5,
  unit: "Feet",
  space: "Home / feature wall",
  idea: "This is a test message from the setup preview page.",
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight">{children}</h2>
  );
}

export default function SetupPreviewPage() {
  return (
    <>
      <GlassAmbient />
      <main
        id="main"
        className="mx-auto w-full max-w-6xl flex-1 space-y-20 px-4 py-10 sm:px-6 sm:py-16"
      >
        <header className="glass-strong space-y-4 p-6 sm:p-10">
          <p className="glass-pill inline-flex px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
            Temporary setup preview
          </p>
          <h1 className="text-title font-semibold">
            {site.name}{" "}
            <span className="text-gradient-brand">design system</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg">
            Tokens, fonts, liquid glass and buttons for the {site.tagline}{" "}
            landing page. The first section prompt replaces this page.
          </p>
        </header>

        <section aria-labelledby="colours">
          <SectionHeading>
            <span id="colours">Colour tokens</span>
          </SectionHeading>
          <div className="space-y-8">
            {colorGroups.map((group) => (
              <div key={group.title} className="glass p-5 sm:p-6">
                <h3 className="mb-4 text-base font-semibold">{group.title}</h3>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                  {group.tokens.map(([token, hex]) => (
                    <li key={token} className="space-y-2">
                      <div
                        className="h-16 rounded-card-sm shadow-soft ring-1 ring-slate-900/5"
                        style={{ background: `var(--color-${token})` }}
                      />
                      <p className="text-sm font-medium text-ink">{token}</p>
                      <p className="stat text-xs text-ink-muted">{hex}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="gradients">
          <SectionHeading>
            <span id="gradients">Gradients</span>
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="glass space-y-3 p-5">
              <div className="h-28 rounded-card-sm bg-gradient-brand" />
              <figcaption className="text-sm">
                <code className="font-semibold text-ink">--gradient-brand</code>{" "}
                sky → blue → indigo → violet. Logo mark and accents.
              </figcaption>
            </figure>
            <figure className="glass space-y-3 p-5">
              <div className="h-28 rounded-card-sm bg-gradient-ambient" />
              <figcaption className="text-sm">
                <code className="font-semibold text-ink">
                  --gradient-ambient
                </code>{" "}
                cyan → deep blue → lavender. Blurred background blobs.
              </figcaption>
            </figure>
            <figure className="glass space-y-3 p-5 md:col-span-2">
              <div className="h-14 rounded-full bg-gradient-cta" />
              <figcaption className="text-sm">
                <code className="font-semibold text-ink">--gradient-cta</code>{" "}
                indigo → violet. Darker slice of the brand gradient so white CTA
                text passes WCAG AA.
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="type">
          <SectionHeading>
            <span id="type">Typography</span>
          </SectionHeading>
          <div className="glass space-y-8 p-6 sm:p-8">
            {typeScale.map((t) => (
              <div key={t.label}>
                <p className="mb-1 text-xs font-medium text-ink-muted">
                  {t.label}
                </p>
                <p className={`${t.className} text-ink`}>
                  A New Way to Experience Your Walls
                </p>
              </div>
            ))}
            <hr className="border-line" />
            {bodyScale.map((t) => (
              <div key={t.label}>
                <p className="mb-1 text-xs font-medium text-ink-muted">
                  {t.label}
                </p>
                <p className={t.className}>
                  From homes and offices to gyms, hotels and retail spaces,
                  Print Era creates artwork around the scale and character of
                  your interior.
                </p>
              </div>
            ))}
            <hr className="border-line" />
            <div>
              <p className="mb-3 text-xs font-medium text-ink-muted">
                Stats · tabular numbers
              </p>
              <dl className="grid grid-cols-3 gap-4">
                {[
                  ["2,400", "DPI"],
                  ["5.0", "Rating"],
                  ["7 m", "Height"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="text-xs text-ink-muted">{label}</dt>
                    <dd className="stat text-3xl font-semibold text-ink sm:text-4xl">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section aria-labelledby="glass">
          <SectionHeading>
            <span id="glass">Liquid glass</span>
          </SectionHeading>
          <p className="mb-6 max-w-2xl text-sm">
            On the light page background:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {glassStyles.map((g) => (
              <div
                key={g.name}
                className={`${g.className} flex min-h-36 flex-col justify-end p-6`}
              >
                <p className="font-heading text-lg font-semibold">{g.name}</p>
                <p className="text-sm">{g.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 mb-6 max-w-2xl text-sm">
            Inside <code className="font-semibold text-ink">.on-media</code>{" "}
            (stand-in for the hero video):
          </p>
          <div className="on-media relative overflow-hidden rounded-card-lg p-6 sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-ambient" />
              <div className="absolute -top-1/4 left-1/3 size-96 rounded-full bg-brand-green/60 blur-3xl" />
              <div className="absolute -bottom-1/3 -left-10 size-96 rounded-full bg-brand-purple/70 blur-3xl" />
              <div className="absolute inset-0 bg-slate-950/45" />
            </div>
            <nav
              aria-label="Example glass nav"
              className="glass-pill mb-10 flex items-center justify-between gap-4 px-4 py-2 sm:px-6"
            >
              <span className="font-heading font-semibold">{site.name}</span>
              <span className="hidden gap-6 text-sm sm:flex">
                <span>About</span>
                <span>Projects</span>
                <span>FAQs</span>
              </span>
              <Button size="sm" variant="glass">
                Get a quote
              </Button>
            </nav>
            <div className="glass max-w-xl space-y-4 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                A New Way to Experience Your Walls
              </h3>
              <p className="text-sm sm:text-base">
                Text on smoky glass over moving footage stays readable.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  Create my wall <ArrowUpRight data-icon="inline-end" />
                </Button>
                <Button variant="glass">Explore designs</Button>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="buttons">
          <SectionHeading>
            <span id="buttons">Buttons (shadcn + tokens)</span>
          </SectionHeading>
          <div className="glass space-y-6 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="glass">Glass</Button>
              <Button variant="glass-brand">Glass brand</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" variant="glass" aria-label="Icon button">
                <ArrowUpRight />
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="whatsapp">
          <SectionHeading>
            <span id="whatsapp">WhatsApp link</span>
          </SectionHeading>
          <div className="glass space-y-4 p-6 sm:p-8">
            <p className="text-sm">
              Built with{" "}
              <code className="font-semibold text-ink">whatsappLink()</code> and{" "}
              <code className="font-semibold text-ink">
                buildEnquiryMessage()
              </code>{" "}
              from{" "}
              <code className="font-semibold text-ink">src/lib/site.ts</code>.
              Number:{" "}
              <span className="stat font-semibold text-ink">
                {site.whatsapp.display}
              </span>
            </p>
            <Button asChild size="lg">
              <a
                href={whatsappLink(testMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-test-link"
              >
                <MessageCircle data-icon="inline-start" />
                Test WhatsApp message
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
