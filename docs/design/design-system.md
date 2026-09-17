# Design System

## Quelle und Rangfolge

Das Design System wird in Claude Design gepflegt:
https://claude.ai/design/p/22cbd55e-2f9d-40ab-9a5c-0998971b3b21

Unveränderter Snapshot mit Tokens, Komponenten-Prototypen und
Verwendungsregeln: [claude-design/](claude-design/SNAPSHOT.md), Stand 2026-09-17.
Dieses Dokument ist die ausgewertete, verbindliche Fassung für die Umsetzung.

Rangfolge bei visuellen Widersprüchen:

1. explizite aktuelle Anweisung von Stephan
2. freigegebenes Design in Claude Design (Tokens, Komponenten, Templates)
3. dieses Dokument
4. Design-Briefing 0.1 (Startwerte, im Design System verfeinert)

Visuell dargestelltes Verhalten wird zusätzlich textuell in
[Seiten](../ui/pages.md) und [Komponenten](../ui/components.md) beschrieben.

## Visuelle Leitidee

> **Industrial Precision / Industrial Challenger** — die Präzision technischer
> Zeichnungen verbunden mit der Klarheit moderner digitaler Produkte und der
> Persönlichkeit eines unabhängigen Experten.

> **Industrielle Präzision trifft AI-native Softwareentwicklung.**

Die Website soll wirken wie eine hochwertige Expertenmarke mit moderner
Engineering- und Produktkultur, industrieller Präzision und technologischer
Souveränität — ein erfahrener Spezialist, kein großer anonymer Dienstleister.

Kernmerkmale:

- heller, warmer Grund; nahezu schwarze, sehr große Headlines
- kräftiges Orange als gezielter Akzent
- Schwarz-Weiß-Porträt im Hero
- technisches Raster, feine Maß-, Achs- und Konstruktionslinien
- dezente Monospace-Annotationen, nummerierte Sektionen
- große Kennzahlen, rechteckige Karten
- Mischung aus großzügigem Weißraum und informationsreichen Bereichen

Kontrollierte Erweiterungen, ohne die helle Grundwirkung zu verdrängen:

1. **Editoriale Qualität** für Insights und längere Cases: Textdramaturgie,
   Zitate, Marginalien, großzügige Lesestrecken.
2. **Systemvisualisierungen** für technische Inhalte: reduzierte Daten-,
   Prozess- und Architekturdiagramme, gegebenenfalls auf Graphitflächen.

## Wortmarke

- Es gibt **kein Symbol-Logo**. Nie ein Zeichen oder Monogramm erfinden.
- Wortmarke „STEPHAN GRUNDNER“, typografisch: Uppercase, Gewicht 600, Tracking
  `0.14em`.
- Optionaler Descriptor: „AI-native Software & Transformation“ in Monospace.

## Tokens

Technische Quelle bis zum Bootstrap: [claude-design/tokens/](claude-design/tokens/).
Einstieg: `styles.css`. Nach dem Bootstrap sind die Tokens im Code die technische
Quelle und müssen dem Snapshot entsprechen.

### Farbe

| Token | Wert | Verwendung |
|---|---|---|
| `--canvas` | `#F5F2EB` | Seitenhintergrund |
| `--surface` | `#FBF9F4` | erhöhte Flächen, Karten |
| `--surface-muted` | `#ECE8DF` | sekundäre Flächen, Disabled, Platzhalter |
| `--ink` | `#0B0B0B` | Text |
| `--ink-muted` | `#5F5D58` | Metatext |
| `--graphite` | `#1A1A1A` | dunkle Sektionen |
| `--graphite-elevated` | `#252525` | Karten auf Graphit |
| `--graphite-line` | `#3A3A3A` | Linien auf Graphit |
| `--line` | `#D3CFC5` | Standardlinien, Kartenraster |
| `--line-strong` | `#9B978F` | aktive/technische Linien |
| `--accent` | `#FF5A1F` | primärer CTA, Sektionsnummern, Marker |
| `--accent-hover` | `#E94A10` | Hover/Active |
| `--on-accent` | `#0B0B0B` | Text auf Orange |
| `--on-dark` | `#F5F2EB` | Text auf Graphit |
| `--focus` | `#006BFF` | Fokusring |
| `--danger` | `#E94A10` | Fehlertext |

Semantische Aliase (`--bg-page`, `--bg-raised`, `--text-body`, `--text-meta`,
`--border-default`, `--border-active`, `--action-primary-*` u. a.) werden in
Komponenten bevorzugt. Dunkle Flächen setzen `data-surface="dark"` als Scope —
kein globales Dark Theme.

Farbregeln:

- Orange als Fläche nur beim primären CTA; sonst als Sektionsnummer,
  Statusmarker, Diagrammfokus, 2-px-Kante am Pull Quote.
- Text auf Orange ist schwarz, nie weiß.
- Keine Orangeflächen als Dekoration, keine zweite Markenfarbe.
- Dunkle Sektionen bewusst gesetzt, kein durchgehendes Dark Theme.
- Diagramme monochrom; Orange nur für Fokus, Aktivität oder Wirkung.
- Genaue Nuance des Orange nach Foto- und Kontrasttest — Offen.

### Typografie

| Token | Wert |
|---|---|
| `--font-sans` | Geist, Helvetica, Arial, sans-serif |
| `--font-sans-alt` | "Instrument Sans" (geprüfte Alternative für Headlines) |
| `--font-mono` | "IBM Plex Mono", ui-monospace, monospace |
| `--fs-display-hero` | `clamp(2.75rem, 6.5vw, 7.5rem)` |
| `--fs-h1` | `clamp(2.25rem, 5vw, 5.5rem)` |
| `--fs-h2` | `clamp(1.75rem, 3.5vw, 4rem)` |
| `--fs-h3` | `clamp(1.25rem, 1.8vw, 2rem)` |
| `--fs-lead` | `clamp(1.0625rem, 1.35vw, 1.5rem)` |
| `--fs-body` / `--fs-body-sm` | `1.0625rem` / `0.9375rem` |
| `--fs-label` | `0.8125rem` |
| `--fs-mono` / `--fs-mono-sm` | `0.71875rem` / `0.65625rem` |
| `--lh-display` … `--lh-body` | `0.93`, `0.98`, `1.03`, `1.15`, `1.45`, `1.6`; `--lh-tight` `1.3` |
| `--fw-*` | 400, 500, 600, 700 |
| `--tracking-display` / `-heading` | `-0.03em` / `-0.02em` |
| `--tracking-mono` / `-wordmark` | `0.08em` / `0.14em` |

Regeln:

- Geist Sans für alles Sichtbare; IBM Plex Mono ausschließlich für Metadaten,
  Labels, Nummern, Annotationen, IDs, Datumsangaben, Zahlen in Tabellen.
- Keine Serifen.
- Große Headlines kompakt, Lesetext luftig (1,6 bei maximal 70ch).
- Uppercase nur für Monospace-Labels, Sektionsnummern, Wortmarke und
  Metazeilen; keine Uppercase-Headlines.
- Hero-Headline auf Mobile dominant, ohne problematische Einzelwortumbrüche.
- Lange deutsche Wörter: `hyphens: auto`, korrekte `lang`-Attribute, gezielte
  Soft-Hyphens nur bei Bedarf.
- Finale Wahl Geist Sans vs. Instrument Sans für Headlines — Offen.

**Font-Auslieferung:** Claude Design lädt die Schriften als Übergangslösung von
Google Fonts (`tokens/fonts.css`, dort selbst als Substitution markiert). Die
Website bündelt die Schriften lokal; keine Laufzeitanfrage an Google Fonts
([Qualität](../requirements/quality.md#datenschutz)). Geist, Instrument Sans und
IBM Plex Mono stehen unter der SIL Open Font License.

### Abstände und Layout

| Token | Wert |
|---|---|
| `--space-1` … `--space-40` | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 px |
| `--content-max` | `1440px` |
| `--measure` | `70ch` |
| `--gutter` | `clamp(16px, 4vw, 48px)` |
| `--section-y` | `clamp(56px, 7vw, 112px)` |
| `--control-height` / `-sm` | `48px` / `40px` |
| `--touch-min` | `44px` |
| `--header-height` | `72px` |

- Kein Spacing außerhalb der Skala.
- Große vertikale Abstände zwischen Hauptsektionen, enge präzise Abstände in
  technischen Labels.

### Rahmen, Flächen, Effekte

| Token | Wert |
|---|---|
| `--radius-0` / `--radius-1` | `0` / `2px` |
| `--hairline` / `--hairline-strong` | 1 px `--border-default` / `--border-active` |
| `--accent-rule` | 2 px `--accent` |
| `--grid-size` / `--grid-opacity` | `80px` / `0.045` |
| `--hatch` | 135°-Schraffur für Bildplatzhalter |
| `--shadow-overlay` | nur modaler Dialog |
| `--focus-ring` / `--focus-offset` | 2 px `--focus` / `3px` |

### Bewegung

| Token | Wert |
|---|---|
| `--dur-micro` | `150ms` |
| `--dur-standard` | `220ms` |
| `--dur-reveal` | `480ms` (Maximum) |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0.2, 1)` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

Bei `prefers-reduced-motion` gehen alle Dauern auf 0.

## Raster und Layout

- 12 Spalten Desktop, 8 Tablet, 4 Mobile.
- Content maximal 1440 px, große Außenränder auf breiten Displays.
- Nur der Header ist sticky: sehr zurückhaltend, 1 px Unterkante, 94 %
  Deckkraft, 6 px Blur. In Artikeln sind Marginalspalten sticky.
- **Kartenraster** als Grid mit 1 px Lücke auf einer `--line`-Fläche — die
  Trennlinien sind die Rasterlücken, nicht Rahmen einzelner Karten.

### Responsive Zielgrößen

- Mobile-Referenz 390 px, Minimum 320–360 px
- Tablet ca. 768 px, kleiner Desktop 1024–1280 px
- primärer Desktopentwurf 1440 px, breite Ansicht bis ca. 1600 px kontrollieren
- Breakpoints am Inhalt ausrichten; Header wechselt ab 1024 px auf mobile
  Navigation

Mobile ist eigenständig gelöst, nicht zusammengeschoben: Informationshierarchie,
Bildposition, Navigation, Proof und Annotationen werden bewusst neu geordnet.

## Hintergründe, Raster und Annotationen

- Ruhige Flächen, keine Bilder hinter Text, keine Gradienten.
- **Technisches Raster:** 80 px, Deckkraft 0,045, nur im Hero und auf großen
  dunklen Flächen; als CSS-Hintergrund, dekorativ, für Screenreader verborgen.
- **Schraffur** nur für Bildplatzhalter.

Erlaubte Annotationselemente: feines Hintergrundraster, Achsenkreuze, kurze
Maßlinien, Sektionsnummern `01`, `02`, …, Monospace-Begriffe, horizontale
Leitlinien, reduzierte technische Klammern, Status- und Kontextlabels.
Eckwinkel und Maßlinien aus 1-px-Borders, keine SVG-Zeichnungen.

Regeln:

- sehr niedriger Kontrast; nie durch längere Fließtexte
- nicht jede Sektion dekorieren
- Annotationen semantisch, nicht zufällig
- Mobile: stark reduzieren oder ausblenden
- keine technische Zeichnung imitieren ohne inhaltlichen Bezug

## Karten und Zustände

- Rechteckig, `--surface` auf `--canvas`, 1 px `--line`, Radius 0–2 px,
  **kein Schatten**.
- Hover: Hintergrund surface → canvas, Rahmen line → line-strong; keine
  Skalierung, kein Anheben. Hover-Inhalte bleiben auf Touch nicht verborgen.
- Buttons und Eingabefelder rechteckig, maximal 2 px Radius. Keine Pillen.
- Hover: Orange wird dunkler; Outline-Buttons füllen sich mit Ink und
  invertieren; Links wechseln auf accent-hover, Pfeil verschiebt sich um 3 px.
- Press: keine Skalierung, nur Farbwechsel.
- Disabled: `--surface-muted` mit `--line-strong`-Text.
- Fokus: 2 px `--focus` mit 3 px Offset, global — niemals entfernen.
- Transparenz und Blur nur am Sticky-Header und am Dialog-Grund
  (`rgba(11,11,11,0.55)`). Kein Glassmorphism.

## Icons

- Kein eigenes Icon-Set. Prinzip: geometrisch, monochrom, Linienstärke ca.
  1,5 px, keine gefüllten, bunten oder 3D-Icons, konsistente optische Größe.
- Icons sparsam. Wiederkehrende Zeichen sind typografisch in IBM Plex Mono:
  `→ ↓ ←`, Trenner `/`, `+`/`−` im Accordion, `✕` Schließen, `⌕` Suche,
  `▾` Select, Statusmarker als 8-px-Quadrat, Spinner als `| / — \`.
- Keine Emoji, keine handgezeichneten SVG-Illustrationen.
- Lucide mit `stroke-width` 1,5 als Icon-Bibliothek — vom Design System
  empfohlen, Bestätigung Offen. Einbindung gebündelt und einzeln importiert,
  nicht per CDN.

## Bildsprache

### Porträt

- ein starkes Hero-Porträt, optional ein Arbeits- oder Kontextbild
- authentisch, ruhig, konzentriert, selbstbewusst; seitlicher oder leicht
  außermittiger Blick
- Schwarz-Weiß oder stark entsättigt, klare Lichtführung
- moderner, architektonischer oder technisch-industrieller Kontext
- Fokuspunkt für verschiedene Zuschnitte dokumentieren
- vermeiden: verschränkte Arme, künstliches Lächeln, unauthentischer Anzug,
  Hände am Laptop, Meetingraum-Stockästhetik, übertriebene Beleuchtung
- keine AI-generierte Ersatzperson

### Projektbilder

- freigegebene Screenshots (bei Bedarf anonymisiert), abstrahierte
  Systemmodelle, Dokumentausschnitte, 3D-/Konfigurationsansichten, industrielle
  Umgebungen mit Case-Bezug, technische Detailfotografie
- vermeiden: Roboter, leuchtende Gehirne, Leiterplatten, Hologramm-Hände,
  Rechenzentren, Stockfotografie, AI-generierte Personen, dekorative Laptop- und
  Smartphone-Mockups
- Alt-Text beschreibt Inhalt und Funktion; Freigabestatus in
  [Content-Status](../content/content-status.md)

### Platzhalter

`ImagePlaceholder` (Schraffur mit Monospace-Beschriftung) macht fehlende,
freizugebende Bilder sichtbar und wird nie durch Stockfotos oder generierte
Bilder ersetzt.

Ob ein Platzhalter in Production sichtbar bleiben darf oder ein freigegebenes
Foto Voraussetzung für die Veröffentlichung ist: Offen. Das Design System lässt
Platzhalter stehen, die Implementierungsspezifikation 0.1 verlangte für
Production ein echtes Foto.

## Bewegung

Animation unterstützt Verständnis und Wertigkeit, ist nie Hauptdarsteller.

Erlaubt:

- subtile Reveals bei Sektionen
- kontrolliert aufbauende Linien oder Raster
- Hover-Verschiebung von Linie, Pfeil oder Akzent
- schrittweise aufgebaute Systemdiagramme
- dezente Header-Transformation beim Scrollen

Inhalte sind ohne Animation vollständig sichtbar und verständlich; Aktivierung
ohne Flash oder Layout Shift.

Verboten: Introanimationen, Scrolljacking, Cursor-Gimmicks, dauerhaft
pulsierende Elemente, Parallax, Autoplay-Video mit Ton.

## Designverbote

- Neon-AI-Gradienten, Lila-Blau als AI-Farbwelt
- Roboter, Gehirne, holografische Interfaces
- Glassmorphism
- große runde SaaS-Karten, übermäßig abgerundete Buttons
- Bento-Grid als Modeerscheinung
- Crypto-, Gaming- oder Cybersecurity-Ästhetik
- generische Stockfotografie
- dekorative Code-Screenshots ohne Aussage
- animierter Hintergrund hinter Inhalten
- Dark Mode als primäre Website-Optik
- Skill-Clouds, Technologie-Logo-Wände
- erfundene Kennzahlen und Kundenstimmen
- austauschbare Marketingformulierungen, übertriebene Selbstdarstellung

## Social-Ableitungen

Formate, die sich visuell aus der Website ableiten:

- quadratische Quote Card
- LinkedIn-Carousel-Titelseite
- Diagrammkarte
- Case-Kennzahl
- Artikel-Teaser im Querformat (1,91:1)
- Autorenkarte

Wiedererkennung über Off-White/Schwarz/Orange, technische Linien, markante
Typografie, Nummerierung, Annotation und Wortmarke. Keine zusätzlichen
Social-Media-Farbwelten, kein paralleles Branding.

Pro Insight optional eigenes Social-Bild, sonst generiertes Open-Graph-Fallback.
Automatische Generierung der Formate ist eine spätere Option.

## Web-App-Oberflächen

Das Design System trägt auch dichte Anwendungsoberflächen (UI-Kit „Spec &
Knowledge Workspace“ mit Login, Sidebar, Tabellen, Dialogen, Toasts). Regeln:

- dunkle Fläche nur für Navigation und Systemmeldungen; Arbeitsfläche bleibt
  warm und hell
- Zahlen, IDs, Datumsangaben und Statuslabels in Monospace, in Tabellen
  rechtsbündig
- genau ein orangefarbener CTA pro Bereich
- `Switch`, `Sidebar`, `Toast`, `Tooltip` nur in App-Oberflächen

Relevant für eingebundene externe Anwendungen
([Externe Anwendungen](../requirements/external-applications.md)).

## Abnahmekriterien

Das Design ist erfolgreich, wenn alle Fragen mit Ja beantwortet werden:

**Marke:** Wirkt Stephan wie ein selbstbewusster technologischer Challenger?
Hochwertiger als ein typisches Freelancer-Portfolio? Glaubwürdig für
DACH-Mittelstand und Industrie? Strategie und Umsetzung sichtbar?

**Differenzierung:** AI-native Engineering sichtbar ohne AI-Klischees?
Unterschied zu klassischem Entwickler und zu reiner Unternehmensberatung
erkennbar?

**Zielgruppen:** Versteht ein Entscheider das Nutzenversprechen in wenigen
Sekunden? Findet ein Vermittler Rollen, Skills und Einsatzmodell schnell? Hat
jede Zielgruppe einen klaren nächsten Schritt?

**Content:** Funktioniert die Website mit längeren Fachbeiträgen? Lassen sich
Inhalte konsistent für Social Media ableiten? Sind Cases nach Ergebnis statt
Technologie strukturiert?

**Visual Design:** Orange gezielt statt inflationär? Raster charakteristisch,
aber nicht störend? Typografie stark und lesbar? Präzise statt
dekorativ-technisch? Vollständig ohne Animation funktionsfähig?

**Responsive und Accessibility:** Mobile Informationshierarchie eigenständig
gelöst? Hero auf kleinen Geräten verständlich? Alles per Tastatur und Touch
nutzbar? Kontraste und Fokus mindestens WCAG 2.2 AA?
