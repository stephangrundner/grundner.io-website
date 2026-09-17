import { describe, expect, it } from "vitest";
import { isCurrentSection, withBase } from "./url";

describe("withBase", () => {
  it("keeps paths unchanged for the root base", () => {
    expect(withBase("/", "/")).toBe("/");
    expect(withBase("/kontakt", "/")).toBe("/kontakt");
  });

  it("prefixes paths with a sub-path base", () => {
    expect(withBase("/", "/grundner.io-website")).toBe("/grundner.io-website/");
    expect(withBase("/kontakt", "/grundner.io-website/")).toBe(
      "/grundner.io-website/kontakt",
    );
  });

  it("rejects relative paths", () => {
    expect(() => withBase("kontakt", "/")).toThrow("must start with '/'");
  });
});

describe("isCurrentSection", () => {
  it("matches the page itself, with or without trailing slash", () => {
    expect(isCurrentSection("/projekte", "/projekte")).toBe(true);
    expect(isCurrentSection("/projekte/", "/projekte")).toBe(true);
  });

  it("matches sub-pages", () => {
    expect(isCurrentSection("/projekte/case-a", "/projekte")).toBe(true);
  });

  it("does not match other pages with the same prefix", () => {
    expect(isCurrentSection("/projektprofil", "/projekte")).toBe(false);
    expect(isCurrentSection("/", "/projekte")).toBe(false);
  });
});
