import React from "react";
import { IconButton } from "../core/IconButton.jsx";

export function Dialog({ open = false, onClose, title, label, size = "md", footer, children, style }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const widths = { sm: 420, md: 560, lg: 760 };

  return (
    <div
      role="presentation"
      onClick={e => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(11,11,11,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-6)"
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          width: "100%",
          maxWidth: widths[size] || widths.md,
          maxHeight: "86vh",
          overflowY: "auto",
          background: "var(--surface)",
          color: "var(--ink)",
          border: "var(--border-width) solid var(--line-strong)",
          borderRadius: "var(--radius-0)",
          boxShadow: "var(--shadow-overlay)",
          display: "flex",
          flexDirection: "column",
          ...style
        }}
      >
        <header style={{ padding: "var(--space-6)", borderBottom: "var(--hairline)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }}>
          <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
            {label ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)" }}>{label}</span> : null}
            <h2 style={{ margin: 0, fontSize: "1.375rem", lineHeight: 1.15, letterSpacing: "var(--tracking-heading)", fontWeight: 650 }}>{title}</h2>
          </div>
          {onClose ? (
            <IconButton label="Dialog schließen" size={36} onClick={onClose}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem" }}>✕</span>
            </IconButton>
          ) : null}
        </header>

        <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-4)", fontSize: "0.9375rem", lineHeight: "var(--lh-body)" }}>
          {children}
        </div>

        {footer ? (
          <footer style={{ padding: "var(--space-6)", borderTop: "var(--hairline)", display: "flex", flexWrap: "wrap", gap: "var(--space-3)", justifyContent: "flex-end" }}>{footer}</footer>
        ) : null}
      </div>
    </div>
  );
}
