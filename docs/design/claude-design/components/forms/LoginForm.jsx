import React from "react";
import { Button } from "../core/Button.jsx";
import { FormField } from "./FormField.jsx";
import { Input } from "./Input.jsx";
import { Checkbox } from "./Checkbox.jsx";

export function LoginForm({
  title = "Anmelden",
  subtitle,
  onSubmit,
  error,
  loading = false,
  submitLabel = "Anmelden",
  footer,
  onDark = false,
  style
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);

  return (
    <form
      onSubmit={e => { e.preventDefault(); onSubmit && onSubmit({ email, password, remember }); }}
      style={{
        width: "100%",
        maxWidth: 420,
        background: onDark ? "var(--graphite-elevated)" : "var(--surface)",
        border: "var(--border-width) solid " + (onDark ? "var(--border-dark)" : "var(--line)"),
        padding: "clamp(24px,3vw,40px)",
        display: "grid",
        gap: "var(--space-4)",
        ...style
      }}
    >
      <div style={{ display: "grid", gap: "var(--space-2)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-mono-sm)", letterSpacing: "var(--tracking-mono)", color: "var(--text-meta)" }}>ZUGANG</span>
        <h2 style={{ margin: 0, fontSize: "1.625rem", lineHeight: 1.1, letterSpacing: "var(--tracking-heading)", fontWeight: 650, color: onDark ? "var(--on-dark)" : "var(--ink)" }}>{title}</h2>
        {subtitle ? <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.55, color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{subtitle}</p> : null}
      </div>

      {error ? (
        <p role="alert" style={{ margin: 0, padding: "12px 14px", border: "var(--border-width) solid var(--accent)", fontSize: "0.875rem", lineHeight: 1.5, color: onDark ? "var(--on-dark)" : "var(--danger)" }}>{error}</p>
      ) : null}

      <FormField label="E-Mail" htmlFor="login-email" required onDark={onDark}>
        <Input id="login-email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} onDark={onDark} invalid={!!error} />
      </FormField>

      <FormField label="Passwort" htmlFor="login-password" required onDark={onDark}>
        <Input id="login-password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} onDark={onDark} invalid={!!error} />
      </FormField>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "center", justifyContent: "space-between" }}>
        <Checkbox id="login-remember" label="Angemeldet bleiben" checked={remember} onChange={e => setRemember(e.target.checked)} onDark={onDark} />
        <a href="#reset" style={{ fontSize: "0.875rem", fontWeight: "var(--fw-semibold)", color: onDark ? "var(--on-dark)" : "var(--ink)", borderBottom: "1px solid var(--border-active)", paddingBottom: 2 }}>Passwort vergessen?</a>
      </div>

      <Button type="submit" variant="primary" fullWidth disabled={loading}>
        {loading ? "Wird geprüft …" : submitLabel}
      </Button>

      {footer ? <div style={{ fontSize: "0.875rem", lineHeight: 1.55, color: onDark ? "var(--text-meta-on-dark)" : "var(--text-meta)" }}>{footer}</div> : null}
    </form>
  );
}
