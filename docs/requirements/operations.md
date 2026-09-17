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
- Repository: `stephangrundner/grundner.io-website` auf GitHub (öffentlich).

## Vorabversion bis zum Go-Live

Bis die Website fertig ist, ist sie nur über die GitHub-Pages-Adresse des
Repositories erreichbar:

**https://stephangrundner.github.io/grundner.io-website/**

- In dieser Zeit ist keine Custom Domain gesetzt; `grundner.io` wird erst beim
  Go-Live umgestellt.
- Die Website liegt dabei unter dem Unterpfad `/grundner.io-website/`. Build
  und interne Links müssen diesen Basispfad berücksichtigen und beim Go-Live
  ohne Codeänderung auf `/` umschaltbar sein (Build-Konfiguration).
- Sitemap, Canonical URLs und Open-Graph-Adressen verwenden in der Vorabversion
  die GitHub-Pages-Adresse.
- Die Vorabversion wird von Suchmaschinen ausgeschlossen:
  - jede Seite trägt `<meta name="robots" content="noindex, nofollow">`
  - keine Sitemap-Einreichung bei Suchmaschinen
  - Seiten werden nicht per `robots.txt` gesperrt, damit Suchmaschinen das
    `noindex` lesen können; eine `robots.txt` unter dem Unterpfad würde ohnehin
    nicht ausgewertet
  - ein `X-Robots-Tag`-Header ist auf GitHub Pages nicht möglich
- Der Ausschluss wird über die Build-Konfiguration gesteuert und beim Go-Live
  abgeschaltet.

## Domain und DNS

- Kanonische Adresse: **https://grundner.io**
- `www.grundner.io` leitet auf `grundner.io` weiter.
- DNS wird bei Cloudflare verwaltet, **ohne Proxy** (nur DNS). Cloudflare
  liefert damit weder Header noch Weiterleitungen noch Worker; die Website
  kommt direkt von GitHub Pages.
- HTTPS über das Zertifikat von GitHub Pages, „Enforce HTTPS“ aktiv.

Zielkonfiguration (Umsetzung beim Go-Live, Phase 7):

| Name | Typ | Ziel | Proxy |
|---|---|---|---|
| `grundner.io` | A | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` | aus |
| `grundner.io` | AAAA | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` | aus |
| `www.grundner.io` | CNAME | `stephangrundner.github.io` | aus |

Custom Domain im Repository: `grundner.io`. Ist `www` wie oben eingetragen,
leitet GitHub Pages `www.grundner.io` selbst auf `grundner.io` weiter.

Stand 2026-09-17 (vor der Umstellung): Das Repository ist leer, GitHub Pages ist
nicht aktiviert. `grundner.io` und `www.grundner.io` lösen auf
Cloudflare-Proxy-Adressen auf, der Proxy ist also derzeit noch aktiv. Eine
bestehende `www`-Weiterleitung über Cloudflare entfällt beim Abschalten des
Proxys und wird durch die Weiterleitung von GitHub Pages ersetzt.

## CI/CD

- Ein Push auf `main` löst die Pipeline aus und rollt die Änderungen aus.
- `main` hält die produktive Website.
- Änderungen erfolgen ausnahmslos auf `feature/*`-Branches.
- Deployment erfolgt ausschließlich auf Anweisung durch Merge nach `main` und
  Push auf `origin` (Ablauf: `.claude/project/git-workflow.md`).

### Pipeline-Schritte

1. Abhängigkeiten mit gesperrtem Lockfile installieren
2. Lint und Formatprüfung
3. Typecheck
4. Unit Tests
5. Content-Validierung inklusive Production Guard (ab Phase 3)
6. Production Build
7. End-to-End- und Accessibility-Smoke-Tests
8. Veröffentlichung auf GitHub Pages

Schlägt ein Schritt fehl, wird nicht veröffentlicht; die bisherige Version
bleibt online.

Die Pipeline läuft auch für Pushes auf `feature/*`-Branches und für Pull
Requests, dort ohne Schritt 8. Umsetzung: `.github/workflows/ci.yml`.
GitHub Pages bezieht die Website aus diesem Workflow (Quelle „GitHub Actions“).

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

- Konfiguration erfolgt zur Build-Zeit und wird beim Build validiert;
  ungültige Werte brechen den Build ab.

| Variable | Bedeutung | Vorabversion | Go-Live |
|---|---|---|---|
| `SITE_URL` | Origin ohne abschließenden Slash | `https://stephangrundner.github.io` | `https://grundner.io` |
| `BASE_PATH` | Basispfad | `/grundner.io-website` | `/` |
| `SITE_NOINDEX` | Suchmaschinen-Ausschluss | `true` | `false` |

- Die Pipeline verwendet die Werte der Vorabversion, solange keine
  Repository-Variablen gleichen Namens gesetzt sind. Der Go-Live erfolgt durch
  Setzen dieser Variablen, ohne Codeänderung.
- Ohne Angaben (lokal) gilt: `http://localhost:4321`, `/`, Ausschluss aktiv.
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
