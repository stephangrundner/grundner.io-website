import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { parseBuildEnv } from "./src/config/build-env";

const buildEnv = parseBuildEnv(process.env);

export default defineConfig({
  site: buildEnv.SITE_URL,
  base: buildEnv.BASE_PATH,
  output: "static",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
    define: {
      __SITE_NOINDEX__: JSON.stringify(buildEnv.SITE_NOINDEX),
    },
  },
});
