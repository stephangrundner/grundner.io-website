import { defineConfig, devices } from "@playwright/test";
import { parseBuildEnv } from "./src/config/build-env";

const { BASE_PATH } = parseBuildEnv(process.env);
const port = 4321;
const basePath = BASE_PATH === "/" ? "/" : `${BASE_PATH}/`;

export default defineConfig({
  testDir: "tests/e2e",
  forbidOnly: !!process.env["CI"],
  retries: process.env["CI"] ? 1 : 0,
  reporter: process.env["CI"] ? [["github"], ["list"]] : "list",
  use: {
    baseURL: `http://localhost:${port}${basePath}`,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Serves the production build; run `pnpm build` first.
  webServer: {
    command: `pnpm preview --port ${port}`,
    url: `http://localhost:${port}${basePath}`,
    reuseExistingServer: !process.env["CI"],
  },
});
