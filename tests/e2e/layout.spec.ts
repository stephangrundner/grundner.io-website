import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const viewports = {
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 },
};

const mainNavigation = [
  "Leistungen",
  "Projekte",
  "Insights",
  "Profil",
  "Kontakt",
];

const navigation = (page: Page) =>
  page.getByRole("navigation", { name: "Hauptnavigation" });
const toggle = (page: Page) => page.locator("[data-nav-toggle]");

test.describe("desktop header", () => {
  test.use({ viewport: viewports.desktop });

  test("shows navigation, utility link and call to action", async ({
    page,
  }) => {
    await page.goto("./");

    for (const label of mainNavigation) {
      await expect(
        navigation(page).getByRole("link", { name: label, exact: true }),
      ).toBeVisible();
    }
    await expect(
      navigation(page).getByRole("link", { name: "Projektprofil" }),
    ).toBeVisible();
    await expect(
      page
        .getByRole("banner")
        .getByRole("link", { name: "Projekt besprechen" }),
    ).toBeVisible();
    await expect(toggle(page)).toBeHidden();
  });
});

test.describe("mobile header", () => {
  test.use({ viewport: viewports.mobile });

  test("navigation opens and closes with the menu button", async ({ page }) => {
    await page.goto("./");

    await expect(navigation(page)).toBeHidden();
    await expect(toggle(page)).toHaveAttribute("aria-expanded", "false");

    await toggle(page).click();
    await expect(toggle(page)).toHaveAttribute("aria-expanded", "true");
    await expect(toggle(page)).toHaveAccessibleName("Navigation schließen");
    await expect(
      navigation(page).getByRole("link", { name: "Kontakt", exact: true }),
    ).toBeVisible();

    await toggle(page).click();
    await expect(navigation(page)).toBeHidden();
  });

  test("Escape closes the navigation and returns focus to the button", async ({
    page,
  }) => {
    await page.goto("./");

    await toggle(page).focus();
    await page.keyboard.press("Enter");
    await expect(navigation(page)).toBeVisible();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Escape");
    await expect(navigation(page)).toBeHidden();
    await expect(toggle(page)).toBeFocused();
  });

  test("navigation is visible without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: viewports.mobile,
      baseURL: test.info().project.use.baseURL ?? "",
    });
    const page = await context.newPage();
    await page.goto("./");

    await expect(
      navigation(page).getByRole("link", { name: "Leistungen", exact: true }),
    ).toBeVisible();
    await expect(toggle(page)).toBeHidden();
    await context.close();
  });
});

test("skip link moves focus to the main content", async ({ page }) => {
  await page.goto("./");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Zum Inhalt springen" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveCSS("outline-style", "solid");
  await expect(skipLink).toHaveCSS("outline-color", "rgb(0, 107, 255)");

  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

for (const [name, viewport] of Object.entries(viewports)) {
  for (const path of ["./", "komponenten"]) {
    test(`${path} has no detectable accessibility violations (${name})`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
}

test.describe("orange as text colour only on dark surfaces", () => {
  test.use({ viewport: viewports.desktop });

  const ink = "rgb(11, 11, 11)";
  const accent = "rgb(255, 90, 31)";

  test("links keep dark text on hover on light surfaces", async ({ page }) => {
    await page.goto("komponenten");
    const link = page
      .locator("section:not([data-surface='dark'])")
      .getByRole("link", { name: "Weiterlesen" });

    await link.hover();
    await expect(link).toHaveCSS("color", ink);
  });

  test("links turn orange on hover on dark surfaces", async ({ page }) => {
    await page.goto("komponenten");
    const link = page
      .locator("section[data-surface='dark']")
      .getByRole("link", { name: "Weiterlesen" });

    await link.hover();
    await expect(link).toHaveCSS("color", accent);
  });
});
