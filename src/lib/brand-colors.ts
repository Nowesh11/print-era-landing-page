/**
 * Brand colours for places that cannot read CSS variables:
 * the generated Open Graph image and the browser theme colour.
 * Must mirror the @theme block in src/app/globals.css.
 * Components must use the CSS tokens, never this file.
 */
export const brandColors = {
  sky: "#8ED9FD",
  blue: "#0976ED",
  indigo: "#555BE5",
  violet: "#7444DE",
  purple: "#9455ED",
  glowCyan: "#0DA7C3",
  glowDeep: "#1623D4",
  glowLavender: "#CCB6F7",
  green: "#7ED957",
  ink: "#0F172A",
  surface: "#F8FAFC",
} as const;
