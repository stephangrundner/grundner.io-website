import React from "react";

export function TechnicalNote({ figure, children, onDark = false, style, ...rest }) {
  return (
    <div style={{
      borderTop: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line-strong)"),
      paddingTop: "var(--space-3)",
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "baseline",
      ...style
    }} {...rest}>
      {figure ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)", whiteSpace: "nowrap" }}>{figure}</span> : null}
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", lineHeight: 1.5, color: "var(--text-meta)" }}>{children}</span>
    </div>
  );
}
