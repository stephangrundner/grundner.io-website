export interface NavigationLink {
  label: string;
  /** Root-relative path without base path. */
  href: string;
}

/** Main navigation (docs/ui/pages.md#hauptnavigation). */
export const mainNavigation: readonly NavigationLink[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Insights", href: "/insights" },
  { label: "Profil", href: "/profil" },
  { label: "Kontakt", href: "/kontakt" },
];

/** Secondary access for agencies and recruiters. */
export const utilityNavigation: NavigationLink = {
  label: "Projektprofil",
  href: "/projektprofil",
};

/** Primary call to action in the header. */
export const primaryCta: NavigationLink = {
  label: "Projekt besprechen",
  href: "/kontakt",
};

export const legalNavigation: readonly NavigationLink[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
