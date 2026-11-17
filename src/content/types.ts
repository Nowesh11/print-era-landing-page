/**
 * Content status markers.
 *
 * - "confirmed": wording/fact supplied by the client (PDF or draft site).
 * - "needs-confirmation": supplied by the client but contradicted elsewhere
 *   or not yet verified. See docs/OPEN-ITEMS.md before shipping.
 * - "placeholder": template or dummy content. Must NEVER go live as real.
 */
export type ContentStatus = "confirmed" | "needs-confirmation" | "placeholder";

export const PLACEHOLDER = "PLACEHOLDER" as const;
