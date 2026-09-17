import React from "react";

export function RadioGroup({ legend, name, options = [], value, onChange, onDark = false, style, ...rest }) {
  return (
    <fieldset style={{ border: "none", margin: 0, padding: 0, display: "grid", gap: "var(--space-2)", ...style }} {...rest}>
      {legend ? <legend style={{ padding: 0, marginBottom: "var(--space-2)", fontSize: "var(--fs-label)", fontWeight: "var(--fw-semibold)", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{legend}</legend> : null}
      {options.map(o => {
        const v = typeof o === "string" ? o : o.value;
        const l = typeof o === "string" ? o : o.label;
        return (
          <label key={v} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", minHeight: "var(--touch-min)", fontSize: "0.9375rem", cursor: "pointer", color: onDark ? "var(--on-dark)" : "var(--ink)" }}>
            <input type="radio" name={name} value={v} checked={value === v} onChange={() => onChange && onChange(v)} style={{ width: 18, height: 18, accentColor: "var(--accent)" }} />
            <span>{l}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
