import { cn } from "@/lib/utils";

type GlassAmbientProps = {
  className?: string;
  /** "fixed" covers the viewport behind the page; "absolute" fills the parent. */
  position?: "fixed" | "absolute";
};

/**
 * Soft blurred gradient blobs (cyan → deep blue → lavender) that sit behind
 * the glass so the blur has something to refract. Decorative only.
 */
export function GlassAmbient({
  className,
  position = "fixed",
}: GlassAmbientProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none inset-0 -z-10 overflow-hidden bg-surface-muted",
        position,
        className,
      )}
    >
      <div className="absolute -top-[18%] -left-[12%] size-[62vmax] animate-ambient-drift rounded-full bg-[radial-gradient(closest-side,var(--color-glow-cyan),transparent)] opacity-40 blur-3xl" />
      <div className="absolute top-[22%] -right-[18%] size-[58vmax] animate-ambient-drift rounded-full bg-[radial-gradient(closest-side,var(--color-glow-deep),transparent)] opacity-25 blur-3xl [animation-delay:-8s]" />
      <div className="absolute -bottom-[24%] left-[18%] size-[56vmax] animate-ambient-drift rounded-full bg-[radial-gradient(closest-side,var(--color-glow-lavender),transparent)] opacity-60 blur-3xl [animation-delay:-16s]" />
      <div className="absolute top-[38%] left-[28%] size-[34vmax] rounded-full bg-gradient-ambient opacity-15 blur-3xl" />
    </div>
  );
}
