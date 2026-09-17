import React from "react";

export function SectionHeader({ number, label, title, lead, onDark = false, style, ...rest }) {
  return (
    <header style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.1em", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)", whiteSpace: "nowrap" }}>
          {number ? number + "  /  " : ""}{label}
        </span>
        <span style={{ flex: 1, height: 1, background: onDark ? "var(--border-dark)" : "var(--border-default)" }} />
      </div>
      {title ? (
        <h2 style={{ margin: 0, fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", letterSpacing: "var(--tracking-heading)", fontWeight: 650, maxWidth: "26ch", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{title}</h2>
      ) : null}
      {lead ? (
        <p style={{ margin: 0, fontSize: "var(--fs-lead)", lineHeight: "var(--lh-lead)", maxWidth: "62ch", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{lead}</p>
      ) : null}
    </header>
  );
}
