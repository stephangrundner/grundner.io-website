# Externe Anwendungen

## Anforderung

Teile der Website werden später auf entfernten Maschinen laufen, weil sie
Dynamik mit Datenbank und ähnlichem benötigen (Java).

Diese Teile müssen so eingebunden sein, dass der Nutzer nicht merkt, dass es sich
um eine externe Anwendung handelt.

## Regeln

- **Nahtlos:** Gleiche Gestaltung, Navigation, Header und Footer wie die übrige
  Website. Kein erkennbarer Bruch in Darstellung oder Nutzerführung.
- **Ausfallsicher:** Fällt eine externe Anwendung aus, bleibt die Website
  erreichbar und voll funktionsfähig.
- **Fehlerseite:** Für eine ausgefallene externe Anwendung zeigt die Website
  eine gestaltete Fehlerseite im Design der Website.
- Die Website hängt beim Laden nicht von der Verfügbarkeit externer Anwendungen
  ab.
- Externe Anwendungen nutzen dieselben Design Tokens wie die Website; es gibt
  kein zweites, paralleles Branding. Das Design System enthält dafür
  App-Komponenten und Regeln für App-Oberflächen
  ([Design System](../design/design-system.md#web-app-oberflächen)).
- Die Anbindung erfolgt über kleine, austauschbare Adapter.

## Randbedingung

GitHub Pages liefert nur statische Dateien aus und kann Anfragen nicht an andere
Server weiterleiten ([ADR-0001](../decisions/0001-static-hosting-github-pages.md)).

Integrationsmuster: Vorschlag in
[ADR-0004](../decisions/0004-external-application-integration.md).

## Noch nicht festgelegt

- welche Anwendungen konkret entstehen
- Authentifizierung und Benutzerkonten
- Betrieb und Hosting der entfernten Maschinen
