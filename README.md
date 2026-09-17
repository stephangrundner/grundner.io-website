# grundner.io

Website von Stephan Grundner. Statische Website mit Astro, ausgeliefert über
GitHub Pages.

- Vorabversion: https://stephangrundner.github.io/grundner.io-website/
- Ab Go-Live: https://grundner.io

Projektwissen und Entscheidungen: [docs/README.md](docs/README.md).
Arbeitsweise für AI-Agenten: [CLAUDE.md](CLAUDE.md).

## Voraussetzungen

- Node.js 24 (siehe `.nvmrc`)
- pnpm über Corepack: `corepack enable`

## Befehle

| Befehl                              | Zweck                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------- |
| `pnpm install`                      | Abhängigkeiten installieren                                                            |
| `pnpm dev`                          | Entwicklungsserver auf http://localhost:4321                                           |
| `pnpm build`                        | Production Build nach `dist/`                                                          |
| `pnpm preview`                      | `dist/` lokal ausliefern                                                               |
| `pnpm lint`                         | ESLint                                                                                 |
| `pnpm format` / `pnpm format:check` | Prettier anwenden / prüfen                                                             |
| `pnpm typecheck`                    | `astro check`                                                                          |
| `pnpm test`                         | Unit Tests (Vitest)                                                                    |
| `pnpm test:e2e`                     | End-to-End- und Accessibility-Tests (Playwright, axe); benötigt einen vorherigen Build |
| `pnpm verify`                       | alle Qualitäts-Gates in CI-Reihenfolge                                                 |

Einmalig für End-to-End-Tests: `pnpm exec playwright install chromium`.

## Build-Konfiguration

Wird beim Build geprüft (`src/config/build-env.ts`); Vorlage: `.env.example`.

| Variable       | Bedeutung                        | Vorabversion                        | Go-Live               |
| -------------- | -------------------------------- | ----------------------------------- | --------------------- |
| `SITE_URL`     | Origin ohne abschließenden Slash | `https://stephangrundner.github.io` | `https://grundner.io` |
| `BASE_PATH`    | Basispfad                        | `/grundner.io-website`              | `/`                   |
| `SITE_NOINDEX` | `noindex` auf allen Seiten       | `true`                              | `false`               |

Ohne Angaben gelten lokale Standardwerte (`http://localhost:4321`, `/`, `true`).
Für eine lokale Prüfung mit Basispfad die Variablen beim Build und beim
E2E-Test identisch setzen.

## Deployment

Die Pipeline (`.github/workflows/ci.yml`) läuft bei jedem Push auf `main` und
`feature/**` sowie bei Pull Requests. Nur ein Push auf `main` veröffentlicht die
Website auf GitHub Pages.

- Änderungen erfolgen ausschließlich auf `feature/*`-Branches.
- Deployment: Branches nach `main` mergen und `main` pushen.
- Go-Live: Repository-Variablen `SITE_URL`, `BASE_PATH`, `SITE_NOINDEX` unter
  _Settings → Secrets and variables → Actions → Variables_ setzen, Custom Domain
  eintragen, DNS umstellen (siehe `docs/requirements/operations.md`).
- Rollback: Commit auf `main` per `git revert` rückgängig machen und pushen.

Einmalige Einrichtung: _Settings → Pages → Build and deployment → Source:
GitHub Actions_.
