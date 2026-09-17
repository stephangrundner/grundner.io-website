import React from "react";

export function Alert({ tone = "info", title, children, onDark = false, style }) {
  const accentBorder = tone === "error" ? "var(--accent)" : (onDark ? "var(--border-dark)" : "var(--line-strong)");
  return (
    <div role={tone === "error" ? "alert" : "note"} style={{
      border: "var(--border-width) solid " + accentBorder,
      borderLeft: tone === "error" ? "var(--accent-rule)" : ("var(--border-width) solid " + accentBorder),
      background: onDark ? "var(--graphite-elevated)" : "var(--surface)",
      color: onDark ? "var(--on-dark)" : "var(--ink)",
      padding: "var(--space-4)",
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }}>
      {title ? <span style={{ fontSize: "0.9375rem", fontWeight: "var(--fw-semibold)" }}>{title}</span> : null}
      <span style={{ fontSize: "0.875rem", lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}
