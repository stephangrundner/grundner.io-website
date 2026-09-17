# Repository Layout

```text
.github/workflows/ci.yml   CI/CD: quality gates, build, deploy to GitHub Pages
.claude/                   Working instructions for agents
docs/                      Authoritative project knowledge (German)
src/
  components/
    graphics/              Decorative and technical graphics
    layout/                Container, Section, Grid, header, footer
    sections/              Page sections (start page)
    ui/                    Buttons, links, wordmark, placeholder
  config/                  Build configuration and its validation
  data/                    Small typed data: site, navigation, start page
  layouts/                 Page layouts
  lib/                     Framework-independent helpers (e.g. URLs)
  pages/                   Routes (file-based routing)
  scripts/                 Client-side enhancements (e.g. scroll reveal)
  styles/                  global.css, base.css, fonts.css, tokens/
tests/
  e2e/                     Playwright end-to-end and accessibility tests
astro.config.ts            Astro configuration (reads validated build config)
playwright.config.ts       Runs E2E tests against `astro preview` of `dist/`
vitest.config.ts           Unit tests: `src/**/*.test.ts`
eslint.config.js           ESLint flat config
.prettierrc.json           Prettier (docs/, .claude/, CLAUDE.md are excluded)
.env.example               Build configuration variables
```

## Rules

* Unit tests live next to the code they test (`*.test.ts`).
* End-to-end tests live in `tests/e2e/`.
* Build-time configuration is read only through `src/config/build-env.ts`.
* Add new top-level directories only with the phase that needs them
  (e.g. `src/content/` in Phase 3, `src/styles/` in Phase 1) and record them
  here.
* `docs/design/claude-design/` is a snapshot, not source code; do not import
  from it.
