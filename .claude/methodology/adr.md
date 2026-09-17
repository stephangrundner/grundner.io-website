# Architecture Decision Records

## Location

`docs/decisions/NNNN-short-title.md`, indexed in `docs/decisions/README.md`.
Use `.claude/templates/adr.md`.

## Status

* `proposed` — prepared for the user's decision, not binding
* `accepted` — binding for its concern
* `rejected` — kept as history
* `superseded by NNNN` — kept as history

Only the user moves an ADR to `accepted` or `rejected`.

## When

See `CLAUDE.md` §18. In this project additionally for:

* every dependency on an external service or platform,
* every decision affecting cost (the project must not depend on paid plans,
  see `docs/requirements/operations.md`).

Framework and library versions are recorded in the ADR that introduces them.
