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

export function Input({ onDark = false, invalid = false, type = "text", style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <input
      type={type}
      aria-invalid={invalid || undefined}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...control(onDark, invalid, focused), ...style }}
      {...rest}
    />
  );
}
