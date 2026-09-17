# Snapshot aus Claude Design

Quelle: https://claude.ai/design/p/22cbd55e-2f9d-40ab-9a5c-0998971b3b21
Projekt: „Stephan Grundner Design System"
Importiert: 2026-09-17

## Zweck

Bis auf die unten genannten Schwärzungen unveränderte Kopie der textuellen
Bestandteile des Design Systems, damit Menschen
und Agenten ohne Zugang zu Claude Design damit arbeiten können.

Die ausgewertete, verbindliche Fassung steht in
[../design-system.md](../design-system.md). Dieser Ordner ist Referenz, nicht
Implementierung: Die Komponenten sind React-Prototypen mit Inline-Styles und
JavaScript-Hover-Zuständen für die Claude-Design-Laufzeit. Sie zeigen Maße,
Zustände und Verwendung, werden aber nicht als Produktionscode übernommen.

## Schwärzungen

Das Repository ist öffentlich (ADR-0003). Unbestätigte Aussagen über
Projektergebnisse sind im Snapshot durch `[REDACTED]` ersetzt bzw. entfernt:

- `readme.md` (Beispielsatz unter „Passend“, Punkt unter „Offene Punkte“)
- `components/core/ProofMetric.prompt.md` (Beispielwerte)
- `components/content/CasePreview.prompt.md` (Beispieltitel)

Beim erneuten Import dieselben Stellen wieder schwärzen und den Import vorab
gegen `.claude/project/confidentiality.md` prüfen.

## Enthalten

- `readme.md` — README des Design Systems
- `styles.css`, `tokens/*.css` — Tokens
- `components/**/*.jsx` — Komponenten-Prototypen
- `components/**/*.prompt.md` — Verwendungsregeln je Komponente
- `ui_kits/*/README.md` — Beschreibung der UI-Kits

## Nur in Claude Design

Visuelle Referenzen, die nicht übernommen wurden:

- `Homepage.dc.html`, `Templates.dc.html`, `Design System.dc.html`
- `ui_kits/website/index.html`, `ui_kits/webapp/index.html`
- `templates/website-seite/`, `templates/webapp-workspace/`
- `guidelines/*.card.html`, Thumbnails, `_ds_bundle.js`, `*.d.ts`
- `uploads/Claude-Design-System-0.1 (2).md` — das Design-Briefing; sein Inhalt
  ist in die Dokumente unter `docs/` eingearbeitet

## Aktualisierung

Visuelle Änderungen entstehen in Claude Design. Danach:

1. Snapshot aus Claude Design neu importieren (Dateien hier ersetzen, Datum oben
   anpassen).
2. Unterschiede in [../design-system.md](../design-system.md) und den betroffenen
   Dokumenten nachziehen.
3. Nach dem Bootstrap: Tokens und Komponenten im Code angleichen.
