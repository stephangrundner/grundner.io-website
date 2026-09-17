# UI-Kit: Website

Referenzansicht der öffentlichen Website (Homepage, 1440px Entwurfsbreite, fluid bis 320px).

- `index.html` — Header, Hero mit Porträtplatzhalter, Proof-Leiste, Standpunkt auf Graphit, Leistungen (01–04), großer Case, Abschluss-CTA.
- Aufbau ausschließlich mit den Tokens aus `styles.css`; jede Fläche, Linie und Type-Stufe ist eine Variable.
- Die vollständigen Seitenvorlagen (Leistungsseite, Case Study, Insight, Projektprofil) liegen als Design Components im Projektwurzelverzeichnis: `Homepage.dc.html`, `Templates.dc.html`, `Design System.dc.html`.

## Regeln, die dieses Kit belegt

- Ein primärer CTA pro Sichtbereich, orange Fläche mit schwarzem Text.
- Kartenraster über `gap:1px` auf `--line`, keine Schatten.
- Graphitflächen als gesetzte Akzente (Standpunkt, Kontakt), nicht als Dark Theme.
- Bildflächen bleiben schraffierte Platzhalter mit Monospace-Beschriftung, bis freigegebene Fotos vorliegen.
