import React from "react";

function slots(start, end, stepMinutes) {
  const out = [];
  for (let m = start * 60; m <= end * 60; m += stepMinutes) {
    out.push(String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"));
  }
  return out;
}

export function TimePicker({ value, onChange, label = "Uhrzeit", id = "time", startHour = 8, endHour = 18, stepMinutes = 30, onDark = false, style }) {
  const options = slots(startHour, endHour, stepMinutes);
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0, ...style }}>
      <label htmlFor={id} style={{ fontSize: "var(--fs-label)", fontWeight: "var(--fw-semibold)", color: ink }}>{label}</label>
      <div id={id} role="radiogroup" aria-label={label} style={{ display: "flex", flexWrap: "wrap", gap: 1, background: onDark ? "var(--border-dark)" : "var(--line)", border: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)") }}>
        {options.map(t => {
          const active = value === t;
          return (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange && onChange(t)}
              style={{
                minWidth: 68,
                minHeight: "var(--touch-min)",
                flex: "1 0 auto",
                background: active ? "var(--accent)" : (onDark ? "var(--graphite-elevated)" : "var(--surface)"),
                color: active ? "var(--on-accent)" : ink,
                border: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.04em",
                cursor: "pointer",
                transition: "background var(--dur-micro) var(--ease-standard)"
              }}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
