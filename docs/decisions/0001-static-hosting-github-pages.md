# 0001 — Statisches Hosting auf GitHub Pages

Status: accepted
Datum: 2026-09-17

## Kontext

Die Website ist ein zentrales Business-Werkzeug und soll für den Betreiber so
wartungsarm wie möglich sein. Sie darf nicht von Bezahlplänen abhängen.

Die Implementierungsspezifikation 0.1 hatte plattformneutralen Betrieb als
Next.js-Anwendung im Container vorgesehen (Standalone-Output, Docker,
Health-Endpunkt, serverseitige Endpunkte) und den Hostinganbieter offen
gelassen.

## Entscheidung

Die Website wird auf GitHub Pages gehostet. Ein Push auf `main` löst die
CI/CD-Pipeline aus und veröffentlicht die Website.

Entscheidung durch Stephan Grundner.

## Konsequenzen

Die Website ist eine rein statische Website. Folgende Inhalte der
Implementierungsspezifikation 0.1 entfallen:

- Container-Betrieb, Docker-Build, Standalone-Output
- Health-Endpunkt
- serverseitige Endpunkte, z. B. für das Kontaktformular
- serverseitiges Rate Limiting
- Laufzeit-Konfiguration über Environment Variables (nur Build-Zeit)
- selbst gesetzte HTTP-Header (Security Headers, CSP nur eingeschränkt per
  `<meta>`)
- serverseitige Weiterleitungen (nur clientseitig möglich)
- serverseitige Bildoptimierung zur Laufzeit (nur zur Build-Zeit)

Daraus entstehende Anforderungen:

- Das Kontaktformular braucht einen externen Empfänger (Offen).
- Dynamische Funktionen laufen als externe Anwendungen
  ([ADR-0004](0004-external-application-integration.md)).
- Der Tech-Stack muss statischen Export als Primärfall unterstützen
  ([ADR-0002](0002-tech-stack.md)).
- Im kostenlosen Plan erfordert GitHub Pages ein öffentliches Repository
  ([ADR-0003](0003-public-repository.md)).
- GitHub Pages unterliegt Nutzungsgrenzen (u. a. Seitengröße, Bandbreite,
  Builds), die für eine Expertenwebsite voraussichtlich ausreichen. Aktuelle
  Grenzen vor dem ersten Release prüfen.

Betroffene Dokumente: [Betrieb](../requirements/operations.md),
[Qualität](../requirements/quality.md), [Seiten](../ui/pages.md).
