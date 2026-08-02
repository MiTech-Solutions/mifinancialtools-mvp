/**
 * GoldTick — the site's signature recurring device: a short row of
 * ruler-style tick marks in the accent gold. First introduced under the
 * Hero's numeral read-out and the WhyUseMitools icons; this makes it a
 * reusable, deliberate motif instead of a one-off.
 *
 * width: tailwind width class (default w-10, small — for under icons/labels)
 * animate: if true, draws in via scaleX when it enters view (uses Reveal
 *   pattern manually since this is a tiny leaf element, not worth a
 *   separate observer per instance in dense lists).
 */
export default function GoldTick({ width = "w-10", className = "" }) {
  return (
    <div
      className={`h-px ${width} ${className}`}
      style={{ backgroundColor: "#D6A343" }}
      aria-hidden="true"
    />
  );
}
