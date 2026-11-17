import { ImageResponse } from "next/og";

import { brandColors as c } from "@/lib/brand-colors";
import { site } from "@/lib/site";

// PLACEHOLDER Open Graph image. Replace with a real branded image once the
// logo files and project photos arrive (docs/OPEN-ITEMS.md).
export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        color: "white",
        backgroundImage: `linear-gradient(135deg, ${c.glowCyan} 0%, ${c.glowDeep} 55%, ${c.glowLavender} 100%)`,
      }}
    >
      <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -3 }}>
        {site.name}
      </div>
      <div style={{ fontSize: 36, letterSpacing: 10, marginTop: 8 }}>
        {site.tagline.toUpperCase()}
      </div>
      <div style={{ fontSize: 30, marginTop: 48, opacity: 0.9 }}>
        Direct-to-wall UV printing · Malaysia & Singapore
      </div>
    </div>,
    size,
  );
}
