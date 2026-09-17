import { expect, test } from "@playwright/test";

test("start page renders the placeholder", async ({ page }) => {
  const response = await page.goto("./");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Stephan Grundner");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Komplexe Probleme. Klare Systeme. Produktive Software.",
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

test("component overview is always excluded from search engines", async ({
  page,
}) => {
  await page.goto("komponenten");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, nofollow",
  );
});
