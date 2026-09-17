/**
 * Content of the start page (docs/ui/pages.md#-startseite).
 *
 * Only accepted texts from docs/ are used. Missing or unapproved content is a
 * `Pending` entry: it renders as a clearly marked placeholder and is tracked in
 * docs/content/content-status.md. Nothing here is invented.
 */

export interface Pending {
  pending: true;
  /** What belongs here, shown in the placeholder. */
  description: string;
}

export const pending = (description: string): Pending => ({
  pending: true,
  description,
});

export const hero = {
  headline: ["Komplexe Probleme.", "Klare Systeme.", "Produktive Software."],
  description:
    "Ich unterstütze Unternehmen bei AI-native Softwareentwicklung, digitalen Produkten und technischer Transformation – von der Strategie bis zur produktiven Umsetzung.",
  primaryAction: { label: "Projekt besprechen", href: "/kontakt" },
  secondaryAction: { label: "Projekte ansehen", href: "/projekte" },
  roles: [
    "AI Engineering",
    "Software Architecture",
    "Technical Leadership",
    "Product Development",
  ],
  portrait: pending("Porträt · S/W · 4:5"),
} as const;

export const proofs: readonly Pending[] = [
  pending("Zentrale Projekt-Kennzahl"),
  pending("Software- und Architekturerfahrung"),
  pending("Branchen und Strategie aus einer Hand"),
];

export const pointOfView = {
  statement:
    "AI-native Engineering bedeutet nicht, bestehende Entwicklung lediglich zu beschleunigen. Es verändert, wie Anforderungen beschrieben, Wissen organisiert, Software geplant und Produkte entwickelt werden.",
} as const;

export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: readonly Service[] = [
  {
    number: "01",
    title: "AI-native Engineering & Transformation",
    description:
      "Neue Arbeitsweisen, AI-Agenten, Context Engineering, Knowledge Bases sowie Spec- und Documentation-driven Development.",
  },
  {
    number: "02",
    title: "Product Discovery & Prototyping",
    description:
      "Komplexe Ideen strukturieren, fachliche Modelle entwickeln und in kurzer Zeit funktionierende Software schaffen.",
  },
  {
    number: "03",
    title: "Software Architecture & Technical Leadership",
    description:
      "Architektur, technische Entscheidungen, Entwicklungsführung, Reviews und Stabilisierung anspruchsvoller Vorhaben.",
  },
  {
    number: "04",
    title: "Langfristige Produkt\u00ADpartnerschaft",
    description:
      "Begleitung von der ersten Idee bis zum produktiven System – als Technical Lead, Engineering Lead oder strategischer Entwicklungspartner.",
  },
];

export const featuredProjects: readonly Pending[] = [
  pending("Case aus dem industriellen AI-native Produktentwicklungskontext"),
  pending("Case aus einem Architektur- oder Enterprise-Projekt"),
];

export const processSteps: readonly string[] = [
  "Problem und Domäne verstehen",
  "Wissen und Anforderungen strukturieren",
  "Modell und Architektur entwickeln",
  "Schnell einen belastbaren Produktstand erzeugen",
  "Produktiv setzen und weiterentwickeln",
  "Wissen im Unternehmen und im System verankern",
];

export const collaborationModels: readonly string[] = [
  "Assessment oder strategischer Workshop",
  "Prototype Sprint",
  "Projektmandat",
  "Technical-/Engineering-Lead-Mandat",
  "Fractional Engagement",
  "Langfristige Produktpartnerschaft",
];

export const curatedInsights: readonly Pending[] = [
  pending("Standpunkt: Was AI-native Softwareentwicklung tatsächlich bedeutet"),
  pending(
    "Fachbeitrag: Warum Context Engineering wichtiger wird als das nächste AI-Tool",
  ),
  pending("Projekterfahrung: Beitrag über die veränderte Arbeitsweise"),
];

export const profileTeaser = {
  portrait: pending("Professionelles Foto"),
  text: pending("Wenige Sätze zu Erfahrung und Arbeitsphilosophie"),
  contexts: pending("Ausgewählte Kunden- oder Projektkontexte"),
  links: [
    { label: "Profil", href: "/profil" },
    { label: "Projektprofil", href: "/projektprofil" },
  ],
} as const;

export const closingCta = {
  headline:
    "Sie haben eine komplexe Produktidee, einen ineffizienten Prozess oder möchten Softwareentwicklung mit AI neu aufstellen?",
  primaryAction: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
  secondaryAction: { label: "Projektprofil ansehen", href: "/projektprofil" },
} as const;
