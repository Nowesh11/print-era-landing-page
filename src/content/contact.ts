import type { MeasurementUnit } from "@/lib/site";

/** Section 8: Book a consultation. Copy + fields from the draft site. */
export const contactSection = {
  eyebrow: "Let's make it yours",
  title: ["Big idea?", "Start with your wall."],
  intro:
    "Tell us a little about your space. We'll help you explore the possibilities and prepare a personalised quotation.",
  /** NEEDS CONFIRMATION: draft says Malaysia only; PDF says Malaysia and Singapore. */
  locationLine: "Penang, Malaysia · Service across Malaysia",
  submitLabel: "Continue on WhatsApp",
  helper:
    "Opens WhatsApp with your enquiry ready to review and send. Please attach a photo of your wall in the chat.",
} as const;

export const enquiryFields = {
  name: {
    label: "Your name",
    placeholder: "What should we call you?",
    maxLength: 100,
  },
  location: {
    label: "Project location",
    placeholder: "City / state",
    maxLength: 120,
  },
  width: { label: "Wall width", placeholder: "e.g. 7" },
  height: { label: "Wall height", placeholder: "e.g. 5" },
  unit: { label: "Measurement unit" },
  space: { label: "What's your space?" },
  idea: {
    label: "Your design idea",
    placeholder: "Tell us what you would love on your wall…",
    maxLength: 1500,
  },
} as const;

export const measurementUnits: readonly MeasurementUnit[] = [
  "Feet",
  "Inches",
  "Centimetres",
  "Metres",
];

export const spaceTypes = [
  "Home / feature wall",
  "Prayer space",
  "Business / commercial",
  "Acrylic printing",
  "Other",
] as const;
