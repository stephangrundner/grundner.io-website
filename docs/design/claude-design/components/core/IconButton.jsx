import React from "react";

export function IconButton({ label, onDark = false, size = 44, children, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? (onDark ? "var(--graphite-elevated)" : "var(--surface-muted)") : "transparent",
        border: "var(--border-width) solid " + (onDark ? "var(--graphite-line)" : "var(--line)"),
        borderRadius: "var(--radius-0)",
        color: ink,
        cursor: "pointer",
        transition: "background var(--dur-micro) var(--ease-standard)",
        ...style
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
