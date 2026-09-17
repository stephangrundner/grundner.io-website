import React from "react";

export function EmptyState({ label = "KEINE EINTRÄGE", title, description, action, style }) {
  return (
    <div style={{
      border: "var(--border-width) solid var(--line)",
      background: "var(--surface-muted)",
      backgroundImage: "var(--hatch)",
      padding: "clamp(28px,4vw,56px)",
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "start",
      ...style
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)" }}>{label}</span>
      {title ? <span style={{ fontSize: "1.25rem", fontWeight: 600, letterSpacing: "var(--tracking-heading)", lineHeight: 1.2 }}>{title}</span> : null}
      {description ? <span style={{ fontSize: "0.9375rem", lineHeight: 1.55, maxWidth: "52ch", color: "var(--ink)" }}>{description}</span> : null}
      {action}
    </div>
  );
}
