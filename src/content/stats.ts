import type { ContentStatus } from "./types";

/** Section 4 stats strip. Copy from PDF page 4. */
export const trust = {
  title: "Malaysia's trusted direct-to-wall UV printing specialists",
  stats: [
    {
      id: "coverage",
      value: "Malaysia & Singapore",
      label: "Printing across Malaysia and Singapore",
      status: "confirmed" satisfies ContentStatus,
    },
    {
      id: "rating",
      value: "5.0",
      label: "Average client rating",
      /** NEEDS CONFIRMATION: source of the rating (Google reviews?) and permission to show it. */
      status: "needs-confirmation" satisfies ContentStatus,
    },
    {
      id: "height",
      value: "7 m",
      label: "Max print height, any width",
      /** NEEDS CONFIRMATION: PDF also says "23 ft" (≈7 m) and the draft site "2.7 m standard". */
      status: "needs-confirmation" satisfies ContentStatus,
    },
  ],
} as const;
