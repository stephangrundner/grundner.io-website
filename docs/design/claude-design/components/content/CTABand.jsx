import React from "react";

export function CTABand({ number, label, headline, actions, surface = "dark", style }) {
  const dark = surface === "dark";
  return (
    <section style={{
      background: dark ? "var(--graphite)" : "var(--surface)",
      color: dark ? "var(--on-dark)" : "var(--ink)",
      borderTop: dark ? "none" : "var(--border-width) solid var(--line)",
      ...style
    }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gap: "var(--space-8)" }}>
        {label ? (
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.1em", color: dark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>
              {number ? number + "  /  " : ""}{label}
            </span>
            <span style={{ flex: 1, height: 1, background: dark ? "var(--border-dark)" : "var(--line)" }} />
          </div>
        ) : null}
        <h2 style={{ margin: 0, fontSize: "var(--fs-h2)", lineHeight: "var(--lh-h2)", letterSpacing: "var(--tracking-heading)", fontWeight: 650, maxWidth: "26ch" }}>{headline}</h2>
        {actions ? <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>{actions}</div> : null}
      </div>
    </section>
  );
}
