# Build and Test

## Toolchain

* Node.js 24 (`.nvmrc`), pnpm via Corepack (`packageManager` in
  `package.json`).
* If `pnpm` is not on `PATH`, use `corepack pnpm <command>`.

## Commands

| Command | Purpose |
|---|---|
| `pnpm lint` | ESLint |
| `pnpm format:check` | Prettier check (`pnpm format` to fix) |
| `pnpm typecheck` | `astro check` |
| `pnpm test` | Vitest unit tests |
| `pnpm build` | Static build to `dist/` |
| `pnpm test:e2e` | Playwright against `astro preview`; requires a build |
| `pnpm verify` | All gates in CI order |

Browser for E2E tests (once per machine): `pnpm exec playwright install chromium`.

## Build configuration

`SITE_URL`, `BASE_PATH`, `SITE_NOINDEX` — validated in
`src/config/build-env.ts`, documented in `README.md` and
`docs/requirements/operations.md`. Build and E2E tests must use the same values.

Verify both deployment shapes when touching routing, links or metadata:

```bash
SITE_URL=https://stephangrundner.github.io BASE_PATH=/grundner.io-website SITE_NOINDEX=true pnpm build && pnpm test:e2e
SITE_URL=https://grundner.io BASE_PATH=/ SITE_NOINDEX=false pnpm build && pnpm test:e2e
```

All internal links must respect `import.meta.env.BASE_URL`.

## Agent environments

Astro detects AI agent environments and then starts `astro preview` in the
background, which breaks Playwright's `webServer`. When running E2E tests as an
agent, unset the agent variables for that command (e.g. `AI_AGENT`,
`CLAUDECODE`, `CLAUDE_CODE_*`). CI and human terminals are not affected. Stop a
leftover background server with `pnpm exec astro preview stop`.

## Dependency policy

* Exact versions in `package.json`; lockfile committed; CI installs with
  `--frozen-lockfile`.
* pnpm's `minimumReleaseAge` protection stays enabled. Do not add
  `minimumReleaseAgeExclude` entries; choose an older release instead.
* Build scripts only for packages listed under `allowBuilds` in
  `pnpm-workspace.yaml`.
* No release candidates, betas or canaries; no unreviewed major updates.
* Record version changes of core tools in ADR-0002.
