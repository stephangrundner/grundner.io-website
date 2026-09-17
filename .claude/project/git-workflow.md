# Git Workflow

Source: explicit user instruction (2026-09-17).

## Branches

* `main` holds the productive website. Every push to `main` triggers the
  CI/CD pipeline, which deploys the site.
* All changes happen on `feature/*` branches. No exceptions — this includes
  documentation, configuration and content changes.
* Never commit directly to `main`.

## Deployment

Deploy only when the user explicitly instructs it.

Procedure:

1. Make sure the relevant `feature/*` branches are committed.
2. Merge them into `main`.
3. Push `main` to `origin`.
4. The pipeline builds and publishes the site
   (see `docs/requirements/operations.md`).

A deployment instruction covers merging and pushing. It does not authorize
unrelated changes, history rewrites or force pushes.

## Commits

* Commit on the feature branch when a coherent unit of work is complete.
* Do not push feature branches or `main` without instruction.
