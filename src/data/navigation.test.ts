import { describe, expect, it } from "vitest";
import {
  legalNavigation,
  mainNavigation,
  primaryCta,
  utilityNavigation,
} from "./navigation";

const allLinks = [
  ...mainNavigation,
  utilityNavigation,
  primaryCta,
  ...legalNavigation,
];

describe("navigation", () => {
  it("follows the information architecture order", () => {
    expect(mainNavigation.map((link) => link.label)).toEqual([
      "Leistungen",
      "Projekte",
      "Insights",
      "Profil",
      "Kontakt",
    ]);
  });

  it("uses root-relative, lowercase paths without trailing slash", () => {
    for (const link of allLinks) {
      expect(link.href).toMatch(/^\/[a-z0-9-]+$/);
    }
  });

  it("has unique entries within each group", () => {
    const hrefs = mainNavigation.map((link) => link.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
