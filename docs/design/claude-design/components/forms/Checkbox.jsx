import React from "react";

export function Checkbox({ label, checked, onChange, onDark = false, required = false, id, style, ...rest }) {
  return (
    <label htmlFor={id} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "0.875rem", lineHeight: 1.5, color: onDark ? "var(--on-dark)" : "var(--ink)", minHeight: "var(--touch-min)", cursor: "pointer", ...style }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--accent)", flex: "0 0 auto" }}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}
