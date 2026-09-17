import React from "react";

export function ArrowLink({ href = "#", onDark = false, direction = "right", underline = true, children, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const glyph = { right: "→", down: "↓", left: "←" }[direction] || "→";
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontSize: "0.9375rem",
        fontWeight: "var(--fw-semibold)",
        color: hovered ? "var(--accent-hover)" : ink,
        borderBottom: underline ? "1px solid " + (hovered ? "var(--accent-hover)" : (onDark ? "var(--ink-muted)" : ink)) : "none",
        paddingBottom: underline ? "6px" : 0,
        textDecoration: "none",
        transition: "color var(--dur-micro) var(--ease-standard)",
        ...style
      }}
      {...rest}
    >
      {children}
      <span style={{ fontFamily: "var(--font-mono)", transform: hovered ? "translateX(3px)" : "none", transition: "transform var(--dur-micro) var(--ease-standard)" }}>{glyph}</span>
    </a>
  );
}
