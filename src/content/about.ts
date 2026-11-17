import type { ContentStatus } from "./types";

/** Section 3: About. Copy from PDF page 3. */
export const about = {
  status: "confirmed" satisfies ContentStatus,
  title: "Innovative Prints That Bring Walls to Life",
  paragraphs: [
    "At Print Era, we're bringing a new way to experience art to Malaysia. Through direct-to-wall UV printing, the wall itself becomes the canvas. A detail drawn from local heritage can stretch across an entire room, giving people a fresh way to see a place they've known for years.",
    "We design each piece around the space and the people who share it, so the finished wall tells a story that belongs there.",
  ],
  /** Service cards from the draft site ("What we do"). */
  services: [
    {
      tag: "01 — Personal",
      title: "Home & feature walls",
      body: "Nature, statement art and meaningful family portraits, tailored to the heart of your home.",
    },
    {
      tag: "02 — Meaningful",
      title: "Devotional artwork",
      body: "Detailed, personalised designs that bring warmth and character to your prayer space.",
    },
    {
      tag: "03 — Distinctive",
      title: "Business & branding",
      body: "Logos, restaurant murals and feature walls that express your brand and welcome your customers.",
    },
    {
      tag: "04 — Expressive",
      title: "3D-effect & acrylic",
      body: "Artwork with the illusion of depth, plus custom printing on acrylic for a different finish.",
    },
  ],
  machineImage: {
    /** PLACEHOLDER: client to supply a clean, licensed printer photo (PDF page 9). */
    status: "placeholder" satisfies ContentStatus,
    src: "/images/brand/printer-machine.png",
    alt: "Print Era vertical UV wall printer on its rail system",
  },
} as const;
