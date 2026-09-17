# Content-Pflege: Trennung von Inhalt und Darstellung

## Anforderung

Inhalte werden von ihrer Darstellung getrennt und dateibasiert gepflegt —
eine Art dateibasiertes CMS.

- Bereiche mit wiederkehrender Inhaltsstruktur (Insights/Blog, Projekte/Cases,
  klassische Inhaltsseiten wie Impressum oder Datenschutz) **müssen** Inhalt und
  Darstellung trennen.
- Seiten mit individueller Komposition, bei denen die Trennung schwierig ist
  (z. B. Startseite), **dürfen** Inhalte im Code halten.
- **Ziel** ist, dass der gesamte Content der Website von der Darstellung
  getrennt ist. Auch auf individuell komponierten Seiten werden Texte deshalb,
  wo mit vertretbarem Aufwand möglich, in strukturierte Inhaltsdateien
  ausgelagert.

## Regeln

- Inhalte sind versioniert und liegen im Repository.
- Inhalte werden beim Build gegen ein Schema validiert. Ungültige Inhalte
  brechen den Build ab (siehe [Content-Modell](../domain/content-model.md)).
- Redaktionelle Langtexte: Markdown/MDX.
- Kleine strukturierte Listen (Leistungen, Skills, Navigation,
  Zusammenarbeitsmodelle, Site-Konfiguration): typisierte, validierte
  Datendateien.
- Neue Inhalte eines bestehenden Typs entstehen ohne Codeänderung.
- Kein CMS mit Oberfläche und keine Datenbank in Version 1.

## Erlaubte Bausteine in Langtexten

Redaktionelle Inhalte dürfen nur explizit registrierte Bausteine verwenden:

- Standardüberschriften, Links, Listen, Tabellen
- `PullQuote`, `TechnicalNote`, `Figure`, `Metric`, `Callout`,
  `SystemDiagram`, `CodeBlock`

Sicherheitsregeln:

- kein beliebiger JavaScript-Code und keine beliebigen Imports in Inhaltsdateien
- externe Links sichtbar gekennzeichnet und mit sicheren Attributen
- HTML nur kontrolliert

Artikel-Features:

- Heading-IDs und automatisch erzeugtes Inhaltsverzeichnis
- Syntax Highlighting nur bei tatsächlichen Codebeispielen, mit Copy-Button
- responsive Tabellen, Bildunterschriften, Fußnoten bei Bedarf
- Lesedauer wird automatisch berechnet
