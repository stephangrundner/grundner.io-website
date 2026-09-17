import React from "react";

export function ProcessSteps({ steps = [], onDark = false, style }) {
  return (
    <ol style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"), ...style }}>
      {steps.map((s, i) => {
        const label = typeof s === "string" ? s : s.label;
        const note = typeof s === "string" ? null : s.note;
        return (
          <li key={label} style={{
            display: "grid",
            gridTemplateColumns: "44px 1fr",
            gap: "var(--space-4)",
            padding: "18px 0",
            borderBottom: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
            alignItems: "baseline"
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--tracking-mono)", color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontSize: "1rem", lineHeight: 1.5, color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{label}</span>
              {note ? <span style={{ display: "block", marginTop: 4, fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", color: "var(--text-meta)" }}>{note}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
