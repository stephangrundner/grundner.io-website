# 0005 — Analytics-Anbindung und Einwilligung

Status: proposed
Datum: 2026-09-17

## Kontext

Die Interaktion auf der Website muss messbar sein; die Messung wird von Anfang
an vorbereitet ([Analytics](../requirements/analytics.md)). Google Analytics
wurde als Beispiel genannt. Die Implementierungsspezifikation 0.1 bevorzugte
datensparsame, cookie-freie Lösungen.

Im DACH-Raum dürfen Anbieter wie Google Analytics erst nach Einwilligung
geladen werden. Die Lösung darf keinen Bezahlplan voraussetzen.

## Vorschlag Anbindung

1. **Tracking-Schnittstelle:** Seiten und Komponenten melden fachliche Events
   (z. B. „Kontaktformular gesendet“) an eine eigene, kleine Schnittstelle.
   Sie kennen keinen Anbieter.
2. **Anbieter-Adapter:** Ein Adapter pro Anbieter übersetzt Events. Welcher aktiv
   ist, steuert die Build-Konfiguration. Ohne Konfiguration: kein Adapter,
   keine Messung.
3. **Einwilligung:** Eigene, schlanke Einwilligungslösung im Design der Website.
   Adapter, die eine Einwilligung brauchen, werden erst nach Zustimmung geladen.
   Einstellungen jederzeit über den Footer änderbar.
4. **Umgebungen:** Messung nur im Production Build.

Keine kommerzielle Consent-Management-Plattform, solange eigene Lösung
ausreicht.

## Anbieteroptionen

| Anbieter | Einwilligung nötig | Kosten | Anmerkung |
|---|---|---|---|
| Google Analytics 4 | ja | kostenlos | umfangreich, Datentransfer in die USA |
| Cloudflare Web Analytics | in der Regel nein (cookie-frei) | kostenlos | einfache Metriken, kaum eigene Events |
| Umami Cloud | in der Regel nein (cookie-frei) | kostenloser Plan begrenzt | eigene Events |
| Plausible | in der Regel nein (cookie-frei) | kostenpflichtig oder Selbstbetrieb | eigene Events; widerspricht ohne Selbstbetrieb dem Kostenprinzip |

Rechtliche Bewertung der Einwilligungspflicht: vor Auswahl prüfen, keine
Rechtsberatung durch dieses Dokument.

## Offen

- Anbieterwahl
- Datenschutztext
