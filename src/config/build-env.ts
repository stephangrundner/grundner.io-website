import { z } from "astro/zod";

const booleanFlag = z
  .enum(["true", "false"])
  .transform((value) => value === "true");

const buildEnvSchema = z.object({
  SITE_URL: z
    .url()
    .refine((url) => !url.endsWith("/"), "SITE_URL must not end with '/'"),
  BASE_PATH: z
    .string()
    .regex(
      /^\/([a-z0-9._-]+(\/[a-z0-9._-]+)*)?$/,
      "BASE_PATH must start with '/' and must not end with '/' (except '/')",
    ),
  SITE_NOINDEX: booleanFlag,
});

export type BuildEnv = z.infer<typeof buildEnvSchema>;

/** Local defaults. Deployments set every variable explicitly. */
const localDefaults = {
  SITE_URL: "http://localhost:4321",
  BASE_PATH: "/",
  SITE_NOINDEX: "true",
} as const;

export function parseBuildEnv(
  env: Record<string, string | undefined>,
): BuildEnv {
  const result = buildEnvSchema.safeParse({
    SITE_URL: env["SITE_URL"] ?? localDefaults.SITE_URL,
    BASE_PATH: env["BASE_PATH"] ?? localDefaults.BASE_PATH,
    SITE_NOINDEX: env["SITE_NOINDEX"] ?? localDefaults.SITE_NOINDEX,
  });
  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid build configuration:\n${issues}`);
  }
  return result.data;
}
