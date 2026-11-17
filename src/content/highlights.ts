import type { ContentStatus } from "./types";

/** Section 2: Highlights. Copy from PDF page 2. */
export const highlights = {
  status: "confirmed" satisfies ContentStatus,
  title: "Malaysia's 1st large-scale wall printing provider",
  intro:
    "From a family portrait in your living room to a mural across your restaurant wall, Print Era designs artwork to fit your space and prints it directly onto the surface.",
  cards: [
    {
      id: "quality",
      title: "Quality Assured",
      eyebrow: "Print resolution",
      stat: "2,400 DPI",
      body: "Up to 2,400 DPI captures vibrant colour, facial details, fine lettering and intricate patterns.",
      status: "confirmed" satisfies ContentStatus,
    },
    {
      id: "fast",
      title: "Fast and Simple",
      body: "Durable prints with direct wall application: no waiting for the finished mural to air dry, no drilling and no dust.",
      status: "confirmed" satisfies ContentStatus,
    },
    {
      id: "options",
      title: "Endless Options",
      /** NEEDS CONFIRMATION: PDF says "23 ft" here and "7 meter" on page 4; draft site said "2.7 m standard". */
      body: "Prints up to 23 ft high and any width, compatible with nearly all surfaces and techniques.",
      status: "needs-confirmation" satisfies ContentStatus,
    },
  ],
} as const;
