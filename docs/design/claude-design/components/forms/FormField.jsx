import React from "react";

export function FormField({ label, hint, error, required = false, htmlFor, onDark = false, children, style, ...rest }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0, ...style }} {...rest}>
      <label htmlFor={htmlFor} style={{ fontSize: "var(--fs-label)", fontWeight: "var(--fw-semibold)", letterSpacing: "0.02em", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>
        {label}{required ? <span aria-hidden="true" style={{ color: "var(--accent)" }}> *</span> : null}
      </label>
      {children}
      {error ? (
        <span role="alert" style={{ fontSize: "var(--fs-label)", lineHeight: 1.45, color: onDark ? "var(--accent)" : "var(--danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: "var(--fs-label)", lineHeight: 1.45, color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
