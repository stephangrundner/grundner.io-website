import React from "react";

const tones = {
  neutral: { color: "var(--text-meta)", borderColor: "var(--border-default)" },
  accent: { color: "var(--accent-hover)", borderColor: "var(--accent)" },
  verify: { color: "var(--accent)", borderColor: "transparent" }
};

export function Badge({ tone = "neutral", bordered = true, children, style, ...rest }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-mono-sm)",
        letterSpacing: "var(--tracking-mono)",
        textTransform: "uppercase",
        padding: bordered ? "5px 8px" : 0,
        border: bordered ? "var(--border-width) solid " + t.borderColor : "none",
        color: t.color,
        borderRadius: "var(--radius-0)",
        ...style
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
