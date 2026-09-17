import React from "react";

const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function toISO(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function fromISO(s) {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function formatDE(s) {
  const d = fromISO(s);
  if (!d) return "";
  return String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + d.getFullYear();
}
function grid(year, month) {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let i = 1; i <= days; i++) cells.push(new Date(year, month, i));
  return cells;
}

export function DatePicker({ value, onChange, label = "Datum", id = "date", onDark = false, minDate, style }) {
  const [open, setOpen] = React.useState(false);
  const selected = fromISO(value);
  const [cursor, setCursor] = React.useState(selected || new Date());
  const min = fromISO(minDate);
  const cells = grid(cursor.getFullYear(), cursor.getMonth());
  const ink = onDark ? "var(--on-dark)" : "var(--ink)";

  const step = n => {
    const d = new Date(cursor);
    d.setMonth(d.getMonth() + n);
    setCursor(d);
  };

  return (
    <div style={{ display: "grid", gap: "var(--space-2)", minWidth: 0, position: "relative", ...style }}>
      <label htmlFor={id} style={{ fontSize: "var(--fs-label)", fontWeight: "var(--fw-semibold)", color: ink }}>{label}</label>
      <button
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{
          minHeight: "var(--control-height)",
          padding: "0 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          background: onDark ? "var(--graphite)" : "#FFFFFF",
          color: value ? ink : "var(--text-meta)",
          border: "var(--border-width) solid " + (open ? ink : "var(--line-strong)"),
          borderRadius: "var(--radius-0)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9375rem",
          cursor: "pointer"
        }}
      >
        <span>{value ? formatDE(value) : "TT.MM.JJJJ"}</span>
        <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-meta)" }}>KAL</span>
      </button>

      {open ? (
        <div role="dialog" aria-label={label} style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          left: 0,
          zIndex: 30,
          width: 288,
          background: onDark ? "var(--graphite-elevated)" : "var(--surface)",
          border: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line-strong)"),
          padding: "var(--space-4)",
          display: "grid",
          gap: "var(--space-3)"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button type="button" aria-label="Vorheriger Monat" onClick={() => step(-1)} style={{ width: 32, height: 32, background: "transparent", border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--line)"), color: ink, cursor: "pointer", fontFamily: "var(--font-mono)" }}>←</button>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono)", letterSpacing: "var(--tracking-mono)", textTransform: "uppercase", color: ink }}>
              {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
            </span>
            <button type="button" aria-label="Nächster Monat" onClick={() => step(1)} style={{ width: 32, height: 32, background: "transparent", border: "1px solid " + (onDark ? "var(--border-dark)" : "var(--line)"), color: ink, cursor: "pointer", fontFamily: "var(--font-mono)" }}>→</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
            {DAYS.map(d => (
              <span key={d} style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "0.04em", color: "var(--text-meta)", padding: "4px 0" }}>{d}</span>
            ))}
            {cells.map((d, i) => {
              if (!d) return <span key={"e" + i} />;
              const iso = toISO(d);
              const isSelected = value === iso;
              const disabled = min && d < min;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={disabled}
                  aria-pressed={isSelected}
                  onClick={() => { onChange && onChange(iso); setOpen(false); }}
                  style={{
                    height: 34,
                    background: isSelected ? "var(--accent)" : "transparent",
                    color: disabled ? "var(--line-strong)" : isSelected ? "var(--on-accent)" : ink,
                    border: "1px solid " + (isSelected ? "var(--accent)" : "transparent"),
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    cursor: disabled ? "not-allowed" : "pointer"
                  }}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
