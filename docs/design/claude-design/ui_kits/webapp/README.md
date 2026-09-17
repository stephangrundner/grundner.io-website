# UI-Kit: Web App (Spec & Knowledge Workspace)

Interner Arbeitsbereich als Beleg dafür, dass das System auch dichte Anwendungsoberflächen trägt — nicht nur Marketingseiten.

Klickbarer Ablauf in `index.html`:

1. **Login** — zweigeteilter Screen, Graphitfläche mit Raster links, Login-Panel rechts. Leere Felder lösen den Fehlerzustand aus, danach Ladezustand.
2. **Workspace** — Sidebar (einklappbar, aktiver Eintrag mit orangem 2px-Marker), Kopfzeile mit Suche und Shortcut-Hinweis, Kennzahlenleiste, Tabs als Statusfilter, Tabelle mit Monospace-Kopf.
3. **Dialog** — „Neue Spec" mit Formularfeldern sowie Detaildialog über einen Tabellentitel; Escape und Klick auf den Grund schließen.
4. **Toast** — Bestätigung unten rechts auf Graphit, mit quadratischem Statusmarker.
5. **Empty State** — Suche ohne Treffer zeigt die schraffierte Fläche mit Rücksetz-Aktion.

## Regeln, die dieses Kit belegt

- Dunkle Fläche nur für Navigation und Systemmeldungen; die Arbeitsfläche bleibt warm und hell.
- Zahlen, IDs, Datumsangaben und Statuslabels in IBM Plex Mono, rechtsbündig in Tabellen.
- Genau ein orangefarbener CTA pro Bereich; Status „In Review" ist die einzige orange Umrandung in der Tabelle.
- Alle Klickflächen mindestens 44px, Fokuszustände aus `base.css` bleiben unangetastet.
