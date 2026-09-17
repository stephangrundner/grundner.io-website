import React from "react";

export function TableOfContents({ label = "INHALT", items = [], activeId, onDark = false, style }) {
  return (
    <nav aria-label={label} style={{
      border: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
      background: onDark ? "var(--graphite-elevated)" : "var(--canvas)",
      padding: "var(--space-6)",
      ...style
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{label}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
        {items.map(it => {
          const active = activeId === it.id;
          return (
            <a key={it.id} href={"#" + it.id} style={{
              fontSize: "0.90625rem",
              lineHeight: 1.4,
              paddingLeft: "var(--space-3)",
              borderLeft: "2px solid " + (active ? "var(--accent)" : (onDark ? "var(--border-dark)" : "var(--line)")),
              color: onDark ? "var(--on-dark)" : "var(--ink)"
            }}>{it.label}</a>
          );
        })}
      </div>
    </nav>
  );
}
