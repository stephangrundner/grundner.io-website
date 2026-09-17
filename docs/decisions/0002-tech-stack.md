# 0002 — Tech-Stack

Status: accepted
Datum: 2026-09-17

## Kontext

Anforderungen, die den Stack bestimmen:

- rein statische Website auf GitHub Pages ([ADR-0001](0001-static-hosting-github-pages.md))
- Trennung von Inhalt und Darstellung, dateibasiert, mit Schema-Validierung
  beim Build ([Content-Pflege](../requirements/content-management.md))
- Markdown/MDX mit registrierten Bausteinen
- sehr wenig Client-JavaScript, Interaktivität nur punktuell
  ([Qualität](../requirements/quality.md#performance-budget))
- eigenes Design System ohne vorgegebene Komponentenbibliothek
- einbettbare externe Anwendungen mit Fehlerzustand
  ([Externe Anwendungen](../requirements/external-applications.md))
- anbieterunabhängige Messung mit Einwilligung
  ([Analytics](../requirements/analytics.md))
- wartungsarm, keine Abhängigkeit von Bezahlplänen

Die Implementierungsspezifikation 0.1 empfahl Next.js. Diese Empfehlung
entstand vor der Entscheidung für statisches Hosting. Stephan brachte Astro als
Möglichkeit ein.

## Optionen

### A — Astro

- Statischer Output ist der Standardfall, kein Kompromissmodus.
- Content Collections: dateibasierte Inhalte mit Schema-Validierung (Zod) beim
  Build — deckt die Anforderung „dateibasiertes CMS“ direkt ab.
- MDX mit explizit übergebenen Komponenten.
- Seiten liefern standardmäßig kein JavaScript aus; interaktive Teile als
  „Islands“ gezielt pro Komponente.
- Bildoptimierung, Sitemap und RSS über offizielle Integrationen zur Build-Zeit.
- Offizielle Anleitung und Action für GitHub Pages.
- Islands können mit Vanilla TypeScript oder bei Bedarf mit einem
  UI-Framework umgesetzt werden, ohne die ganze Seite daran zu binden.
- Nachteil: kleineres Ökosystem als React/Next.js; bei stark interaktiven
  Anwendungen weniger geeignet — die entstehen aber ohnehin als externe
  Anwendungen.

### B — Next.js mit statischem Export

- Großes Ökosystem, React Server Components.
- Im statischen Export entfallen die Hauptvorteile: Route Handlers, Server
  Actions, Middleware, Laufzeit-Bildoptimierung.
- Mehr Client-JavaScript durch die React-Laufzeit und Hydration.
- Content-Validierung muss selbst gebaut werden.

### C — Eleventy oder Hugo

- Sehr schlank und schnell, statisch.
- Schwächeres Komponentenmodell und keine integrierte, typisierte
  Schema-Validierung; mehr Eigenbau für MDX-Komponenten, Islands und Typisierung.

## Entscheidung

Option A — Astro. Vorgeschlagen am 2026-09-17, angenommen durch Stephan Grundner
am selben Tag.

| Bereich | Vorschlag |
|---|---|
| Framework | Astro, statischer Output |
| Sprache | TypeScript, strict |
| Paketmanager | pnpm, Lockfile committet |
| Inhalte | Astro Content Collections mit Zod-Schemas, MDX |
| Styling | CSS Custom Properties als Tokens; Tailwind CSS für Layout-Utilities, auf Tokens abgebildet |
| Interaktivität | Astro Islands, bevorzugt Vanilla TypeScript; UI-Framework nur bei konkretem Bedarf |
| Icons | Lucide (einzeln importiert) oder eigene SVGs |
| Fonts | lokal gebündelt (z. B. über Fontsource) |
| Bilder | Astro-Bildpipeline zur Build-Zeit |
| SEO | offizielle Sitemap- und RSS-Integrationen |
| Tests | Vitest; Playwright mit axe für E2E, Accessibility und visuelle Smoke-Tests |
| Qualität | ESLint, Prettier, `astro check` |
| CI/CD | GitHub Actions |

Versionen: aktuelle stabile Versionen beim Bootstrap, keine Release Candidates,
Beta- oder Canary-Versionen; keine automatischen Major-Updates in der ersten
Implementierungsphase.

### Versionen beim Bootstrap (2026-09-17)

| Werkzeug | Version |
|---|---|
| Node.js | 24 (LTS) |
| pnpm | 12.4.2 |
| Astro | 7.3.2 |
| TypeScript | 6.0.3 (7.x wird von `@astrojs/check` und `typescript-eslint` noch nicht unterstützt) |
| @astrojs/check | 0.9.10 |
| ESLint / typescript-eslint / eslint-plugin-astro | 10.10.0 / 8.70.0 / 3.2.0 |
| Prettier / prettier-plugin-astro | 3.9.7 / 1.0.0 |
| Vitest | 5.0.1 |
| Playwright / @axe-core/playwright | 1.63.0 / 4.13.0 |
| GitHub Actions | checkout v7, pnpm/action-setup v6, setup-node v7, upload-pages-artifact v5, deploy-pages v5 |

pnpm lehnt standardmäßig Pakete ab, die jünger als einen Tag sind
(`minimumReleaseAge`). Diese Schutzmaßnahme bleibt aktiv; deshalb wurden Astro
7.3.2, eslint-plugin-astro 3.2.0 und prettier-plugin-astro 1.0.0 statt der
wenige Stunden alten Folgeversionen gewählt.

Tailwind CSS, MDX, Sitemap, RSS und Fonts werden mit der Phase eingeführt, die
sie benötigt.

Nicht verwendet: siehe `.claude/capabilities/web-frontend.md`.

## Konsequenzen

- Mit dem Bootstrap ersetzt das Profil `implementation` das Profil
  `specification`; `.claude/project/repository-layout.md` und
  `.claude/project/build-and-test.md` sind angelegt.
- Die Next.js-spezifischen Teile der Implementierungsspezifikation 0.1
  (Verzeichnisstruktur, Server Components, `next/image`, `next/font`) gelten
  nicht.
