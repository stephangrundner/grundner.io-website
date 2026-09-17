import React from "react";

export function DataTable({ caption, columns = [], rows = [], style }) {
  return (
    <div style={{ overflowX: "auto", border: "var(--border-width) solid var(--line)", ...style }}>
      <table style={{ width: "100%", minWidth: 520, borderCollapse: "collapse", background: "var(--surface)" }}>
        {caption ? <caption style={{ textAlign: "left", padding: "var(--space-4)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)" }}>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key} scope="col" style={{
                textAlign: c.align === "right" ? "right" : "left",
                padding: "12px var(--space-4)",
                borderBottom: "var(--border-width) solid var(--line)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-mono-sm)",
                letterSpacing: "var(--tracking-mono)",
                textTransform: "uppercase",
                color: "var(--text-meta)",
                fontWeight: "var(--fw-medium)",
                whiteSpace: "nowrap"
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map(c => (
                <td key={c.key} style={{
                  padding: "12px var(--space-4)",
                  borderBottom: "var(--border-width) solid var(--surface-muted)",
                  fontSize: "0.90625rem",
                  lineHeight: 1.5,
                  textAlign: c.align === "right" ? "right" : "left",
                  fontFamily: c.mono ? "var(--font-mono)" : "var(--font-sans)",
                  color: "var(--ink)"
                }}>{r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
