import React from "react";

export function Sidebar({
  title = "STEPHAN GRUNDNER",
  groups = [],
  activeId,
  onSelect,
  footer,
  collapsed = false,
  onToggle,
  width = 264,
  style
}) {
  return (
    <aside style={{
      width: collapsed ? 64 : width,
      flex: "0 0 auto",
      minHeight: "100%",
      background: "var(--graphite)",
      color: "var(--on-dark)",
      borderRight: "var(--border-width) solid var(--border-dark)",
      display: "flex",
      flexDirection: "column",
      transition: "width var(--dur-standard) var(--ease-standard)",
      ...style
    }}>
      <div style={{ padding: collapsed ? "var(--space-4) 0" : "var(--space-6)", borderBottom: "var(--border-width) solid var(--border-dark)", display: "flex", alignItems: "center", justifyContent: collapsed ? "center" : "space-between", gap: "var(--space-3)" }}>
        {collapsed ? (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", color: "var(--accent)" }}>SG</span>
        ) : (
          <span style={{ fontSize: "0.8125rem", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--tracking-wordmark)" }}>{title}</span>
        )}
        {onToggle ? (
          <button type="button" aria-label={collapsed ? "Seitenleiste ausklappen" : "Seitenleiste einklappen"} onClick={onToggle} style={{ width: 28, height: 28, background: "transparent", border: "1px solid var(--border-dark)", color: "var(--on-dark)", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.6875rem", display: collapsed ? "none" : "block" }}>
            ←
          </button>
        ) : null}
      </div>

      <nav style={{ flex: 1, overflowY: "auto", padding: "var(--space-4) 0" }}>
        {groups.map(g => (
          <div key={g.label} style={{ marginBottom: "var(--space-6)" }}>
            {!collapsed ? (
              <span style={{ display: "block", padding: "0 var(--space-6) var(--space-2)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta-on-dark)" }}>{g.label}</span>
            ) : null}
            {g.items.map(it => {
              const active = activeId === it.id;
              return (
                <button
                  key={it.id}
                  type="button"
                  aria-current={active ? "page" : undefined}
                  onClick={() => onSelect && onSelect(it.id)}
                  style={{
                    width: "100%",
                    minHeight: "var(--touch-min)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: collapsed ? "center" : "space-between",
                    gap: "var(--space-3)",
                    padding: collapsed ? "0" : "0 var(--space-6)",
                    background: active ? "var(--graphite-elevated)" : "transparent",
                    borderLeft: "2px solid " + (active ? "var(--accent)" : "transparent"),
                    border: "none",
                    borderLeftWidth: 2,
                    borderLeftStyle: "solid",
                    borderLeftColor: active ? "var(--accent)" : "transparent",
                    color: active ? "var(--on-dark)" : "var(--text-meta-on-dark)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    textAlign: "left",
                    cursor: "pointer"
                  }}
                >
                  {collapsed ? (it.short || it.label.slice(0, 2).toUpperCase()) : it.label}
                  {!collapsed && it.badge ? (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "0.04em", color: "var(--accent)" }}>{it.badge}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {footer && !collapsed ? (
        <div style={{ padding: "var(--space-6)", borderTop: "var(--border-width) solid var(--border-dark)", fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--text-meta-on-dark)" }}>{footer}</div>
      ) : null}
    </aside>
  );
}
