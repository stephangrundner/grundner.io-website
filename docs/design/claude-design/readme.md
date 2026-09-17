# Stephan Grundner — Design System 0.1

Persönliche Expertenmarke für **AI-native Softwareentwicklung, digitale Produkte und technische Transformation**. Zielmarkt DACH, Websitesprache Deutsch. Designrichtung: **Industrial Precision / Industrial Challenger** — die Präzision technischer Zeichnungen verbunden mit der Klarheit moderner digitaler Produkte.

Die Marke steht für zwei Zielgruppen gleichzeitig: Agenturen und Vermittler, die in 10–20 Sekunden ein belastbares Senior-Profil einordnen müssen, und direkte Entscheider (CTO, Head of Engineering, Head of Digitalization) im DACH-Mittelstand und in der Industrie. Die öffentliche Website ist für Entscheider gestaltet; Vermittler erreichen über einen sichtbaren, aber sekundären Zugang das dichtere **Projektprofil**.

Kommunikative Leitidee: **Komplexe Probleme. Klare Systeme. Produktive Software.**

## Quellen

- Vorarbeit in Claude Design: `https://claude.ai/design/p/60ef9cba-f8e9-4e0b-b8cb-e7b218691248` — dieses Design System wurde aus den dortigen Dateien übernommen und um Templates ergänzt.
- `uploads/Claude-Design-System-0.1 (2).md` — vollständiges Strategie- und Designbriefing Version 0.1 (Markenkern, Zielgruppen, Informationsarchitektur, Tonalität, Tokens, Verbote, Abnahmekriterien). Dieses Dokument ist die verbindliche Grundlage; alle Werte hier stammen daraus.
- Keine Figma-Datei, kein Codebase, keine Logodateien, keine Fotos übergeben.
- Es existiert **kein Symbol-Logo**. Die Wortmarke „STEPHAN GRUNDNER" wird typografisch gesetzt (Uppercase, 600, Tracking 0.14em). Nie ein Zeichen oder Monogramm erfinden.

## Index

| Datei | Inhalt |
|---|---|
| `styles.css` | Einstiegspunkt, importiert alle Token-Dateien |
| `tokens/colors.css` | Flächen, Ink, Linien, Signalorange, Fokus; semantische Aliase; `[data-surface="dark"]`-Scope |
| `tokens/typography.css` | Schriftfamilien, Größen, Zeilenhöhen, Gewichte, Tracking |
| `tokens/spacing.css` | 4-px-Skala, Contentbreite, Gutter, Controlhöhen |
| `tokens/borders.css` | Radien, Hairlines, Rasterwerte, Schraffur, Fokusring |
| `tokens/motion.css` | Zeitwerte und Easing, `prefers-reduced-motion` |
| `tokens/base.css` | Body-Reset, Linkfarben, Fokuszustand, Überschriftenbasis |
| `components/core/` | Button, IconButton, ArrowLink, Badge, SectionHeader, Card, ProofMetric, PullQuote, TechnicalNote |
| `components/forms/` | FormField, Input, Textarea, Select, Checkbox, RadioGroup, Switch, SearchField, DatePicker, TimePicker, LoginForm |
| `components/navigation/` | Navbar, Drawer, Sidebar, Tabs, Breadcrumbs, TableOfContents |
| `components/feedback/` | Dialog, Toast, Tooltip, Alert, Spinner, EmptyState |
| `components/content/` | ServiceCard, InsightCard, CasePreview, ImagePlaceholder, ProcessSteps, SkillGroup, DataTable, Accordion, CTABand |
| `guidelines/*.card.html` | Foundation-Specimen für den Design-System-Tab |
| `ui_kits/website/` | Homepage-Referenz (statisch, 1440px Entwurf, fluid) |
| `ui_kits/webapp/` | Spec-&-Knowledge-Workspace, klickbar: Login → Workspace → Dialog → Toast |
| `Homepage.dc.html` | responsive Homepage als Design Component |
| `Templates.dc.html` | Leistungsseite, Case Study, Insight, Projektprofil |
| `Design System.dc.html` | Foundation- und Komponentenübersicht inkl. Social-Templates |
| `templates/website-seite/` | Template „Website-Seite": Header, Hero, Proof, Standpunkt, Leistungen, Case, CTA |
| `templates/webapp-workspace/` | Template „Web-App-Workspace": Sidebar, Kopfzeile mit Suche, Kennzahlen, Tabs, Tabelle |
| `thumbnail.html` | Projektkachel (Wortmarke + Akzentstreifen) |

## Content Fundamentals

**Grundton:** direkt, klar, selbstbewusst, fachlich substanziell, ruhig, ergebnisorientiert. Keine Werbesprache.

**Anrede:** formelles „Sie" (Arbeitsannahme, vor Textfreigabe zu bestätigen). Fachbeiträge weitgehend ohne direkte Anrede. Ich-Form für Stephan selbst („Ich verbinde Strategie, Architektur und Umsetzung"), nie „wir" für eine Einzelperson.

**Casing:** Sätze in normaler Groß-/Kleinschreibung. Uppercase ausschließlich für Monospace-Labels, Sektionsnummern, Wortmarke und Metazeilen. Keine Uppercase-Headlines.

**Schreibweise:** konsequent „AI", niemals „KI" im Wechsel. Etablierte englische Fachbegriffe bleiben englisch (Context Engineering, Spec-driven Development, Technical Lead), der umgebende Satz ist deutsch. Keine Emoji — an keiner Stelle.

**Satzbau:** kurze starke Hauptaussage, danach fachliche Vertiefung. Aktiv formulieren. Ergebnisse vor Tools. Probleme aus Sicht des Unternehmens beschreiben.

**Passend:**

> AI verändert nicht nur das Coding. Sie verändert, wie Software geplant, beschrieben und entwickelt wird.
> Komplexität ist kein Hindernis. Sie ist der Ausgangspunkt für ein besseres System.

**Unpassend:**

> Innovative und maßgeschneiderte Lösungen für die digitale Zukunft.
> Mit modernsten Technologien bringe ich Ihr Unternehmen auf das nächste Level.
> Unlock the power of AI.

**Belegbarkeit:** keine erfundenen Kennzahlen, Kunden, Projektergebnisse oder Testimonials. Noch nicht verifizierte Aussagen tragen im Entwurf den internen Marker `[VERIFY]` (Badge `tone="verify"`); er darf nicht veröffentlicht werden. EGGER, DEHN und LGT dürfen als Projekt- oder Kundenkontext genannt werden — ohne Aussage über die Art des Vertragsverhältnisses und ohne Logos, solange die Nutzung nicht bestätigt ist.

## Visual Foundations

**Farbe.** Warmer Off-White-Grund (`--canvas` #F5F2EB), nahezu Schwarz als Text (`--ink` #0B0B0B), Graphit für gesetzte dunkle Sektionen (#1A1A1A / #252525), kräftiges Signalorange als einziger Akzent (#FF5A1F, Hover #E94A10). Text auf Orange ist **schwarz**, nie weiß. Orange erscheint als Fläche nur beim primären CTA, sonst als Sektionsnummer, Statusmarker, Diagrammfokus, 2px-Kante am Pull Quote. Keine Orangeflächen als Dekoration, keine zweite Markenfarbe, kein durchgehendes Dark Theme. Diagramme sind monochrom, Orange markiert nur Fokus oder Aktivität.

**Typografie.** Geist Sans für alles Sichtbare, IBM Plex Mono ausschließlich für Metadaten, Labels, Nummern, Annotationen, IDs, Datumsangaben und Zahlen in Tabellen. Instrument Sans ist die geprüfte Alternative für die Headline-Ebene (in `--font-sans-alt` hinterlegt). Keine Serifen. Große Headlines kompakt: Zeilenhöhe 0.93–1.03, Tracking −0.02 bis −0.03em. Lesetext luftig: 1.6 bei maximal 70ch.

**Raster und Layout.** 12 Spalten Desktop, 8 Tablet, 4 Mobile. Content maximal 1440px, Gutter clamp(16px, 4vw, 48px), große Außenränder auf breiten Displays. Sektionsabstand clamp(56px, 7vw, 112px). Fixe Elemente: nur der Header ist sticky (visuell sehr zurückhaltend, 1px Unterkante, leichter Blur); in Artikeln sind Marginalspalten sticky. Kartenraster werden als `display:grid; gap:1px` auf einer `--line`-Fläche gebaut — die Trennlinien sind die Rasterlücken, nicht Rahmen einzelner Karten.

**Hintergründe.** Ruhige Flächen, keine Bilder hinter Text, keine Gradienten. Zwei charakteristische Texturen: das technische Raster (80px, Deckkraft 0.045, nur im Hero und auf großen dunklen Flächen) und die 135°-Schraffur für Bildplatzhalter. Beide sind dekorativ und für Screenreader ausgeblendet.

**Karten.** Rechteckig, `--surface` auf `--canvas`, 1px `--line`, Radius 0–2px, **kein Schatten**. Hover verschiebt Hintergrund (surface → canvas) und Rahmen (line → lineStrong) — keine Skalierung, kein Anheben. Die einzige Ausnahme vom schattenlosen System ist der modale Dialog (`--shadow-overlay`), weil er über allem liegt.

**Rahmen und Radien.** Standard 1px `--line`; aktive oder technische Linien 1px `--line-strong`; Akzentkante 2px Orange. Buttons und Eingabefelder rechteckig, maximal 2px Radius. Keine Pillen, keine runden SaaS-Karten.

**Zustände.** Hover: Orange wird dunkler (accentHover), Outline-Buttons füllen sich mit Ink und invertieren den Text, Links wechseln auf accentHover und verschieben den Pfeil um 3px. Press: keine Skalierung, nur Farbwechsel. Disabled: `--surface-muted` mit `--line-strong` Text. Fokus: 2px `--focus` (#006BFF) mit 3px Offset, global in `base.css` — niemals entfernen; Orange allein ist als Fokusindikator zu unsicher.

**Bewegung.** Micro 150ms, Standard 220ms, Reveal maximal 480ms, Easing cubic-bezier(0.2, 0, 0.2, 1). Erlaubt sind subtile Reveals, kontrolliert aufbauende Linien, Hover-Verschiebungen und schrittweise Systemdiagramme. Verboten: Introanimationen, Scrolljacking, Cursor-Gimmicks, Parallax, dauerhaft pulsierende Elemente. Bei `prefers-reduced-motion` gehen alle Dauern auf 0; jeder Inhalt ist ohne Animation vollständig verständlich.

**Transparenz und Blur.** Nur am Sticky-Header (94 % Deckkraft plus 6px Blur) und am Dialog-Grund (rgba(11,11,11,0.55)). Kein Glassmorphism.

**Bildsprache.** Porträt in Schwarz-Weiß oder stark entsättigt, ruhig, konzentriert, seitlicher Blick, architektonischer oder industrieller Kontext. Projektbilder: freigegebene Screenshots, abstrahierte Systemmodelle, Dokumentausschnitte, 3D-Ansichten, technische Detailfotografie. Verboten: Roboter, leuchtende Gehirne, Leiterplatten, Hologramm-Hände, Rechenzentren, Stockfotografie, KI-generierte Personen, dekorative Laptop-Mockups. Solange nichts freigegeben ist, bleibt `ImagePlaceholder` sichtbar stehen und benennt, was dort hingehört.

**Verbote (aus Abschnitt 28 des Briefings).** Neon-AI-Gradienten, Lila-Blau als AI-Farbwelt, Glassmorphism, große runde SaaS-Karten, Bento-Grid als Mode, Crypto-/Gaming-Ästhetik, dekorative Code-Screenshots, animierte Hintergründe hinter Inhalten, Skill-Clouds, Technologie-Logo-Wände, erfundene Kennzahlen und Kundenstimmen.

## Iconography

Es existiert kein eigenes Icon-Set und keine Icon-Font in den Quellen. Prinzip laut Briefing: geometrisch, monochrom, Linienstärke ~1.5px, keine gefüllten bunten oder 3D-Icons, konsistente optische Größe.

**Substitution (bitte bestätigen):** Als nächste Entsprechung wird **Lucide** per CDN empfohlen (`https://unpkg.com/lucide@latest`), mit `stroke-width="1.5"` statt der Voreinstellung 2. Lucide ist geometrisch, rein linienbasiert und passt zur technischen Anmutung.

Im System selbst werden Icons bewusst sparsam eingesetzt. Wiederkehrende Zeichen sind **typografisch**, nicht grafisch:

- Pfeile `→ ↓ ←` und Trenner `/` in IBM Plex Mono (ArrowLink, Breadcrumbs, DatePicker-Navigation)
- `+` / `−` im Accordion statt Chevron
- `✕` zum Schließen, `⌕` in der Suche, `▾` im Select
- Statusmarker als 8px-Quadrat (Toast), nicht als Kreis oder Icon
- Spinner als Monospace-Zeichenfolge `| / — \\`
- Eckwinkel und Maßlinien aus 1px-Borders, keine SVG-Zeichnungen

Emoji werden nicht verwendet. Hand gezeichnete SVG-Illustrationen werden nicht erstellt.

## Intentional additions

Das Briefing definiert keine Komponentenbibliothek im technischen Sinn, sondern eine Liste in Abschnitt 21. Zusätzlich zu dieser Liste wurden aufgenommen, weil der Auftrag „gängige Website- und Web-App-Komponenten" ausdrücklich einschloss:

- `DatePicker` / `TimePicker` — Terminwunsch im Kontaktformular, Zeiträume in App-Oberflächen
- `LoginForm` — Zugang zu internen Werkzeugen und Kundenportalen
- `Sidebar`, `Tabs`, `Dialog`, `Toast`, `Tooltip`, `Spinner`, `Switch`, `Accordion`, `DataTable`, `EmptyState`, `Breadcrumbs` — App- und Übersichtsoberflächen
- `ImagePlaceholder` — macht fehlende, freizugebende Assets im Entwurf explizit sichtbar

## Offene Punkte

- Font-Binaries für Geist Sans und IBM Plex Mono; aktuell Google-Fonts-Auslieferung
- finale Entscheidung Geist Sans vs. Instrument Sans für die Headline-Ebene
- Porträt und Arbeitsbild, freigegebene Projektartefakte
- Verifizierung [REDACTED], Jahre Berufserfahrung, Projektstationen mit Jahreszahlen
- Bestätigung der Anrede „Sie", Kontaktwege, Terminbuchung, Kundenlogos
- Nuance des Signalorange nach Foto- und Kontrasttest
