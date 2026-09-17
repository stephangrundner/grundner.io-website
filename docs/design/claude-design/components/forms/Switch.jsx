import React from "react";

export function Switch({ label, checked = false, onChange, onDark = false, id, style, ...rest }) {
  return (
    <label htmlFor={id} style={{ display: "inline-flex", gap: "var(--space-3)", alignItems: "center", minHeight: "var(--touch-min)", cursor: "pointer", fontSize: "0.9375rem", color: onDark ? "var(--on-dark)" : "var(--ink)", ...style }}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 44,
          height: 24,
          padding: 2,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: checked ? "flex-end" : "flex-start",
          background: checked ? "var(--accent)" : "transparent",
          border: "var(--border-width) solid " + (checked ? "var(--accent)" : "var(--line-strong)"),
          borderRadius: "var(--radius-0)",
          cursor: "pointer",
          transition: "background var(--dur-micro) var(--ease-standard)"
        }}
        {...rest}
      >
        <span style={{ width: 16, height: 16, background: checked ? "var(--on-accent)" : "var(--line-strong)", display: "block" }} />
      </button>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
