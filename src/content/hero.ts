import type { ContentStatus } from "./types";

/** Section 1: Home / hero. Copy from PDF page 1. */
export const hero = {
  status: "confirmed" satisfies ContentStatus,
  headline: "A New Way to Experience Your Walls",
  body: "From homes and offices to gyms, hotels and retail spaces, Print Era creates artwork around the scale and character of your interior. We print directly onto your walls in high resolution, with clear varnish available for the finishing touch. The ink sets as we print, so smaller murals can be completed in hours.",
  ctas: {
    primary: { label: "Create my wall", href: "#contact" },
    secondary: { label: "Explore designs", href: "#projects" },
  },
  tagline: {
    lead: "Goodbye Boring Walls,",
    emphasis: ["Hello Bold", "Designs"],
  },
  video: {
    /** PLACEHOLDER: files not supplied yet. See public/videos/README.md. */
    status: "placeholder" satisfies ContentStatus,
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm",
    poster: "/videos/hero-poster.jpg",
  },
} as const;
