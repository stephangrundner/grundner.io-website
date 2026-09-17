import { expect, test } from "@playwright/test";

test.describe("start page", () => {
  test("has the section structure in the documented order", async ({
    page,
  }) => {
    await page.goto("./");

    // Section numbers are decorative and hidden from assistive technology.
    const expectedSections = [
      "Standpunkt",
      "Leistungen",
      "Ausgewählte Projekte",
      "Arbeitsweise",
      "Zusammenarbeitsmodelle",
      "Insights",
      "Profil",
      /^Sie haben eine komplexe Produktidee/,
    ];
    const sectionHeadings = page.getByRole("heading", { level: 2 });
    await expect(sectionHeadings).toHaveCount(expectedSections.length);
    for (const [index, name] of expectedSections.entries()) {
      await expect(sectionHeadings.nth(index)).toHaveAccessibleName(name);
    }
    await expect(page.getByRole("heading", { level: 3 })).toHaveText([
      "AI-native Engineering & Transformation",
      "Product Discovery & Prototyping",
      "Software Architecture & Technical Leadership",
      "Langfristige Produktpartnerschaft",
    ]);
  });

  test("hero call to actions point to their pages", async ({
    page,
    baseURL,
  }) => {
    await page.goto("./");
    const hero = page.locator(".hero");
    const base = new URL(baseURL ?? "").pathname.replace(/\/$/, "");

    await expect(
      hero.getByRole("link", { name: "Projekt besprechen" }),
    ).toHaveAttribute("href", `${base}/kontakt`);
    await expect(
      hero.getByRole("link", { name: "Projekte ansehen" }),
    ).toHaveAttribute("href", `${base}/projekte`);
  });

  test("marks every placeholder visibly", async ({ page }) => {
    await page.goto("./");
    const placeholders = page.locator("[data-placeholder]");

    expect(await placeholders.count()).toBeGreaterThan(0);
    for (const placeholder of await placeholders.all()) {
      await expect(placeholder).toContainText("Platzhalter");
    }
  });

  test("provides metadata and structured data", async ({ page }) => {
    await page.goto("./");

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Stephan Grundner – AI-native Software & Transformation",
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /^Ich unterstütze Unternehmen/,
    );
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(JSON.parse(jsonLd ?? "{}")).toMatchObject({
      "@type": "Person",
      name: "Stephan Grundner",
    });
  });

  test("shows all content without JavaScript", async ({ browser, baseURL }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      baseURL: baseURL ?? "",
    });
    const page = await context.newPage();
    await page.goto("./");

    for (const element of await page.locator("[data-reveal]").all()) {
      await expect(element).toHaveCSS("opacity", "1");
    }
    await context.close();
  });

  test("reveals content when scrolled into view", async ({ page }) => {
    await page.goto("./");
    const cta = page.getByRole("heading", {
      name: /^Sie haben eine komplexe Produktidee/,
    });

    await cta.scrollIntoViewIfNeeded();
    await expect(cta).toBeVisible();
    await expect(page.locator("[data-reveal]").last()).toHaveCSS(
      "opacity",
      "1",
    );
  });

  test("has no significant layout shift", async ({ page }) => {
    await page.goto("./");
    await page.evaluate(() => document.fonts.ready);
    await page.mouse.wheel(0, 4000);
    await page.waitForTimeout(1000);

    const cumulativeLayoutShift = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          let total = 0;
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as (PerformanceEntry & {
              value: number;
              hadRecentInput: boolean;
            })[]) {
              if (!entry.hadRecentInput) total += entry.value;
            }
          }).observe({ type: "layout-shift", buffered: true });
          setTimeout(() => resolve(total), 200);
        }),
    );

    expect(cumulativeLayoutShift).toBeLessThan(0.1);
  });
});
