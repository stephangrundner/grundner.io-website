# Messbarkeit und Analytics

## Anforderung

Die Website ist ein zentrales Business-Werkzeug. Die Interaktion im Web muss
deshalb messbar sein. Die Messung wird von Anfang an vorbereitet und ist nicht
nachträglicher Zusatz.

Anbieter: Offen. Google Analytics wurde als Beispiel genannt.

## Regeln

- Die Messung ist anbieterunabhängig angebunden. Der Anbieter ist austauschbar,
  ohne Seiten oder Komponenten zu ändern.
- Ohne konfigurierten Anbieter läuft die Website vollständig ohne Messung.
- Development- und Preview-Umgebungen werden nicht gemessen.
- Keine personenbezogenen Formulardaten in Events, URLs oder Logs.
- Messung darf Performance-Budget und Barrierefreiheit nicht verletzen.

## Datenschutz und Einwilligung

- Anbieter, die Cookies setzen oder personenbezogene Daten an Dritte
  übertragen (z. B. Google Analytics), werden erst nach aktiver Einwilligung
  geladen. Die Einwilligung ist jederzeit widerrufbar.
- Ohne Einwilligung werden keine nicht notwendigen Cookies gesetzt und keine
  solchen Anbieter-Skripte geladen.
- Die Einwilligungslösung ist vorbereitet. Ihre Gestaltung folgt dem Design
  System; kein generisches Fremd-Banner.
- Datenschutztext und Anbieterkonfiguration werden aufeinander abgestimmt.
- Die Einwilligungslösung darf keinen kostenpflichtigen Plan voraussetzen
  (siehe [Betrieb](operations.md)).

Anbindung und Anbieteroptionen: Vorschlag in
[ADR-0005](../decisions/0005-analytics-and-consent.md).

## Zu messende Interaktionen

Abgeleitet aus den [primären Conversions](../product/vision.md#primäre-conversions).

| Interaktion | Bezug |
|---|---|
| Seitenaufrufe | Grundlage |
| Kontaktformular erfolgreich gesendet | Projektanfrage |
| Kontaktformular Fehler (nur Fehlertyp, keine Eingaben) | Projektanfrage |
| Klick auf primäre CTAs, mit Position | Projektanfrage, Erstgespräch |
| Klick auf direkte E-Mail | direkter Kontakt |
| Klick auf Terminbuchung, falls vorhanden | Erstgespräch |
| Download Projektprofil-PDF | Projektprofil |
| Aufruf Projektprofil | Projektprofil |
| Copy-Link / Share | Weitergabe |
| Klick auf ausgehende Links (z. B. LinkedIn, GitHub) | Vertiefung |

Vorschlag: Lesefortschritt bei Insights (z. B. 50 % / 90 %) als Indikator für
vertiefende Auseinandersetzung.

Eventnamen und Parameter werden bei der Umsetzung als verbindliche Liste in
diesem Dokument festgehalten.
