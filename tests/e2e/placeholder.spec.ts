import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("start page renders", async ({ page }) => {
  const response = await page.goto("./");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Stephan Grundner");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Stephan Grundner",
  );
});

test("start page is excluded from search engines unless configured otherwise", async ({
  page,
}) => {
  await page.goto("./");
  const robots = page.locator('meta[name="robots"]');

  if (process.env["SITE_NOINDEX"] === "false") {
    await expect(robots).toHaveCount(0);
  } else {
    await expect(robots).toHaveAttribute("content", "noindex, nofollow");
  }
});

test("start page has no detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("./");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});
