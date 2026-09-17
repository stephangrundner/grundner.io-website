# Betrieb, Hosting und Deployment

## Grundsätze

- **Wartungsarm:** Die Website ist ein zentrales Business-Werkzeug. Betrieb und
  Pflege sollen möglichst wenig Aufwand erzeugen.
- **Keine Abhängigkeit von Bezahlplänen:** Alles bleibt funktional, auch wenn
  Bezahlpläne nicht bedient werden können. Kernfunktionen (Auslieferung,
  Build, Deployment, Pflege) dürfen keinen kostenpflichtigen Plan voraussetzen.
  Kostenlose Kontingente sind zulässig, wenn deren Überschreitung die
  ausgelieferte Website nicht beeinträchtigt.

## Hosting

- Die Website wird auf **GitHub Pages** gehostet
  ([ADR-0001](../decisions/0001-static-hosting-github-pages.md)).
- Daraus folgt: Die Website ist rein statisch. Es gibt keinen eigenen
  Anwendungsserver, keine serverseitigen Endpunkte und keine selbst gesetzten
  HTTP-Header.
- GitHub Pages erfordert im kostenlosen Plan ein öffentliches Repository.
  Dieses Repository wird öffentlich und direkt von GitHub Pages ausgeliefert —
  siehe [Schutz nicht-öffentlicher Inhalte](#schutz-nicht-öffentlicher-inhalte).
- Endgültige Domain: Offen.

## CI/CD

- Ein Push auf `main` löst die Pipeline aus und rollt die Änderungen aus.
- `main` hält die produktive Website.
- Änderungen erfolgen ausnahmslos auf `feature/*`-Branches.
- Deployment erfolgt ausschließlich auf Anweisung durch Merge nach `main` und
  Push auf `origin` (Ablauf: `.claude/project/git-workflow.md`).

### Pipeline-Schritte

1. Abhängigkeiten mit gesperrtem Lockfile installieren
2. Lint
3. Typecheck
4. Unit Tests
5. Content-Validierung inklusive Production Guard
6. Production Build
7. End-to-End-Smoke-Tests
8. Veröffentlichung auf GitHub Pages

Schlägt ein Schritt fehl, wird nicht veröffentlicht; die bisherige Version
bleibt online.

Vorschlag: Die Pipeline läuft auch für Pushes auf `feature/*`-Branches, jedoch
ohne Schritt 8.

Die Spezifikation 0.1 empfahl Preview/Staging und eine manuelle Freigabe vor
Production. Die Vorgabe „Push auf `main` rollt aus“ ersetzt das; die Freigabe
erfolgt durch die Deploy-Anweisung selbst.

### Abhängigkeits-Updates

- Updates erfolgen wie alle Änderungen auf `feature/*`-Branches; automatisierte
  Update-Werkzeuge nur, wenn sie diese Branch-Regel einhalten
- Major-Updates nie ungeprüft übernehmen
- Build und Smoke-Tests erforderlich

### Rollback

Ein Rollback erfolgt durch Revert auf `main` und erneutes Deployment. Der
Rollbackweg wird vor dem ersten Production Release getestet.

Vorschlag: Ist die Pipeline nicht verfügbar (z. B. erschöpftes kostenloses
Kontingent), muss ein dokumentierter manueller Weg existieren, den Build lokal
zu erzeugen und zu veröffentlichen.

## Konfiguration

- Konfiguration erfolgt zur Build-Zeit und wird beim Build validiert.
- Die ausgelieferte Website enthält keine Secrets. Secrets existieren nur in der
  Pipeline (z. B. Zugangsdaten für die Veröffentlichung).
- Optionale Konfiguration darf Features kontrolliert deaktivieren
  (z. B. Analytics ohne konfigurierten Anbieter).

## Schutz nicht-öffentlicher Inhalte

Das Repository ist öffentlich
([ADR-0003](../decisions/0003-public-repository.md)). Unter `docs/` landen
keine sensiblen Informationen; was als sensibel gilt, regelt
`.claude/project/confidentiality.md`.

## Monitoring

- Erreichbarkeit der Website wird überwacht. Lösung: Offen.
- Keine personenbezogenen Formulardaten in Telemetrie oder Logs.
