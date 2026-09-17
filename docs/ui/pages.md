# Seiten, Navigation und Nutzerwege

## Informationsarchitektur

### Hauptnavigation

1. Leistungen
2. Projekte
3. Insights
4. Profil
5. Kontakt

- Primärer Header-CTA: **Projekt besprechen**
- Sekundärer, gut auffindbarer Zugang: **Projektprofil** (Utility-Link im
  Header, im mobilen Menü unterhalb der Hauptnavigation)

„Insights“ statt „Blog“: professioneller, nicht auf chronologische Neuigkeiten
beschränkt, passend für Thesen, Field Notes und Deep Dives.

### Routen

| Route | Seite | Inhaltsquelle |
|---|---|---|
| `/` | Startseite | individuell komponiert, Texte möglichst ausgelagert |
| `/leistungen` | Leistungen | strukturierte Liste Leistungen |
| `/projekte` | Projektübersicht | Projekte |
| `/projekte/<slug>` | Case Study | Projekt |
| `/insights` | Insights-Übersicht | Insights |
| `/insights/<slug>` | Insight | Insight |
| `/profil` | Profil | Inhaltsseite und strukturierte Listen |
| `/projektprofil` | Projektprofil | Profil, Skills, Projekte |
| `/kontakt` | Kontakt | Inhaltsseite |
| `/impressum` | Impressum | Inhaltsseite |
| `/datenschutz` | Datenschutz | Inhaltsseite |
| 404 | Nicht gefunden | — |

Später, erst bei ausreichend eigenständigem Inhalt: Leistungsdetailseiten
`/leistungen/ai-native-engineering`, `/leistungen/prototyping-produktentwicklung`,
`/leistungen/software-architecture`, `/leistungen/technical-leadership`.

Seiten externer Anwendungen und deren Fehlerseite: siehe
[Externe Anwendungen](../requirements/external-applications.md).

### Umfang Version 1

Startseite, gemeinsame Leistungsseite, Projektübersicht, zwei bis drei Case
Studies, Insights-Übersicht, drei grundlegende Beiträge, Profil, Projektprofil,
Kontakt, Impressum und Datenschutz.

## Nutzerwege

| Besucher | Primärer Weg | Ergebnis |
|---|---|---|
| Vermittler | Startseite → Projektprofil → Profil-PDF/Kontakt | Einordnung und Projektanfrage |
| direkter Entscheider | Startseite → Leistung → Case Study → Kontakt | qualifiziertes Erstgespräch |
| Social-Media-Leser | Beitrag → verwandter Case → Leistung → Kontakt | Expertise verstehen, Kontakt |
| Suchmaschinenbesucher | Fachartikel → weitere Insights → Profil/Leistung | Vertrauen und Wiederkehr |
| Empfehlungskontakt | Startseite → Projekte → Profil → Kontakt | Bestätigung der Empfehlung |

Jede inhaltliche Seite hat eine sinnvolle nächste Aktion. Keine inhaltlichen
Sackgassen.

### CTA-Hierarchie

1. Projekt besprechen
2. Projekte ansehen
3. Projektprofil ansehen
4. Fachbeitrag lesen

Maximal ein primärer CTA pro Sichtbereich.

## `/` — Startseite

Reihenfolge; Sektionen ab Punkt 3 mit fortlaufender Sektionsnummer:

1. Header
2. Hero
3. Proof-Leiste
4. Standpunkt / Point of View
5. Leistungen
6. ausgewählte Projekte
7. Arbeitsweise
8. Zusammenarbeitsmodelle
9. kuratierte Insights
10. Kurzprofil
11. Abschluss-CTA
12. Footer

### Header

- Wortmarke, optional Descriptor „AI-native Software & Transformation“
- Hauptnavigation, Utility-Link Projektprofil, CTA „Projekt besprechen“
- Desktop: ruhig, horizontal, präzise ausgerichtet; aktiver Zustand über orange
  Unterkante; keine pillenförmigen Elemente
- Sticky, visuell sehr zurückhaltend
- Mobile: reduzierte Navigation, CTA gut erreichbar, Menü als Drawer ohne
  Mega-Menü; Projektprofil und Kontakt bleiben gut erreichbar

### Hero

- Headline (drei kontrollierte Zeilen):
  **Komplexe Probleme. / Klare Systeme. / Produktive Software.**
- Subline: „Ich unterstütze Unternehmen bei AI-native Softwareentwicklung,
  digitalen Produkten und technischer Transformation – von der Strategie bis
  zur produktiven Umsetzung.“
  Kürzere Alternative: „Strategie, Architektur und Umsetzung für produktive
  Software in der AI-native Ära.“
- Primärer CTA „Projekt besprechen“, sekundärer CTA „Projekte ansehen“
- Rollenzeile: „AI Engineering · Software Architecture · Technical Leadership ·
  Product Development“
- Porträt: echt, monochrom oder stark reduziert, im technischen Raster oder
  architektonischen Flächen; keine klassische Business-Pose; Diagramme oder
  Annotationen ergänzen, konkurrieren aber nicht mit dem Gesicht

Regeln:

- H1 im vorgerenderten HTML; CTAs ohne JavaScript nutzbar
- Porträt mit stabilem Seitenverhältnis, kein Layout Shift
- technische Dekoration rein präsentativ
- Mobile: Headline dominant, aber nicht größer als der sichtbare Kontext;
  Subline früh sichtbar; primärer CTA möglichst vor dem ersten Scrollende;
  Porträt unterhalb der Headline oder als klar abgegrenzte Fläche; keine
  Textüberlagerung auf dem Gesicht; Randannotationen stark reduziert

### Proof-Leiste

Mögliche Inhalte, nur nach Verifizierung:

- zentrale Projekt-Kennzahl — Inhalt und Freigabe offen
  ([Content-Status](../content/content-status.md))
- langjährige Software- und Architekturerfahrung (konkrete Zahl oder bewusst
  weglassen)
- Projekte in Industrie, Finance und Unternehmenssoftware
- Strategie und hands-on Umsetzung aus einer Hand

Regeln:

- maximal drei bis vier Einträge; bei weniger als drei belastbaren Proofs lieber
  zwei starke
- nummerische Werte visuell dominant
- keine automatisch animierten Counter, keine erfundenen Daten
- Mobile: vertikal gestapelt oder kontrolliert horizontal scrollbar; Kernaussage
  nicht durch zu kleine Typografie entwertet

### Standpunkt / Point of View

> AI-native Engineering bedeutet nicht, bestehende Entwicklung lediglich zu
> beschleunigen. Es verändert, wie Anforderungen beschrieben, Wissen organisiert,
> Software geplant und Produkte entwickelt werden.

Grenzt ab von Tooltrainern, generischen AI-Beratern und reiner
Auftragsentwicklung. Umsetzung: großes Statement mit technischer
Randannotation, gegebenenfalls Systemmodell; im Design System auf Graphitfläche.

### Leistungen

Vier Leistungsfelder, nummeriert `01`–`04`:

1. **AI-native Engineering & Transformation** — neue Arbeitsweisen, AI-Agenten,
   Context Engineering, Knowledge Bases sowie Spec- und Documentation-driven
   Development.
2. **Product Discovery & Prototyping** — komplexe Ideen strukturieren, fachliche
   Modelle entwickeln und in kurzer Zeit funktionierende Software schaffen.
3. **Software Architecture & Technical Leadership** — Architektur, technische
   Entscheidungen, Entwicklungsführung, Reviews und Stabilisierung
   anspruchsvoller Vorhaben.
4. **Langfristige Produktpartnerschaft** — Begleitung von der ersten Idee bis
   zum produktiven System, als Technical Lead, Engineering Lead oder
   strategischer Entwicklungspartner.

- Karten im 1-px-Rasterverbund; Desktop vier Spalten, Tablet zwei, Mobile eine
- semantisch als Liste
- Hover darf eine Richtung oder einen verwandten Case andeuten, trägt aber keine
  wesentliche Information

### Ausgewählte Projekte

Zwei bis vier starke Cases, keine Logowand. Jede Vorschau zeigt Kunde oder
Branche, Ausgangsproblem, Rolle, Ergebnis, zentrale Kennzahl (sofern belegbar)
und Link zur Case Study. Technologien erst in der Vertiefung.

- explizit hervorgehobene Projekte in redaktioneller Reihenfolge; Fallback:
  neueste veröffentlichte Cases
- Bilder nur mit Alt-Text und Freigabestatus

### Arbeitsweise

1. Problem und Domäne verstehen
2. Wissen und Anforderungen strukturieren
3. Modell und Architektur entwickeln
4. schnell einen belastbaren Produktstand erzeugen
5. produktiv setzen und weiterentwickeln
6. Wissen im Unternehmen und im System verankern

- geordnete Liste, optional mit entstehendem Artefakt je Schritt
- technischer Ablauf oder Dokumentfluss, kein bunter Marketing-Prozess
- ohne Animation vollständig sichtbar und verständlich

### Zusammenarbeitsmodelle

- Assessment oder strategischer Workshop
- Prototype Sprint
- Projektmandat
- Technical-/Engineering-Lead-Mandat
- Fractional Engagement
- langfristige Produktpartnerschaft

Senkt Kaufhürden: kurze Einstiege und langfristige Mandate sind möglich.

### Kuratierte Insights

- drei Beiträge: ein grundlegender Standpunkt, eine praktische
  Projekterfahrung, ein aktueller Fachbeitrag
- keine chronologische News-Liste; mit Leistungen oder Projekten verknüpft
- Format, Säule, Autor und Lesedauer sichtbar

### Kurzprofil

- professionelles Foto
- wenige Sätze Erfahrung und Arbeitsphilosophie
- ausgewählte Kunden- oder Projektkontexte
- Links zu Profil und Projektprofil
- keine Hobbys, Familiengeschichte oder private Selbstdarstellung

### Abschluss-CTA

> Sie haben eine komplexe Produktidee, einen ineffizienten Prozess oder möchten
> Softwareentwicklung mit AI neu aufstellen?

Aktionen: Erstgespräch vereinbaren, Nachricht senden, Projektprofil ansehen.
Im Design System maximal zwei Aktionen, davon eine primär — Auswahl bei der
Umsetzung.

## `/leistungen`

Übersetzt Expertise in konkret kaufbare Unterstützung. Jede Leistung beantwortet:

1. Für welche Situation ist sie gedacht?
2. Welches Problem löst sie?
3. Was macht Stephan konkret?
4. Welches Ergebnis entsteht?
5. Wie kann die Zusammenarbeit beginnen?
6. Welche Projekte oder Beiträge belegen die Kompetenz?

Aufbau: Intro und Positionierung, Übersicht der vier Leistungsfelder, je Leistung
Situation, Problem, Beitrag, Ergebnis und typische Formate,
Zusammenarbeitsmodelle, passende Cases, passende Insights, CTA.

## `/projekte`

- Intro
- Cases nach Problem, Verantwortung und Ergebnis, keine generische Galerie
- Filter erst bei ausreichender Menge; mögliche spätere Filter: AI-native
  Engineering, digitale Produkte, Industrie und Produktion,
  Unternehmenssoftware, 3D und Konfiguration, Architektur und Transformation
- keine leeren Filter oder vorbereiteten Kategorien ohne Inhalt

## `/projekte/<slug>` — Case Study

1. Titel und prägnantes Ergebnis
2. Kunde oder anonymisierte Branche
3. Zeitraum, Rolle und Kontext
4. Ausgangssituation
5. Herausforderung
6. Verantwortung von Stephan
7. Vorgehen
8. entwickelte Lösung
9. Ergebnis und Wirkung
10. besondere Erkenntnisse
11. Technologien und Methoden
12. verwandte Leistung
13. passende Insights
14. Kontakt-CTA

- Breadcrumbs
- Ergebnis und Problem prominent, Technologien sekundär
- Wechsel aus großen Aussagen, Projektartefakten, Diagrammen und kompakten Fakten
- Screenshots nur freigegeben und sinnvoll anonymisiert; keine dekorativen
  Mockups; große Kennzahlen nur bei belastbaren Daten

## `/insights`

- Intro
- hervorgehobener Beitrag, aktuelle Beiträge
- optionale Navigation nach inhaltlicher Säule; Filter nur bei echter Nutzbarkeit
- RSS-Link

## `/insights/<slug>`

- Breadcrumbs
- Format bzw. Kategorie, Titel, prägnante Kernaussage
- Management Summary
- Autor, Veröffentlichungs- und Aktualisierungsdatum, Lesedauer
- Inhaltsverzeichnis ab ca. 1.500 Wörtern (Mobile: im Textfluss oder
  ausgeblendet)
- Artikeltext mit hervorgehobenen Aussagen, optionalen Diagrammen und Artefakten
- passende Case Study, verwandte Beiträge, passende Leistung
- kontextbezogener Kontakt-CTA
- Share Actions (Copy-Link, optional LinkedIn)
- strukturierte Daten `Article`

Mobile: Lesbarkeit priorisiert; Marginalien in den Textfluss integriert oder
ausgeblendet; Tabellen horizontal scrollbar und als solche erkennbar; Code,
Diagramme und Bilder sprengen den Viewport nicht.

## `/profil`

Beruflichen Track und Arbeitsphilosophie verdichtet darstellen, ohne zu viele
interne Details offenzulegen.

- aktuelle Positionierung
- ausgewählte Erfahrung, relevante Branchen
- Arbeitsphilosophie, technische Basis, heutiger AI-native Fokus
- ausgewählte Kunden- und Projektkontexte
- Links zu Projekten und Projektprofil
- Kontakt-CTA

Nicht enthalten: vollständiger tabellarischer Lebenslauf, private Biografie,
lange Tool-Aufzählung, Aussagen zu Vertragsverhältnissen.

## `/projektprofil`

Sachlicher und dichter als die übrige Website, erkennbar Teil derselben Marke.

UX-Ziel — ein Vermittler beantwortet innerhalb von 20 Sekunden:

- Für welche Rollen ist Stephan geeignet?
- Welche Seniorität und Verantwortung bringt er mit?
- Welche Kerntechnologien beherrscht er?
- In welchen Branchen hat er gearbeitet?
- Wie kann er eingesetzt werden?
- Wie kann ich das Profil weitergeben?

Inhalte:

- klare Rollenbezeichnungen, Kurzprofil, Kernkompetenzen
- Skill- und Technologieübersicht in Gruppen (vier bis sechs Gruppen, je wenige
  starke Einträge; keine Skill-Cloud)
- Branchen
- ausgewählte Projektstationen mit Rolle und Verantwortung
- Remote-/Vor-Ort-Modell, Einsatzregion DACH, Sprachen
- Verfügbarkeit nur, wenn aktuell gepflegt (manuell oder dynamisch — Offen)
- Kontakt
- Download des aktuellen Profil-PDFs mit Dateigröße und Aktualisierungsdatum,
  sofern bekannt

Die HTML-Seite ist die primäre Quelle. Das PDF wird in Version 1 manuell
bereitgestellt; automatische Generierung ist eine spätere Option.

Print-Ansicht: Navigation und Dekoration ausgeblendet, druckfreundliche Farben,
URLs bei Bedarf sichtbar, kontrollierte Seitenumbrüche; Skills und
Projektstationen nicht ungünstig getrennt.

## `/kontakt`

- kurze Einleitung
- Kontaktformular
- direkte E-Mail und alternative Kontaktwege sichtbar
- optional später Terminbuchung (zunächst als externer Link; eine spätere
  Einbindung lädt isoliert und fehlertolerant)
- Datenschutzinformation

### Kontaktformular

So kurz wie möglich.

| Feld | Pflicht |
|---|---|
| Name | ja |
| Unternehmen | Offen |
| E-Mail | ja |
| Rolle | nein |
| Worum geht es? (Projektkontext) | ja |
| gewünschter Zeitraum | nein |
| Datenschutzbestätigung (mit Link zur Datenschutzerklärung) | ja |
| unsichtbares Honeypot-Feld | — |

Zustände: idle, submitting, success, validation error, delivery error.

Regeln:

- Labels oberhalb der Felder, keine Placeholder-only-Labels
- großzügige Klickflächen, sichtbare Fokuszustände
- Fehler textlich erklärt, nie nur über Farbe
- verbindliche Validierung beim Empfänger; dieselben Regeln als Hinweise im
  Browser
- klare deutsche Fehlermeldungen
- Eingaben normalisieren und Längen begrenzen
- keine HTML-Ausgabe aus Nutzereingaben
- keine sensiblen Fehlerdetails an den Browser
- nach Erfolg keine Formulardaten in URL, Logs oder Analytics
- Spamschutz: Honeypot; optional Mindestdauer zwischen Laden und Absenden;
  optional Cloudflare Turnstile — Offen

Zustellung: Da die Website statisch ist, braucht das Formular einen externen
Empfänger. Welcher: Offen.

Vorschlag: Bei einem Zustellfehler bietet der Fehlerzustand die direkte E-Mail
als Ausweg an.

## Rechtliche Seiten

- schlicht, gut lesbar
- keine erfundenen Rechtstexte; Inhalte vor Production fachlich bereitgestellt
  oder geprüft

## 404

- verständlich, im Design der Website, mit Wegen zurück zu den Hauptseiten
