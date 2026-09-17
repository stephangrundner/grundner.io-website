import React from "react";

export function Card({ surface = "raised", interactive = false, padding = "clamp(22px,2.5vw,36px)", children, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const dark = surface === "dark";
  return (
    <article
      onMouseEnter={interactive ? () => setHovered(true) : undefined}
      onMouseLeave={interactive ? () => setHovered(false) : undefined}
      style={{
        background: dark ? "var(--graphite-elevated)" : (hovered ? "var(--canvas)" : "var(--surface)"),
        border: "var(--border-width) solid " + (dark ? "var(--graphite-line)" : (hovered ? "var(--line-strong)" : "var(--line)")),
        borderRadius: "var(--radius-1)",
        color: dark ? "var(--on-dark)" : "var(--ink)",
        padding,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        minWidth: 0,
        transition: "background var(--dur-standard) var(--ease-standard), border-color var(--dur-standard) var(--ease-standard)",
        ...style
      }}
      {...rest}
    >
      {children}
    </article>
  );
}
