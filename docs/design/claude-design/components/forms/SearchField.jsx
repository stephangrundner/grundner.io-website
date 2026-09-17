import React from "react";

export function SearchField({ value, onChange, onSubmit, placeholder = "Suchen", onDark = false, shortcutHint, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <form
      role="search"
      onSubmit={e => { e.preventDefault(); onSubmit && onSubmit(value); }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        minHeight: "var(--control-height)",
        padding: "0 12px",
        background: onDark ? "var(--graphite)" : "#FFFFFF",
        border: "var(--border-width) solid " + (focused ? (onDark ? "var(--on-dark)" : "var(--ink)") : (onDark ? "var(--ink-muted)" : "var(--line-strong)")),
        borderRadius: "var(--radius-0)",
        ...style
      }}
    >
      <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "var(--text-meta)" }}>⌕</span>
      <input
        type="search"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        aria-label={placeholder}
        style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", color: onDark ? "var(--on-dark)" : "var(--ink)", fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
        {...rest}
      />
      {shortcutHint ? (
        <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)", border: "1px solid var(--border-default)", padding: "3px 6px" }}>{shortcutHint}</span>
      ) : null}
    </form>
  );
}
