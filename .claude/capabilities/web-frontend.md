# Web Frontend Conventions

Stack-independent conventions for the website. The stack is Astro (ADR-0002);
Astro-specific rules are added at bootstrap.

## Rendering

* Pages are pre-rendered at build time. There is no application server.
* Client-side JavaScript only where browser state or interaction is required:
  mobile navigation, contact form state, consent handling, share/copy,
  targeted animations, interactive diagrams, embedded external applications.
* Static text sections, card lists, footer, breadcrumbs, metadata and article
  rendering ship without client-side JavaScript.
* All content is fully visible without JavaScript.

## Components

* Semantic names over visual names.
* Explicitly typed props and explicitly typed style variants.
* Keep the DOM as flat as sensible.
* Central components do not accept free style overrides as a substitute for
  missing variants. Layout composition from outside is allowed.
* Interactive components define their states: default, hover, focus-visible,
  active, disabled, loading, error.
* Abstract a component only when it is reused or adds semantic clarity.

## Styling

* Design tokens are CSS custom properties and the only source of colours,
  spacing, radii, durations and easings (`docs/design/design-system.md`).
  Token names follow the Claude Design snapshot
  (`docs/design/claude-design/tokens/`); prefer the semantic aliases.
* The component prototypes in `docs/design/claude-design/components/` are
  visual references, not production code. Hover, focus and active states are
  implemented in CSS, not in JavaScript.
* No raw hex values or arbitrary pixel values where a token exists.
* Deviations are justified and documented.

## Code

* TypeScript in strict mode.
* No `any`, `@ts-ignore` or disabled lint rules to hide errors.
* No tests deleted to make a build pass.
* No dependency without a traceable need.
* No large files collecting unrelated code; no deep barrel-export chains.
* Provider dependencies (analytics, form delivery, external applications) sit
  behind small adapters.

## Deliberately not used

* MUI, Bootstrap, generic themes, or any component library that dictates the
  visual language
* global client state libraries without a concrete need
* GraphQL
* complete icon packages (use a reduced icon set or own SVGs)
* runtime requests to external font services
