import React from "react";
import { Card } from "../core/Card.jsx";
import { ArrowLink } from "../core/ArrowLink.jsx";

export function ServiceCard({ number, title, description, href, linkLabel = "Leistung ansehen", surface = "raised", style }) {
  const dark = surface === "dark";
  return (
    <Card surface={surface} interactive style={{ minHeight: 300, ...style }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.1em", color: "var(--accent)" }}>{number}</span>
      <h3 style={{ margin: 0, fontSize: "var(--fs-h3)", lineHeight: "var(--lh-h3)", letterSpacing: "-0.01em", fontWeight: "var(--fw-semibold)" }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.55 }}>{description}</p>
      {href ? (
        <ArrowLink href={href} onDark={dark} underline={false} style={{ marginTop: "auto", borderTop: "var(--border-width) solid " + (dark ? "var(--border-dark)" : "var(--line)"), paddingTop: "var(--space-4)", width: "100%" }}>
          {linkLabel}
        </ArrowLink>
      ) : null}
    </Card>
  );
}
