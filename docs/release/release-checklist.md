# Release-Checkliste

Vor dem ersten Production Release und vor größeren Releases.

## Content

- [ ] alle `[VERIFY]`, `[TODO]`, `[PLACEHOLDER]` entfernt
- [ ] Kunden- und Projektnennungen freigegeben
- [ ] Kennzahlen bestätigt
- [ ] Porträt und Bilder freigegeben
- [ ] Projektprofil und PDF aktuell
- [ ] Kontaktinformationen korrekt
- [ ] Impressum und Datenschutz geprüft, inkl. Analytics und Formularzustellung

## Funktion

- [ ] Navigation
- [ ] alle CTAs
- [ ] Formularzustellung
- [ ] PDF-Download
- [ ] RSS
- [ ] Sitemap
- [ ] 404
- [ ] externe Links
- [ ] Einwilligung: ohne Zustimmung keine einwilligungspflichtigen Skripte
- [ ] Analytics-Events kommen beim Anbieter an
- [ ] Fehlerzustand eingebundener externer Anwendungen

## Qualität

- [ ] responsive Prüfung 390, 768, 1024, 1440 px
- [ ] Safari, Chrome, Firefox, Edge
- [ ] iOS Safari und Android Chrome
- [ ] Tastaturprüfung
- [ ] Screenreader-Smoke-Test
- [ ] Lighthouse
- [ ] keine Layout Shifts

## Betrieb

- [ ] `grundner.io` mit HTTPS erreichbar, „Enforce HTTPS“ aktiv
- [ ] `www.grundner.io` leitet auf `grundner.io` weiter
- [ ] Cloudflare-Proxy für beide Einträge aus
- [ ] Repository enthält keine sensiblen Informationen (ADR-0003)
- [ ] Build-Konfiguration für Production gesetzt
- [ ] Monitoring der Erreichbarkeit
- [ ] Rollbackweg getestet
- [ ] manueller Veröffentlichungsweg getestet
