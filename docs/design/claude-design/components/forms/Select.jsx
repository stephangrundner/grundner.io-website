import React from "react";

const control = (onDark, invalid, focused) => ({
  width: "100%",
  minHeight: "var(--control-height)",
  padding: "13px 14px",
  background: onDark ? "var(--graphite)" : "#FFFFFF",
  color: onDark ? "var(--on-dark)" : "var(--ink)",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9375rem",
  border: "var(--border-width) solid " + (invalid ? "var(--accent)" : focused ? (onDark ? "var(--on-dark)" : "var(--ink)") : (onDark ? "var(--ink-muted)" : "var(--line-strong)")),
  borderRadius: "var(--radius-0)",
  outline: "none",
  transition: "border-color var(--dur-micro) var(--ease-standard)"
});

export function Select({ onDark = false, invalid = false, options = [], placeholder, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ position: "relative", minWidth: 0 }}>
      <select
        aria-invalid={invalid || undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...control(onDark, invalid, focused), appearance: "none", paddingRight: "40px", ...style }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map(o => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span aria-hidden="true" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-meta)" }}>▾</span>
    </div>
  );
}
