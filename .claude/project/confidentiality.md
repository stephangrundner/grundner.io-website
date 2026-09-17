# Confidentiality

Source: explicit user instruction (2026-09-17), ADR-0003.

This repository is public. Everything committed — including `docs/`, `.claude/`,
drafts and the full Git history — is visible to anyone once pushed.

## Rule

No sensitive information under `docs/`. Apply the same care to every other file
in the repository.

## Sensitive information

Treat as sensitive, unless the user explicitly confirms it for publication:

* personal data beyond what the public website shows (private addresses, phone
  numbers, private e-mail addresses, family details)
* contractual relationships and conditions: type of relationship, contract
  terms, rates, prices, commercial conditions
* business strategy beyond what the public website shows: acquisition channels,
  target segments, sales priorities
* internal information about customers or employers: products, costs, internal
  processes, strategy, internal project names, people
* unverified claims about customers, projects or results
* customer names and logos whose public use is not confirmed
* credentials, tokens, keys, internal URLs and account identifiers
* legal or financial matters

Not sensitive: information intended for the public website, and technical,
design and process knowledge about the website itself.

## Working rules

* Before writing knowledge into the repository, check it against the list above.
* If knowledge is relevant but sensitive, do not write it. Tell the user and
  record only a neutral placeholder where needed (e.g. "Freigabe offen"),
  without the sensitive detail.
* When documenting content rules that exist because of a sensitive fact, phrase
  the rule so it does not reveal the fact.
* Unsure whether something is sensitive: ask before committing.
* Never commit secrets. Configuration secrets live only in GitHub Actions
  secrets.
* Once pushed, removing a file does not unpublish it. Report accidental commits
  of sensitive information to the user immediately; do not rewrite pushed
  history without instruction.
