# Active Profile: Specification

Status: active
Phase: specification before bootstrap

## Purpose

The project restarted from an empty repository. Product, quality and operational
requirements are documented and the technology stack is accepted (Astro,
ADR-0002). The remaining preconditions for the bootstrap are still open.

This phase establishes authoritative documentation and the decisions that the
implementation depends on.

## Applicable modules

```text
.claude/methodology/documentation.md   Documentation layout and language
.claude/methodology/adr.md             Decision records
.claude/project/git-workflow.md        Branch model and deployment procedure
.claude/project/confidentiality.md     Public repository, no sensitive information
.claude/capabilities/web-frontend.md   Stack-independent frontend conventions
```

Deliberately absent until the bootstrap:

* `.claude/project/repository-layout.md`
* `.claude/project/build-and-test.md`
* stack-specific capability modules

## Phase rules

These rules restrict the general workflow of `CLAUDE.md`.

1. Do not bootstrap the application or add dependencies before the exit
   criteria below are met.
2. Proposed decisions may be refined, but only the user accepts them.
3. Items in `docs/open-questions.md` must not be closed by assumption.
4. Every change happens on a `feature/*` branch
   (see `.claude/project/git-workflow.md`).

## Exit criteria

The phase ends when:

* ADR-0002 (tech stack) is accepted (done 2026-09-17),
* ADR-0003 (public repository) is accepted (done 2026-09-17),
* `origin` is set up (done 2026-09-17),
* the design system from Claude Design is available in the repository
  (done 2026-09-17, `docs/design/claude-design/`),
* and the phase plan in `docs/delivery/phases.md` has been confirmed.

On exit, replace this profile with a bootstrap/implementation profile and add
the stack-specific modules.
