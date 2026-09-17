import React from "react";

const tones = {
  info: { border: "var(--line-strong)", marker: "var(--ink)" },
  success: { border: "var(--line-strong)", marker: "var(--accent)" },
  error: { border: "var(--accent)", marker: "var(--accent)" }
};

export function Toast({ tone = "info", label, children, onDismiss, style }) {
  const t = tones[tone] || tones.info;
  return (
    <div role="status" style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      minWidth: 280,
      maxWidth: 420,
      background: "var(--graphite)",
      color: "var(--on-dark)",
      border: "var(--border-width) solid " + t.border,
      padding: "var(--space-4)",
      ...style
    }}>
      <span aria-hidden="true" style={{ width: 8, height: 8, background: t.marker, marginTop: 6, flex: "0 0 auto" }} />
      <div style={{ display: "grid", gap: 4, minWidth: 0 }}>
        {label ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta-on-dark)" }}>{label}</span> : null}
        <span style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>{children}</span>
      </div>
      {onDismiss ? (
        <button type="button" aria-label="Meldung schließen" onClick={onDismiss} style={{ marginLeft: "auto", background: "transparent", border: "none", color: "var(--text-meta-on-dark)", cursor: "pointer", fontFamily: "var(--font-mono)" }}>✕</button>
      ) : null}
    </div>
  );
}
