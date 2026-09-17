import React from "react";

export function ProofMetric({ value, description, meta, verify = false, onDark = false, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", minWidth: 0, ...style }} {...rest}>
      <span style={{ fontSize: "clamp(2rem,3vw,2.75rem)", fontWeight: "var(--fw-bold)", letterSpacing: "var(--tracking-heading)", lineHeight: 1, color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{value}</span>
      <span style={{ fontSize: "0.9375rem", lineHeight: 1.45, color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{description}</span>
      {meta ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{meta}</span> : null}
      {verify ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--accent)" }}>[VERIFY]</span> : null}
    </div>
  );
}
