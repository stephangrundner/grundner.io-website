import React from "react";

export function Tabs({ tabs = [], activeId, onChange, onDark = false, style }) {
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <div role="tablist" style={{
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
      overflowX: "auto",
      ...style
    }}>
      {tabs.map(t => {
        const active = activeId === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange && onChange(t.id)}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "2px solid " + (active ? "var(--accent)" : "transparent"),
              padding: "0 0 12px",
              minHeight: "var(--touch-min)",
              color: active ? ink : (onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)"),
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              fontWeight: "var(--fw-semibold)",
              whiteSpace: "nowrap",
              cursor: "pointer"
            }}
          >
            {t.label}
            {t.count != null ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", marginLeft: 8, color: "var(--text-meta)" }}>{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
