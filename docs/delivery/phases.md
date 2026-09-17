# Umsetzungsphasen

Status: Vorschlag — an statisches Hosting angepasst, Bestätigung ausstehend.

Grundsatz: Jeder Schritt liefert einen vertikalen, prüfbaren Zustand. Keine
wochenlange Foundation ohne sichtbares Ergebnis.

## Phase 0 — Projektinitialisierung

Voraussetzung: Phasen bestätigt. Remote `origin` ist eingerichtet.

- Astro-Projekt, TypeScript strict, pnpm
- Lint, Format, Unit- und E2E-Test-Grundlage
- validierte Build-Konfiguration
- Pipeline: Qualitäts-Gates und Veröffentlichung auf GitHub Pages
- GitHub Pages für dieses Repository aktivieren, Custom Domain `grundner.io`

Abnahme: App startet lokal, Build läuft, Tests laufen, ein Push auf `main`
veröffentlicht eine Platzhalterseite.

## Phase 1 — Design Foundation

- Fonts, Tokens, globale Styles
- Container, Grid, Section
- Button, TextLink
- Header, Navigation, Footer
- technisches Raster

Abnahme: Desktop und Mobile, Focus States, Kontraste geprüft, keine generische
Standard-UI sichtbar.

## Phase 2 — Startseite

- vollständige Startseite mit echter Struktur
- Platzhalter nur klar markiert
- responsive Umsetzung, Basisanimationen, Metadata

Abnahme: visuell nahe am freigegebenen Design, CTAs funktionieren, keine Layout
Shifts, Mobile eigenständig gelöst.

## Phase 3 — Content Layer

- Inhaltsschemas und Validierung inklusive Production Guard
- Projekte und Insights, Related Content
- RSS, Sitemap

Abnahme: Drafts unsichtbar, ungültiger Content bricht den Build, Detailseiten
statisch generiert.

## Phase 4 — Unterseiten

Leistungen, Projekte, Insights, Profil, Projektprofil mit Print, Kontakt,
rechtliche Seiten.

## Phase 5 — Kontakt, Conversion und Messung

- Formularzustellung über Adapter, Mock für Tests
- Spamschutz, Erfolgs- und Fehlerzustände
- Tracking-Schnittstelle, Einwilligungslösung, Anbieter-Adapter
- datenschutzkonforme Umsetzung

## Phase 6 — Hardening

Accessibility-Audit, Performance-Audit, CSP soweit möglich, Broken-Link-Check,
visuelle Baselines, Content-Review, Browser- und Geräteprüfung.

## Phase 7 — Go-Live

Domain, Formularzustellung produktiv, Analytics produktiv, Monitoring,
[Release-Checkliste](../release/release-checklist.md), Rollbacktest.

## Später

- erste externe Anwendung (ADR-0004)
- Generierung von Social Assets
- automatische PDF-Generierung des Projektprofils
