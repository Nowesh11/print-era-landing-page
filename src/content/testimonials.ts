import { PLACEHOLDER, type ContentStatus } from "./types";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  status: ContentStatus;
};

/**
 * Section 4: "What our clients say".
 *
 * ⚠️ PLACEHOLDER ONLY. "Olivia Wilson, CEO Borcelle" in the PDF is a Canva
 * template dummy, not a real client. These entries must never go live as
 * real reviews. Replace with real testimonials once the client supplies
 * them WITH permission to publish (docs/OPEN-ITEMS.md).
 */
export const testimonials: readonly Testimonial[] = [1, 2, 3, 4].map((n) => ({
  id: `placeholder-${n}`,
  quote: `${PLACEHOLDER}: real client testimonial goes here.`,
  name: `${PLACEHOLDER} client name`,
  role: `${PLACEHOLDER} role / company`,
  rating: 5,
  status: "placeholder",
}));

/** Only render real reviews. Use this in the section component. */
export const publishableTestimonials = testimonials.filter(
  (t) => t.status === "confirmed",
);
