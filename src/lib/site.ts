/**
 * Print Era site config: the single source of truth for business details.
 * Facts here come from the client's sample PDF and the current draft site.
 * Anything not yet confirmed by the client is tracked in docs/OPEN-ITEMS.md.
 */

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "Print Era",
  tagline: "A New Age of Printing",
  description:
    "Direct-to-wall UV printing for homes and businesses in Malaysia and Singapore. Based in Penang.",
  url: siteUrl,
  whatsapp: {
    /** E.164 digits only, used to build wa.me links */
    number: "60173066563",
    /** How the number is shown to people */
    display: "+60 17-306 6563",
  },
  social: {
    handle: "@print.era.my",
    instagram: "https://www.instagram.com/print.era.my/",
    tiktok: "https://www.tiktok.com/@print.era.my",
  },
  location: {
    city: "Penang",
    country: "Malaysia",
    label: "Penang, Malaysia",
  },
  serviceArea: ["Malaysia", "Singapore"],
} as const;

/** Section anchors, in page order. Matches docs/SECTIONS.md. */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "reviews", label: "Reviews" },
  { id: "projects", label: "Projects" },
  { id: "materials", label: "Materials" },
  { id: "how-it-works", label: "How it works" },
  { id: "faq", label: "FAQs" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

/** `#services` is kept as an alias of `#projects` for old links. */
export const sectionAliases = { services: "projects" } as const;

/** Build a wa.me link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  const text = message?.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type MeasurementUnit = "Feet" | "Inches" | "Centimetres" | "Metres";

export type EnquiryDetails = {
  name: string;
  location: string;
  width: string | number;
  height: string | number;
  unit: MeasurementUnit;
  space: string;
  idea?: string;
};

/**
 * The consultation form message. Same wording as the draft site's form,
 * so the client receives enquiries in the format they already know.
 */
export function buildEnquiryMessage(details: EnquiryDetails): string {
  const idea = details.idea?.trim() || "I would like your advice.";
  return [
    "Hi Print Era! I would like to enquire about printing.",
    "",
    `Name: ${details.name}`,
    `Location: ${details.location}`,
    `Wall size: ${details.width} W × ${details.height} H (${details.unit})`,
    `Space: ${details.space}`,
    `Design idea: ${idea}`,
    "",
    "I will attach my wall photo here.",
  ].join("\n");
}
