# 0004 — Einbindung externer Anwendungen

Status: proposed
Datum: 2026-09-17

## Kontext

Dynamische Teile der Website laufen später als Java-Anwendungen auf entfernten
Maschinen. Sie müssen nahtlos wirken; fällt eine aus, bleibt die Website
erreichbar und zeigt eine gestaltete Fehlerseite
([Externe Anwendungen](../requirements/external-applications.md)).

GitHub Pages liefert nur statische Dateien aus und kann nicht an andere Server
weiterleiten ([ADR-0001](0001-static-hosting-github-pages.md)).

## Optionen

### A — Statische Hülle mit Client-Anbindung an eine API

- Die Website enthält für jede Anwendung eine normale statische Seite mit
  Header, Footer und Layout.
- Eine interaktive Komponente in dieser Seite spricht die API der externen
  Anwendung an, z. B. unter `api.<domain>`.
- Ist die API nicht erreichbar oder antwortet nicht rechtzeitig, zeigt die
  Komponente den gestalteten Fehlerzustand.
- Vorteile: Die Adresse bleibt auf der Website-Domain. Ausfallsicherheit ist
  eingebaut. Keine zusätzliche Infrastruktur, kostenlos. Die Java-Anwendung
  liefert nur Daten, keine Gestaltung — kein zweites Branding.
- Nachteile: Die Oberfläche der Anwendung wird im Website-Projekt gebaut.
  Inhalte der Anwendung sind für Suchmaschinen kaum sichtbar. CORS muss
  konfiguriert werden. Weil `api.<domain>` zur selben Site gehört, funktionieren
  Cookies mit `SameSite=Lax`; Authentifizierung ist gesondert zu klären.

### B — Vorgeschalteter Proxy (z. B. Cloudflare im kostenlosen Plan)

- Cloudflare vor GitHub Pages; ein Worker leitet Pfade wie `/app/…` an die
  externe Anwendung weiter und liefert bei Ausfall eine statische Fehlerseite.
- Vorteile: Die Java-Anwendung kann vollständige Seiten serverseitig rendern;
  gleiche Domain und gleicher Pfadraum.
- Nachteile: zusätzliche Plattform, DNS über Cloudflare, Nutzungsgrenzen im
  kostenlosen Plan. Die Java-Anwendung muss die Gestaltung selbst nachbauen
  (gemeinsame Tokens nötig).

### C — Eigene Subdomain mit vollständiger Anwendung

- Die Anwendung läuft unter `app.<domain>` und rendert selbst.
- Nachteile: Andere Adresse sichtbar. Bei einem Ausfall der Maschine kann nichts
  eine Fehlerseite ausliefern — erfüllt die Ausfallanforderung nicht.

## Vorschlag

Option A als Standard.

Option B nur, wenn eine konkrete Anwendung serverseitig gerendertes HTML
benötigt, z. B. für Suchmaschinen. Dann eigene ADR.

Regeln für Option A:

- Anbindung über einen kleinen Adapter pro Anwendung
- definierte Zustände: lädt, bereit, nicht erreichbar, Fehler
- Zeitlimit für Anfragen; kein unendliches Laden
- API-Basisadresse als Build-Konfiguration
- keine Secrets im Browser

## Offen

- erste konkrete externe Anwendung
- Authentifizierung
- Hosting der Java-Anwendungen
