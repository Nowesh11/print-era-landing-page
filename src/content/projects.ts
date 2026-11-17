import type { ContentStatus } from "./types";

export type ProjectCategoryId =
  "premium-wall-panel" | "home-nature" | "devotional" | "commercial";

/** Section 5: "The projects we have done". Categories from PDF page 5. */
export const projectCategories: readonly {
  id: ProjectCategoryId;
  label: string;
  featured?: boolean;
  badge?: string;
}[] = [
  {
    id: "premium-wall-panel",
    label: "Premium Wall Panel Series",
    featured: true, // "make this block bigger"
    badge: "Hot selling", // "mark as our hot selling product"
  },
  { id: "home-nature", label: "Home & Nature" },
  { id: "devotional", label: "Devotional" },
  { id: "commercial", label: "Commercial" },
];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategoryId;
  image: { src: string; alt: string };
  location?: string;
  status: ContentStatus;
};

export const projectsSection = {
  title: "The projects we have done",
  /** From the draft site's inspiration section. */
  disclaimer:
    "Design inspiration and visual concepts shown. Final artwork, scale and finish are agreed for each project. 3D effects are printed visual effects.",
};

/**
 * PLACEHOLDER: no real project photos supplied yet. The draft site only
 * had design concepts (tiger, Buddha, Thai mural), not completed jobs.
 * Do not label concepts as "projects we have done".
 */
export const projects: readonly Project[] = projectCategories.map((c) => ({
  id: `placeholder-${c.id}`,
  title: `PLACEHOLDER: ${c.label} project`,
  category: c.id,
  image: { src: "", alt: "" },
  status: "placeholder",
}));
