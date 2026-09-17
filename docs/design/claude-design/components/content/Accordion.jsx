import React from "react";

export function Accordion({ items = [], defaultOpenId, onDark = false, style }) {
  const [openId, setOpenId] = React.useState(defaultOpenId);
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <div style={{ borderTop: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"), ...style }}>
      {items.map(it => {
        const open = openId === it.id;
        return (
          <div key={it.id} style={{ borderBottom: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)") }}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : it.id)}
              style={{
                width: "100%",
                minHeight: "var(--touch-min)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                padding: "18px 0",
                background: "transparent",
                border: "none",
                color: ink,
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                fontWeight: "var(--fw-medium)",
                textAlign: "left",
                cursor: "pointer"
              }}
            >
              <span>{it.title}</span>
              <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: open ? "var(--accent)" : "var(--text-meta)" }}>{open ? "−" : "+"}</span>
            </button>
            {open ? (
              <div style={{ padding: "0 0 22px", fontSize: "0.9375rem", lineHeight: 1.6, maxWidth: "70ch", color: ink }}>{it.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
