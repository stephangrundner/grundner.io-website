# 0003 — Öffentliches Repository ohne sensible Informationen

Status: accepted
Datum: 2026-09-17

## Kontext

GitHub Pages erfordert im kostenlosen Plan ein öffentliches Repository
([ADR-0001](0001-static-hosting-github-pages.md)). Bezahlpläne scheiden aus
([Betrieb](../requirements/operations.md#grundsätze)).

Damit wären Projektdokumentation, Arbeitsanweisungen, Inhalte und die gesamte
Git-Historie öffentlich einsehbar.

## Optionen

### A — Privates Quell-Repository, öffentliches Veröffentlichungs-Repository

Die Pipeline baut im privaten Repository und pusht nur die gebaute Website in
ein zweites, öffentliches Repository. Hält Dokumentation und Entwürfe privat,
erfordert aber ein zweites Repository, einen Zugangsschlüssel für den Push und
unterliegt dem Actions-Kontingent privater Repositories.

### B — Öffentliches Quell-Repository, Wissen in separatem privaten Repository

Trennt Dokumentation, Code und Tests, was dem Arbeitsmodell in `CLAUDE.md`
widerspricht.

### C — Verschlüsselung vor dem Push (z. B. git-crypt)

Struktur und Historie bleiben sichtbar, Schlüsselverwaltung nötig, ein
Konfigurationsfehler veröffentlicht Inhalte dauerhaft.

### D — Anderer kostenloser Hoster mit privatem Repository

Widerspricht der Entscheidung für GitHub Pages.

### E — Ein öffentliches Repository, keine sensiblen Informationen

Dieses Repository bleibt das einzige. Es wird öffentlich. Sensible Informationen
werden nicht aufgenommen.

## Entscheidung

Option E. Entscheidung durch Stephan Grundner.

Unter `docs/` landen keine sensiblen Informationen. Die Regeln dazu stehen in
`.claude/project/confidentiality.md`.

## Konsequenzen

- Ein Repository, eine Pipeline: Push auf `main` baut die Website und
  veröffentlicht sie auf GitHub Pages desselben Repositories.
- Öffentliche Repositories haben im kostenlosen Plan kein Minutenkontingent für
  Standard-Runner von GitHub Actions.
- Öffentlich einsehbar sind: Dokumentation, Arbeitsanweisungen, Code, Inhalte
  inklusive Entwürfen und die vollständige Git-Historie.
- Einmal gepushte Inhalte gelten als veröffentlicht, auch wenn sie später
  gelöscht werden.
- Wissen, das sensibel ist, gehört nicht ins Repository. Wo es stattdessen
  gepflegt wird: Offen.
- Entwürfe (`draft`, `review`) liegen ebenfalls öffentlich im Repository, auch
  wenn sie nicht gerendert werden. Umgang damit: Offen.
