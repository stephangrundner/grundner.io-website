# Qualitätsanforderungen

## Accessibility

Ziel: WCAG 2.2 AA.

### Semantik

- genau eine H1 pro Seite, logische Heading-Hierarchie
- Landmarken: header, nav, main, footer
- Skip Link
- Listen für wiederholte Karten und Schritte
- korrekte Formularlabels; Formularfehler textlich erklärt
- Buttons als Buttons, Links als Links
- verständliche Linktexte

### Tastatur

- gesamte Navigation bedienbar
- Mobile-Menü mit Fokusmanagement, schließt mit Escape
- Fokus wird sinnvoll zurückgegeben
- keine Keyboard Traps

### Visuell

- Kontraste automatisiert und manuell geprüft
- focus-visible klar erkennbar (2 px `--focus`, 3 px Offset; Orange allein
  genügt nicht als Fokusindikator)
- orange Flächen mit geprüftem Textkontrast
- 200 % Zoom unterstützt
- Touch Targets mindestens ca. 44×44 px
- Information nicht nur über Orange oder Linien vermittelt

### Medien

- Alt-Texte für informative Bilder
- dekorative SVGs `aria-hidden`
- Diagramme mit Textalternative oder verständlicher Begleitbeschreibung

### Animation

- `prefers-reduced-motion` respektieren: Bewegungen deaktivieren oder durch
  einfache Opacity-Änderungen ersetzen
- keine Funktion ausschließlich über Bewegung vermitteln

## Performance-Budget

- Lighthouse Performance auf repräsentativen Seiten möglichst ≥ 90
- Accessibility, Best Practices und SEO möglichst ≥ 95
- LCP ≤ 2,5 s unter realistischen Mobilbedingungen
- CLS ≤ 0,1
- INP ≤ 200 ms

Regeln:

- Seiten benötigen möglichst wenig Client-JavaScript.
- Animationsbibliotheken nicht im globalen Bundle, wenn nur einzelne Sektionen
  sie nutzen.
- keine clientseitige Verarbeitung von Markdown/MDX
- Hero-Porträt priorisieren und korrekt dimensionieren; keine Preload-Flut
- Font Subsets, nur benötigte Schnittgewichte, `font-display: swap`
- Bilder in modernen Formaten (AVIF/WebP), sinnvolle `sizes`, feste Seitenverhältnisse
- optional Web Vitals erfassen, ohne personenbezogene Daten

## SEO

### Metadata

- zentrale Default-Metadata, seitenindividuelle Titles und Descriptions
- Canonical URLs
- Open Graph; Twitter/X-Card-Metadaten nur als technisches Format
- Icons und Manifest

### Strukturierte Daten

- Startseite: `Person` und gegebenenfalls `ProfessionalService`
- Insights: `Article`
- Detailseiten: `BreadcrumbList`
- keine falschen Ratings, Reviews oder Unternehmensdaten

### Technische SEO

- Sitemap und robots.txt
- RSS-Feed für veröffentlichte Insights
- verständliche 404-Seite
- keine Indexierung von Draft-Inhalten
- interne Links zwischen Leistungen, Projekten und Insights
- keine leeren Tag- oder Filterseiten

### URL-Regeln

- deutsche, lesbare Slugs in Kleinbuchstaben mit Bindestrichen
- keine Datumsordner
- Slugs nach Veröffentlichung stabil halten
- bei Änderung Weiterleitung dokumentieren und einrichten
  (auf GitHub Pages nur clientseitig möglich, siehe ADR-0001)

## Security

- Content Security Policy, Referrer Policy und Permissions Policy so weit
  setzen, wie statisches Hosting es zulässt (ADR-0001: keine eigenen
  HTTP-Header, nur eingeschränkt über `<meta>`).
- keine Secrets in ausgelieferten Dateien
- Dependencies regelmäßig prüfen; Major-Updates nie ungeprüft übernehmen
- externe Links sicher behandeln
- keine gefährliche HTML-Injektion aus Inhalten
- Nutzereingaben werden beim Empfänger validiert und escaped
- keine Source Maps oder internen Dateien in der ausgelieferten Website

## Datenschutz

- keine nicht notwendigen Cookies ohne Einwilligung
- keine invasiven Tracker ohne Einwilligung (siehe [Analytics](analytics.md))
- keine extern zur Laufzeit geladenen Fonts, Icons oder Skripte von CDNs
  (Ausnahme: einwilligungspflichtige Anbieter nach Zustimmung)
- YouTube, Calendly und ähnliche Embeds nicht ungeprüft direkt laden;
  bevorzugt Link oder einwilligungsgesteuerte Einbindung
- Kontaktformulardaten nie vollständig loggen; keine Speicherung in einer
  Datenbank in Version 1

## Browser und Geräte

- responsive geprüft bei 390, 768, 1024, 1440 px
- Safari, Chrome, Firefox, Edge
- iOS Safari und Android Chrome

## Verifikation

### Unit Tests

- Content-Schema-Validierung
- Sortierung und Filterung veröffentlichter Inhalte
- Lesedauer-Berechnung
- URL- und Metadata-Helfer
- Kontaktformular-Validierung
- Production Guard
- Analytics-Adapter und Einwilligungslogik

### Komponententests

- Buttonzustände
- Mobile Navigation
- Kontaktformular
- Artikelkomponenten
- Karten mit fehlenden optionalen Daten
- Fehlerzustand eingebundener externer Anwendungen

### End-to-End

1. Startseite lädt und primärer CTA funktioniert.
2. Navigation erreicht alle Hauptseiten.
3. Projektübersicht öffnet Case.
4. Insights-Übersicht öffnet Artikel.
5. Projektprofil und PDF-Link sind erreichbar.
6. Kontaktformular validiert Fehler.
7. Kontaktformular sendet erfolgreich mit Mock-Empfänger.
8. 404 wird korrekt angezeigt.
9. Ohne Einwilligung werden keine einwilligungspflichtigen Skripte geladen.

### Accessibility-Tests

axe-Smoke-Tests für Startseite, Mobile Navigation, Insight-Detail, Case-Detail,
Projektprofil und Kontakt; zusätzlich manuelle Tastaturprüfung und
VoiceOver-Schnelltest auf zentralen Nutzerwegen.

### Visuelle Tests

Screenshots für Startseite (1440 und 390 px), Insight-Detail (1440 und 390 px),
Projektprofil (1440 px und Print). Baselines erst nach Designfreigabe
festschreiben.

## Qualitäts-Gates

Jeder Merge nach `main` beziehungsweise jedes Deployment besteht:

- Lint, Typecheck, Unit Tests
- Content-Validierung inklusive Production Guard
- Production Build
- End-to-End-Smoke-Tests

Zusätzlich:

- keine Console Errors
- keine kaputten internen Links
- keine öffentlichen Drafts
- keine Verification Marker
- keine fehlenden Alt-Texte bei informativen Bildern
- keine ungeprüften Rechtstexte

## Definition of Done pro Feature

- funktionale Anforderungen erfüllt
- Design System eingehalten
- Desktop und Mobile geprüft
- Tastaturbedienung funktioniert
- notwendige Tests existieren
- Typecheck und Lint bestehen
- keine Console Errors
- kein erfundener Content
- relevante Dokumentation aktualisiert
- keine unnötige neue Abhängigkeit
