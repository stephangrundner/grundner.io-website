import React from "react";

export function Drawer({ items = [], utilityItem, activeHref, onNavigate, onDark = false, style }) {
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <nav style={{
      borderTop: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
      background: onDark ? "var(--graphite)" : "var(--canvas)",
      padding: "var(--space-2) var(--gutter) var(--space-6)",
      display: "flex",
      flexDirection: "column",
      ...style
    }}>
      {items.map(it => (
        <a
          key={it.href}
          href={it.href}
          onClick={onNavigate}
          aria-current={activeHref === it.href ? "page" : undefined}
          style={{
            fontSize: "1.0625rem",
            fontWeight: "var(--fw-medium)",
            padding: "16px 0",
            minHeight: "var(--touch-min)",
            color: activeHref === it.href ? "var(--accent-hover)" : ink,
            borderBottom: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)")
          }}
        >
          {it.label}
        </a>
      ))}
      {utilityItem ? (
        <a href={utilityItem.href} onClick={onNavigate} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.06em", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)", padding: "18px 0 0" }}>
          {utilityItem.label.toUpperCase()} →
        </a>
      ) : null}
    </nav>
  );
}
