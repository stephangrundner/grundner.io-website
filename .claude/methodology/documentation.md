# Documentation

## Language

* Project documentation under `docs/` is written in German.
* Working instructions (`CLAUDE.md`, `.claude/`) are written in English.
* Website content is German (target market DACH).

## Layout

`docs/README.md` is the index of authoritative project knowledge. Each document
owns one concern; the index lists which.

When adding knowledge, extend the owning document. Create a new document only
when no existing document owns the concern, and add it to the index.

## Status markers

Documents that mix accepted and not yet accepted content mark the latter
explicitly:

* `Vorschlag` — proposed, not binding
* `Annahme` — assumption, must be confirmed
* `Offen` — tracked in `docs/open-questions.md`

Unmarked content in an authoritative document is accepted.

## Sources

The original input was the document
"Implementierungsspezifikation 0.1" (AI-assisted, created before the restart)
plus the user's instructions from 2026-09-17. The input document was split into
the concern-owned documents under `docs/` and then removed. Where the user's
instructions superseded it, the documents and ADR-0001 say so.

The design system and its briefing come from Claude Design. The textual parts
are kept as an unmodified snapshot in `docs/design/claude-design/`
(update procedure in its `SNAPSHOT.md`); their knowledge is extracted into the
concern-owned documents. Do not edit the snapshot by hand, except for the
redactions required by `.claude/project/confidentiality.md` (listed in
`SNAPSHOT.md`).
