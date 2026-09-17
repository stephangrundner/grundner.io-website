import React from "react";

export function Breadcrumbs({ items = [], onDark = false, style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ ...style }}>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-2)" }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href || it.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              {last || !it.href ? (
                <span aria-current={last ? "page" : undefined} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.06em", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{it.label}</span>
              ) : (
                <a href={it.href} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.06em", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{it.label}</a>
              )}
              {!last ? <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", color: "var(--line-strong)" }}>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
