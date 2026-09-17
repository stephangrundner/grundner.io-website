# Content-Modell

Fachliche Beschreibung der Inhaltstypen. Die technische Umsetzung als Schema
folgt dem Tech-Stack (ADR-0002: Astro Content Collections).

## Veröffentlichungsstatus

Gilt für Insights und Projekte.

| Status | Bedeutung | Öffentlich sichtbar |
|---|---|---|
| `draft` | in Arbeit, Marker erlaubt | nein |
| `review` | wartet auf Freigabe, Marker erlaubt | nein |
| `published` | freigegeben | ja |

Nicht öffentliche Inhalte erscheinen weder als Seite noch in Listings, Sitemap
oder RSS.

## Site-Konfiguration

Zentral gepflegt.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| name | ja | Name der Person/Marke |
| title | ja | Default-Seitentitel |
| description | ja | Default-Beschreibung |
| locale | ja | `de-AT` oder `de-DE` — Offen |
| canonicalBaseUrl | ja | Basis-URL: `https://grundner.io`; bis zum Go-Live `https://stephangrundner.github.io/grundner.io-website` (Build-Konfiguration) |
| email | ja | Kontakt-E-Mail — Offen |
| social.linkedin | nein | LinkedIn-Profil |
| social.github | nein | GitHub-Profil |
| contact.bookingUrl | nein | externe Terminbuchung |

## Insight

Fachbeitrag.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| title | ja | Titel |
| slug | ja | URL-Segment, eindeutig |
| summary | ja | Kurzfassung |
| coreThesis | nein | Kernaussage, auch für Social |
| publishedAt | bei `published` | Veröffentlichungsdatum |
| updatedAt | nein | Aktualisierungsdatum |
| status | ja | siehe Veröffentlichungsstatus |
| format | ja | `standpoint`, `field-note`, `article`, `playbook`, `case-insight`, `deep-dive`, `short` |
| pillar | ja | thematische Säule |
| tags | ja | Schlagworte |
| featured | ja | hervorgehoben |
| order | nein | redaktionelle Reihenfolge |
| author | ja | `Stephan Grundner` |
| coverImage, coverImageAlt | nein | Titelbild; Alt-Text Pflicht, wenn informativ |
| socialImage | nein | eigenes Social-Bild; sonst generiertes Fallback |
| seoTitle, seoDescription | nein | SEO-Überschreibungen |
| relatedServices | ja | verknüpfte Leistungen |
| relatedProjects | ja | verknüpfte Projekte |
| relatedInsights | ja | verknüpfte Insights |
| ctaType | nein | `contact`, `project-profile`, `service` |
| linkedinVariant | nein | Textvariante für LinkedIn |
| socialShortVariants | nein | Kurzvarianten für Social |
| language | ja | `de` |

Die Lesedauer wird berechnet, nicht gepflegt.

### Formate

| Wert | Anzeige | Zweck | Umfang |
|---|---|---|---|
| `standpoint` | Standpunkt | klare These und Positionierung | kurz bis mittel |
| `field-note` | Field Note | konkrete Erfahrung aus einem Projekt | kurz |
| `article` | Fachartikel | Thema fundiert erklären | mittel bis lang |
| `playbook` | Playbook | praktische Vorgehensweise | lang |
| `case-insight` | Case Insight | Erkenntnis aus einem Projekt | mittel |
| `deep-dive` | Technical Deep Dive | technische Expertise belegen | lang |
| `short` | Kurzimpuls | Grundlage für Social Content | sehr kurz |

### Inhaltliche Säulen

| Säule | Themen |
|---|---|
| AI-native Engineering | AI-native Softwareentwicklung, Coding Agents, Agentic Engineering, veränderte Rollen und Prozesse, Qualität und Verifikation |
| Context, Specs & Documentation | Context Engineering, Knowledge Bases, Spec-driven und Documentation-driven Development, Wissen für Menschen und AI-Agenten |
| Produktentwicklung & Transformation | von der Idee zum produktiven System, Prototyping und Proof of Value, AI-Transformation, Fachbereich und IT zusammenbringen, warum PoCs nicht produktiv werden |
| Architektur & Technical Leadership | nachhaltige Architektur bei hoher Geschwindigkeit, Architekturentscheidungen mit AI, Reviews und Guardrails, technische Führung, Modernisierung |
| Applied Software & Industry | Digitalisierung industrieller Prozesse, individuelle Unternehmenssoftware, Konfiguratoren und 3D-Systeme, ERP-nahe Systeme, anonymisierte Projekterkenntnisse |

`pillar` verweist auf eine dieser Säulen.

## Projekt (Case)

| Feld | Pflicht | Bedeutung |
|---|---|---|
| title | ja | Titel |
| slug | ja | URL-Segment, eindeutig |
| summary | ja | Kurzfassung |
| client | nein | Kunde, nur wenn freigegeben |
| industry | ja | Branche |
| period | nein | Zeitraum |
| role | ja | Rollen |
| visibility | ja | `public`, `anonymized`, `draft` |
| status | ja | siehe Veröffentlichungsstatus |
| featured | ja | auf Startseite hervorgehoben |
| order | nein | redaktionelle Reihenfolge |
| heroImage, heroImageAlt | nein | Titelbild |
| resultHeadline | nein | Ergebnis-Überschrift |
| metrics | nein | Liste aus Wert, Label, verifiziert (ja/nein) |
| services | ja | verknüpfte Leistungen |
| technologies | ja | Technologien und Methoden |
| relatedInsights | ja | verknüpfte Insights |
| seoTitle, seoDescription | nein | SEO-Überschreibungen |

## Strukturierte Listen

Kleine, nicht-redaktionelle Datenbestände:

- Navigation
- Leistungen
- Profil
- Skills
- Zusammenarbeitsmodelle

## Validierungsregeln

- Slugs sind eindeutig.
- Datumsangaben im Format ISO-8601.
- `published` benötigt `publishedAt`.
- Ein öffentliches Projekt mit Kennzahl benötigt für jede angezeigte Kennzahl
  `verifiziert: ja`.
- Nicht verifizierte Kennzahlen werden in Production nicht gerendert und
  erzeugen eine Warnung oder einen Build-Fehler (welches von beiden: Offen).
- Verknüpfte Leistungen, Projekte und Insights müssen existieren.
- Referenzierte Bilder müssen existieren.
- Informative Bilder benötigen Alt-Texte; Projektbilder zusätzlich einen
  Freigabestatus ([Content-Status](../content/content-status.md)).
- `seoTitle` ca. 50–60 Zeichen, `seoDescription` ca. 140–160 Zeichen anstreben
  (Warnung, kein Fehler).
- Production Guard gemäß [Marke und inhaltliche Regeln](../product/brand-and-content-rules.md#production-guard).
