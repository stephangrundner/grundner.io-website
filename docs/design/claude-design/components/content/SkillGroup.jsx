import React from "react";

export function SkillGroup({ groups = [], style }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 1, background: "var(--line)", border: "var(--border-width) solid var(--line)", ...style }}>
      {groups.map(g => (
        <div key={g.label} style={{ background: "var(--surface)", padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-2)", minWidth: 0 }}>
          <span style={{ fontSize: "0.875rem", fontWeight: "var(--fw-semibold)" }}>{g.label}</span>
          <span style={{ fontSize: "0.90625rem", lineHeight: 1.6, color: "var(--ink)" }}>{g.items.join(" · ")}</span>
        </div>
      ))}
    </div>
  );
}
