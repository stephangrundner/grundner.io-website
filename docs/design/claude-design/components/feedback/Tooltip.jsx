import React from "react";

export function Tooltip({ content, placement = "top", children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: 0 },
    bottom: { top: "calc(100% + 8px)", left: 0 },
    right: { left: "calc(100% + 8px)", top: 0 }
  }[placement];
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show ? (
        <span role="tooltip" style={{
          position: "absolute",
          ...pos,
          zIndex: 40,
          whiteSpace: "nowrap",
          background: "var(--graphite)",
          color: "var(--on-dark)",
          border: "var(--border-width) solid var(--graphite-line)",
          padding: "6px 9px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fs-mono)",
          letterSpacing: "0.04em"
        }}>{content}</span>
      ) : null}
    </span>
  );
}
