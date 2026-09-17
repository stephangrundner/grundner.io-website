# Komponentenkatalog

Fachlicher Katalog der UI-Bausteine. Gestaltung:
[Design System](../design/design-system.md). Technische Konventionen:
`.claude/capabilities/web-frontend.md`.

Maße, Zustände und Beispiele je Komponente stehen im Snapshot unter
[../design/claude-design/components/](../design/claude-design/components/)
(`*.prompt.md` für Verwendung, `*.jsx` für die Referenzgestaltung). Die
Prototypen setzen Hover per JavaScript um; auf der Website werden solche Zustände
mit CSS umgesetzt (siehe [Qualität](../requirements/quality.md#performance-budget)).

## Komponenten aus dem Design System

Spalte „Einsatz“: W = Website, A = App-Oberflächen (externe Anwendungen).

### Core

| Komponente | Einsatz | Verwendungsregeln |
|---|---|---|
| `Button` | W, A | Varianten primary (Orange), secondary (Outline), tertiary (Text); Größen sm/md/lg, mind. 44 px; maximal ein primary pro Sichtbereich; mit `href` als Link |
| `IconButton` | W, A | quadratisch, Label Pflicht |
| `ArrowLink` | W, A | Standard-Weiterführung am Ende von Karten und Sektionen; Pfeil → ↓ ← |
| `Badge` | W, A | Rollen-, Kategorie-, Statuslabel; Ton `verify` nur im Entwurf |
| `SectionHeader` | W | beginnt jede Hauptsektion; Nummer / Label / Titel / Lead; Nummern fortlaufend |
| `Card` | W, A | Basiscontainer; Raster über 1-px-Lücke, keine Schatten |
| `ProofMetric` | W | maximal drei bis vier pro Leiste |
| `PullQuote` | W | nur für die eine Kernaussage eines Beitrags; keine erfundenen Kundenstimmen |
| `TechnicalNote` | W | nur wenn es etwas zu erklären gibt; Mobile stark reduziert |

### Content

| Komponente | Einsatz | Verwendungsregeln |
|---|---|---|
| `ServiceCard` | W | Nummer, Titel, Beschreibung, Link; immer im 1-px-Rasterverbund |
| `InsightCard` | W | Format · Säule, Titel, Summary, Autor · Lesedauer |
| `CasePreview` | W | Varianten groß und kompakt; Meta, Titel, Problem, Ergebnis, Link |
| `ImagePlaceholder` | W, A | schraffiert mit Beschriftung, solange kein freigegebenes Bild existiert; nie durch Stock- oder generierte Bilder ersetzen |
| `ProcessSteps` | W | geordnete Liste, optional Artefakt je Schritt; ohne Animation verständlich |
| `SkillGroup` | W | vier bis sechs Gruppen, wenige starke Einträge |
| `DataTable` | W, A | Typskalen, Projektstationen, App-Listen; Mobile scrollbar und erkennbar |
| `Accordion` | W, A | Plus/Minus statt Chevron; geöffnete Inhalte max. 70ch |
| `CTABand` | W | Seitenabschluss; maximal zwei Aktionen, davon eine primär |

### Formulare

| Komponente | Einsatz | Verwendungsregeln |
|---|---|---|
| `FormField` | W, A | Wrapper für jedes Feld; Label oben, Pflichtmarker, Hinweis oder Fehlertext |
| `Input` | W, A | immer in `FormField` |
| `Textarea` | W, A | „Worum geht es?“, vier Zeilen Standard |
| `Checkbox` | W, A | Label darf Links enthalten (Datenschutz) |
| `Select` | W, A | nur bei wirklich langen Listen |
| `RadioGroup` | W, A | bis drei Optionen, sonst `Select` |
| `DatePicker` | W, A | Terminwunsch/Zeitraum; Auswahl orange mit schwarzer Ziffer |
| `TimePicker` | W, A | mit `DatePicker` für Terminbuchung |
| `SearchField` | W, A | nur wo genug Inhalt existiert |
| `Switch` | A | nicht auf Marketingseiten |
| `LoginForm` | A | interne Werkzeuge und Kundenportale |

### Navigation

| Komponente | Einsatz | Verwendungsregeln |
|---|---|---|
| `Navbar` | W | Header jeder Seite; Wortmarke, Descriptor, Navigation, Utility-Link, CTA; ab 1024 px Desktop, darunter Menü-Button mit `Drawer` |
| `Drawer` | W | mobile Navigation, Utility-Link am Ende |
| `Breadcrumbs` | W | nur auf Detailseiten |
| `TableOfContents` | W | ab ca. 1.500 Wörtern |
| `Tabs` | W, A | Projektfilter und App-Ansichten; auf Touch horizontal scrollbar |
| `Sidebar` | A | nur App-Oberflächen, dunkle Fläche |

### Feedback

| Komponente | Einsatz | Verwendungsregeln |
|---|---|---|
| `Alert` | W, A | Fehler und Hinweise, immer textlich erklärt |
| `Spinner` | W, A | nur wo tatsächlich gewartet wird |
| `EmptyState` | W, A | immer mit nächster Aktion |
| `Dialog` | A | Terminbuchung, Bestätigungen, Details; einziger Schatten im System |
| `Toast` | A | Speicher- und Sendebestätigungen, nie Marketing |
| `Tooltip` | A | nie Pflichtinformation (auf Touch nicht erreichbar) |

## Zusätzlich benötigt

Aus den Seitenanforderungen, im Design System noch nicht als eigene Komponente
vorhanden. Gestaltung aus Tokens und bestehenden Komponenten ableiten; bei
größeren Neuentwürfen zuerst in Claude Design ergänzen.

| Bereich | Komponenten |
|---|---|
| Layout-Primitives | `Container`, `Section` (Nummer, Label, Titel, Beschreibung, Light/Dark, vertikale Rhythmik, technische Linien), `Grid`, `Stack`, `Cluster`, `Divider`, `VisuallyHidden` |
| Layout | `SiteFooter`, `PageHeader`, `ContentLayout` (Artikel mit Marginalspalte) |
| Branding und Grafik | `Wordmark`, `TechnicalGrid`, `AxisMark`, `MeasurementLine`, `SystemDiagram` (mit Textalternative) |
| Seiten | `Hero`, `ProofStrip`, `CollaborationModelCard`, `FeaturedProjectCard` bzw. `CasePreview` groß |
| Content | `ArticleHeader`, `ArticleMeta`, `ArticleBody`, `Figure`, `CodeBlock`, `Callout`, `Metric`, `RelatedContent`, `ShareActions` |
| Conversion | `ContactPanel`, `ContactForm`, `ProfileDownload` |
| Plattform | `ConsentBanner` / Einwilligungseinstellungen ([Analytics](../requirements/analytics.md)); `ExternalAppFrame` mit Lade- und Fehlerzustand ([Externe Anwendungen](../requirements/external-applications.md)) |
| Social | Quote Card, Carousel-Cover, Artikel-Teaser, Diagrammkarte, Autorenkarte |

## Umsetzungsstand

| Komponente | Datei | Seit | Anmerkung |
|---|---|---|---|
| `Container` | `src/components/layout/Container.astro` | Phase 1 | Breiten `content` (1440 px) und `measure` (70ch) |
| `Section` | `src/components/layout/Section.astro` | Phase 1 | enthält die Funktion von `SectionHeader`; Flächen `page`, `raised`, `dark`; optional technisches Raster |
| `Grid` | `src/components/layout/Grid.astro` | Phase 1 | `columns` (4/8/12) und `cards` (1-px-Rasterverbund) |
| `SiteHeader` | `src/components/layout/SiteHeader.astro` | Phase 1 | entspricht `Navbar` + `Drawer`; siehe Abweichungen |
| `SiteFooter` | `src/components/layout/SiteFooter.astro` | Phase 1 | im Design System nicht vorhanden, aus Tokens abgeleitet — Offen |
| `Button` | `src/components/ui/Button.astro` | Phase 1 | Varianten und Größen wie Design System; auf dunklen Flächen über `data-surface` statt `onDark` |
| `TextLink` | `src/components/ui/TextLink.astro` | Phase 1 | entspricht `ArrowLink` |
| `Wordmark` | `src/components/ui/Wordmark.astro` | Phase 1 | |
| `TechnicalGrid` | `src/components/graphics/TechnicalGrid.astro` | Phase 1 | Mobile halbe Rastergröße, nach unten ausgeblendet |
| Skip Link | `src/layouts/BaseLayout.astro` | Phase 1 | |
| `Placeholder` | `src/components/ui/Placeholder.astro` | Phase 2 | entspricht `ImagePlaceholder`, zusätzlich Textvariante; `data-placeholder` |
| `Hero` | `src/components/sections/Hero.astro` | Phase 2 | Headline ab 1280 px in drei festen Zeilen |
| `ProofStrip` | `src/components/sections/ProofStrip.astro` | Phase 2 | derzeit nur Platzhalter; `ProofMetric` folgt mit freigegebenen Proofs |
| Standpunkt | `src/components/sections/PointOfView.astro` | Phase 2 | Graphitfläche, Aussage mit oranger Kante |
| `ServiceCard` (Leistungen) | `src/components/sections/Services.astro` | Phase 2 | Nummer in Textfarbe mit orangem 8-px-Quadrat |
| `CasePreview` (ausgewählte Projekte) | `src/components/sections/FeaturedProjects.astro` | Phase 2 | derzeit Platzhalter |
| `ProcessSteps` | `src/components/sections/Process.astro` | Phase 2 | Desktop zweispaltig |
| Zusammenarbeitsmodelle | `src/components/sections/CollaborationModels.astro` | Phase 2 | Kartenraster mit orangem Marker |
| `InsightCard` (kuratierte Insights) | `src/components/sections/InsightsPreview.astro` | Phase 2 | derzeit Platzhalter |
| Kurzprofil | `src/components/sections/ProfileTeaser.astro` | Phase 2 | derzeit Platzhalter |
| `CTABand` | `src/components/sections/ClosingCta.astro` | Phase 2 | |
| Scroll-Reveal | `src/scripts/reveal.ts` | Phase 2 | |

Interne Übersicht aller umgesetzten Grundlagen: `/komponenten` (nicht verlinkt,
immer `noindex`, vor dem Go-Live zu entfernen).

### Abweichungen vom Design System

- **Oranger Text:** Nur auf dunklen Flächen
  ([Design System](../design/design-system.md#farbe)). Aktiver Navigationspunkt
  mobil: orange 2-px-Linie links; Hover von Links auf hellem Grund: orange
  Unterstreichung statt oranger Schrift.
- **CTA auf schmalen Displays:** Unter 480 px passt der CTA nicht neben
  Wortmarke und Menü-Button; er steht dort am Ende des mobilen Menüs.
- **Mobiles Menü ohne JavaScript:** Die Navigation ist dann dauerhaft
  ausgeklappt sichtbar.
