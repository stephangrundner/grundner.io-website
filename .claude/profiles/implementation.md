# Active Profile: Implementation

Status: active since 2026-09-17 (replaces the `specification` profile)

## Purpose

The specification phase is complete: requirements are documented, the stack is
accepted (Astro, ADR-0002), the repository is public (ADR-0003) and the phase
plan in `docs/delivery/phases.md` is confirmed. The website is built phase by
phase.

## Applicable modules

```text
.claude/methodology/documentation.md   Documentation layout and language
.claude/methodology/adr.md             Decision records
.claude/project/git-workflow.md        Branch model and deployment procedure
.claude/project/confidentiality.md     Public repository, no sensitive information
.claude/project/repository-layout.md   Where code, content and tests live
.claude/project/build-and-test.md      Commands, quality gates, dependency policy
.claude/capabilities/web-frontend.md   Frontend conventions
```

## Phase rules

These rules restrict the general workflow of `CLAUDE.md`.

1. Work on the phase recorded as "in Arbeit" in `docs/delivery/phases.md`.
   Do not start the next phase without the user's instruction.
2. Keep the phase table in `docs/delivery/phases.md` current.
3. Every change happens on a `feature/*` branch; deploy only on instruction
   (`.claude/project/git-workflow.md`).
4. Proposed decisions may be refined, but only the user accepts them.
5. Items in `docs/open-questions.md` must not be closed by assumption.
6. Content is never invented; missing content is tracked in
   `docs/content/content-status.md`.
7. A unit of work is done when `pnpm verify` passes and affected documentation
   is updated.
