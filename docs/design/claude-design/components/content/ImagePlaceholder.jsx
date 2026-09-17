import React from "react";

export function ImagePlaceholder({ caption, aspectRatio, minHeight, corners = false, figure, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", minWidth: 0 }}>
      <div style={{
        position: "relative",
        aspectRatio: aspectRatio,
        minHeight: minHeight,
        background: "var(--surface-muted)",
        backgroundImage: "var(--hatch)",
        border: "var(--border-width) solid var(--line)",
        display: "flex",
        alignItems: "flex-end",
        padding: "var(--space-4)",
        ...style
      }}>
        {corners ? (
          <>
            <span aria-hidden="true" style={{ position: "absolute", top: 16, left: 16, width: 18, height: 18, borderLeft: "1px solid var(--line-strong)", borderTop: "1px solid var(--line-strong)" }} />
            <span aria-hidden="true" style={{ position: "absolute", bottom: 16, right: 16, width: 18, height: 18, borderRight: "1px solid var(--line-strong)", borderBottom: "1px solid var(--line-strong)" }} />
          </>
        ) : null}
        {caption ? (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.06em", color: "var(--text-meta)" }}>{caption}</span>
        ) : null}
      </div>
      {figure ? (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "0.06em", color: "var(--text-meta)" }}>{figure}</span>
      ) : null}
    </div>
  );
}
