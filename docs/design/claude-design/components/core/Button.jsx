import React from "react";

const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-semibold)",
  letterSpacing: "0.01em",
  borderRadius: "var(--radius-0)",
  borderWidth: "var(--border-width)",
  borderStyle: "solid",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background var(--dur-micro) var(--ease-standard), color var(--dur-micro) var(--ease-standard), border-color var(--dur-micro) var(--ease-standard)"
};

const sizes = {
  md: { fontSize: "0.96875rem", padding: "0 var(--space-6)", minHeight: "var(--control-height)" },
  sm: { fontSize: "var(--fs-label)", padding: "0 var(--space-4)", minHeight: "var(--touch-min)" },
  lg: { fontSize: "1.0625rem", padding: "0 var(--space-8)", minHeight: "56px" }
};

function palette(variant, onDark, hovered) {
  if (variant === "primary") {
    return {
      background: hovered ? "var(--accent-hover)" : "var(--accent)",
      borderColor: hovered ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--on-accent)"
    };
  }
  if (variant === "secondary") {
    const ink = onDark ? "var(--on-dark)" : "var(--ink)";
    const flip = onDark ? "var(--graphite)" : "var(--canvas)";
    return {
      background: hovered ? ink : "transparent",
      borderColor: ink,
      color: hovered ? flip : ink
    };
  }
  return {
    background: "transparent",
    borderColor: "transparent",
    color: hovered ? "var(--accent-hover)" : (onDark ? "var(--on-dark)" : "var(--ink)"),
    padding: "0 var(--space-2)"
  };
}

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  disabled = false,
  href,
  type = "button",
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const disabledStyle = {
    background: onDark ? "var(--graphite-elevated)" : "var(--surface-muted)",
    borderColor: onDark ? "var(--graphite-line)" : "var(--line)",
    color: "var(--line-strong)",
    cursor: "not-allowed"
  };
  const composed = {
    ...base,
    ...sizes[size],
    ...(disabled ? disabledStyle : palette(variant, onDark, hovered)),
    ...(fullWidth ? { width: "100%" } : null),
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  };
  if (href && !disabled) {
    return <a href={href} style={composed} {...handlers} {...rest}>{children}</a>;
  }
  return (
    <button type={type} disabled={disabled} style={composed} {...handlers} {...rest}>
      {children}
    </button>
  );
}
