import { describe, expect, it } from "vitest";
import { parseBuildEnv } from "./build-env";

describe("parseBuildEnv", () => {
  it("uses local defaults and excludes search engines by default", () => {
    expect(parseBuildEnv({})).toEqual({
      SITE_URL: "http://localhost:4321",
      BASE_PATH: "/",
      SITE_NOINDEX: true,
    });
  });

  it("accepts the pre-launch GitHub Pages configuration", () => {
    expect(
      parseBuildEnv({
        SITE_URL: "https://stephangrundner.github.io",
        BASE_PATH: "/grundner.io-website",
        SITE_NOINDEX: "true",
      }),
    ).toEqual({
      SITE_URL: "https://stephangrundner.github.io",
      BASE_PATH: "/grundner.io-website",
      SITE_NOINDEX: true,
    });
  });

  it("accepts the go-live configuration", () => {
    expect(
      parseBuildEnv({
        SITE_URL: "https://grundner.io",
        BASE_PATH: "/",
        SITE_NOINDEX: "false",
      }),
    ).toEqual({
      SITE_URL: "https://grundner.io",
      BASE_PATH: "/",
      SITE_NOINDEX: false,
    });
  });

  it.each([
    [{ SITE_URL: "not-a-url" }, "SITE_URL"],
    [{ SITE_URL: "https://grundner.io/" }, "SITE_URL"],
    [{ BASE_PATH: "grundner.io-website" }, "BASE_PATH"],
    [{ BASE_PATH: "/grundner.io-website/" }, "BASE_PATH"],
    [{ SITE_NOINDEX: "yes" }, "SITE_NOINDEX"],
  ])("rejects invalid configuration %o", (env, variable) => {
    expect(() => parseBuildEnv(env)).toThrow(variable);
  });
});
