import React from "react";
import { Button } from "../core/Button.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Drawer } from "./Drawer.jsx";

export function Navbar({
  wordmark = "STEPHAN GRUNDNER",
  descriptor,
  items = [],
  activeHref,
  utilityItem,
  cta,
  breakpoint = 1024,
  onDark = false,
  style
}) {
  const [wide, setWide] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const check = () => {
      const isWide = window.innerWidth >= breakpoint;
      setWide(isWide);
      if (isWide) setOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  const ink = onDark ? "var(--on-dark)" : "var(--ink)";

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: onDark ? "var(--graphite)" : "rgba(245,242,235,0.94)",
      backdropFilter: "blur(6px)",
      borderBottom: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
      ...style
    }}>
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--gutter)", minHeight: "var(--header-height)", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        <a href="/" style={{ display: "flex", flexDirection: "column", gap: 2, flex: "0 0 auto", color: ink }}>
          <span style={{ fontSize: "0.9375rem", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--tracking-wordmark)", textTransform: "uppercase" }}>{wordmark}</span>
          {descriptor ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "0.06em", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{descriptor}</span> : null}
        </a>

        {wide ? (
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)", marginLeft: "auto", minWidth: 0 }}>
            {items.map(it => (
              <a key={it.href} href={it.href} aria-current={activeHref === it.href ? "page" : undefined} style={{
                fontSize: "0.90625rem",
                fontWeight: "var(--fw-medium)",
                whiteSpace: "nowrap",
                color: ink,
                borderBottom: activeHref === it.href ? "var(--accent-rule)" : "2px solid transparent",
                paddingBottom: 3
              }}>{it.label}</a>
            ))}
            {utilityItem ? (
              <>
                <span style={{ width: 1, height: 20, background: onDark ? "var(--border-dark)" : "var(--line)", flex: "0 0 auto" }} />
                <a href={utilityItem.href} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "0.06em", color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)", whiteSpace: "nowrap" }}>{utilityItem.label}</a>
              </>
            ) : null}
            {cta ? <Button variant="primary" size="sm" href={cta.href} onDark={onDark}>{cta.label}</Button> : null}
          </nav>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginLeft: "auto", minWidth: 0 }}>
            {cta ? <Button variant="primary" size="sm" href={cta.href} onDark={onDark}>{cta.label}</Button> : null}
            <IconButton label={open ? "Navigation schließen" : "Navigation öffnen"} onDark={onDark} onClick={() => setOpen(o => !o)}>
              <span style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ width: 18, height: 1.5, background: "currentColor", display: "block" }} />
                <span style={{ width: 18, height: 1.5, background: "currentColor", display: "block" }} />
                <span style={{ width: 18, height: 1.5, background: "currentColor", display: "block" }} />
              </span>
            </IconButton>
          </div>
        )}
      </div>

      {!wide && open ? (
        <Drawer items={items} utilityItem={utilityItem} activeHref={activeHref} onNavigate={() => setOpen(false)} onDark={onDark} />
      ) : null}
    </header>
  );
}
