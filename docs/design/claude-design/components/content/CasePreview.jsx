import React from "react";
import { ArrowLink } from "../core/ArrowLink.jsx";
import { ImagePlaceholder } from "./ImagePlaceholder.jsx";

export function CasePreview({ meta, title, problem, result, href, linkLabel = "Case Study lesen", verify = false, variant = "large", imageCaption = "PROJEKTARTEFAKT · freigegebener Screenshot oder Systemmodell", style }) {
  const compact = variant === "compact";
  return (
    <article style={{
      display: compact ? "flex" : "grid",
      flexDirection: compact ? "column" : undefined,
      gridTemplateColumns: compact ? undefined : "repeat(auto-fit,minmax(min(100%,320px),1fr))",
      gap: compact ? "var(--space-4)" : "clamp(24px,3vw,56px)",
      border: "var(--border-width) solid var(--line)",
      background: "var(--canvas)",
      padding: compact ? "clamp(22px,2.4vw,32px)" : "clamp(24px,3vw,48px)",
      minHeight: compact ? 260 : undefined,
      ...style
    }}>
      <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {meta ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)" }}>{meta.toUpperCase()}</span> : null}
        <h3 style={{
          margin: 0,
          fontSize: compact ? "1.3125rem" : "clamp(1.5rem,2.6vw,2.5rem)",
          lineHeight: compact ? 1.15 : 1.06,
          letterSpacing: "var(--tracking-heading)",
          fontWeight: compact ? 600 : 650
        }}>
          {title}
          {verify ? <span style={{ fontFamily: "var(--font-mono)", fontSize: compact ? "0.6em" : "0.35em", letterSpacing: "var(--tracking-mono)", color: "var(--accent)", verticalAlign: "super" }}> [VERIFY]</span> : null}
        </h3>
        {problem ? (
          <p style={{ margin: 0, fontSize: "0.96875rem", lineHeight: 1.55 }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)", marginBottom: 2 }}>PROBLEM</span>
            {problem}
          </p>
        ) : null}
        {result ? (
          <p style={{ margin: 0, fontSize: "0.96875rem", lineHeight: 1.55 }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)", marginBottom: 2 }}>ERGEBNIS</span>
            {result}
          </p>
        ) : null}
        {href ? <ArrowLink href={href} style={{ marginTop: "auto", alignSelf: "flex-start" }}>{linkLabel}</ArrowLink> : null}
      </div>
      {!compact ? <ImagePlaceholder caption={imageCaption} minHeight={240} /> : null}
    </article>
  );
}
