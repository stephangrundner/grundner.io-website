import React from "react";
import { Card } from "../core/Card.jsx";

export function InsightCard({ format, pillar, title, summary, author = "Stephan Grundner", readingTime, href, verify = false, surface = "raised", style }) {
  const dark = surface === "dark";
  const meta = [format, pillar].filter(Boolean).join(" · ");
  return (
    <Card surface={surface} interactive style={{ minHeight: 280, ...style }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--accent)" }}>{meta.toUpperCase()}</span>
      <h3 style={{ margin: 0, fontSize: "clamp(1.25rem,1.7vw,1.625rem)", lineHeight: 1.15, letterSpacing: "-0.015em", fontWeight: "var(--fw-semibold)" }}>
        {href ? <a href={href} style={{ color: "inherit" }}>{title}</a> : title}
        {verify ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6em", letterSpacing: "var(--tracking-mono)", color: "var(--accent)" }}> [VERIFY]</span> : null}
      </h3>
      {summary ? <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.55 }}>{summary}</p> : null}
      <span style={{ marginTop: "auto", borderTop: "var(--border-width) solid " + (dark ? "var(--border-dark)" : "var(--line)"), paddingTop: "var(--space-4)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "0.06em", color: dark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>
        {author.toUpperCase()}{readingTime ? " · " + readingTime.toUpperCase() : ""}
      </span>
    </Card>
  );
}
