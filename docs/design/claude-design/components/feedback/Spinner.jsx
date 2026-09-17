import React from "react";

export function Spinner({ label = "Wird geladen", size = 16, onDark = false, style }) {
  const [frame, setFrame] = React.useState(0);
  const steps = ["|", "/", "—", "\\"];
  React.useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setFrame(f => (f + 1) % steps.length), 140);
    return () => clearInterval(id);
  }, []);
  return (
    <span role="status" aria-live="polite" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)", ...style }}>
      <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: size, width: size, display: "inline-block", textAlign: "center" }}>{steps[frame]}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--tracking-mono)", textTransform: "uppercase" }}>{label}</span>
    </span>
  );
}
