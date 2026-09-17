import React from "react";

export function PullQuote({ children, source, onDark = false, style, ...rest }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)", ...style }} {...rest}>
      <blockquote style={{
        margin: 0,
        borderLeft: "var(--accent-rule)",
        paddingLeft: "var(--space-6)",
        fontSize: "clamp(1.25rem,2vw,1.625rem)",
        lineHeight: 1.3,
        letterSpacing: "-0.015em",
        fontWeight: "var(--fw-medium)",
        color: onDark ? "var(--on-dark)" : "var(--ink)"
      }}>{children}</blockquote>
      {source ? (
        <figcaption style={{ paddingLeft: "var(--space-6)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{source}</figcaption>
      ) : null}
    </figure>
  );
}
