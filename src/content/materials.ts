/** Section 6: Printable surfaces. List from PDF page 6. */
export const materialsSection = {
  title: "Printable surfaces",
  intro:
    "Experience our vast range of printing capabilities across numerous surfaces.",
} as const;

export const materials = [
  "Wood",
  "Brick",
  "Tile",
  "Fabric",
  "Plaster",
  "Metal",
  "Canvas",
  "Uneven surfaces",
  "Glass",
  "Leather",
  "Concrete",
  "Wallpaper",
] as const;

export type Material = (typeof materials)[number];
