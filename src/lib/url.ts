/**
 * Prefixes an internal, root-relative path with the configured base path.
 * All internal links must go through this function (see BASE_PATH).
 */
export function withBase(
  path: string,
  base: string = import.meta.env.BASE_URL,
): string {
  if (!path.startsWith("/")) {
    throw new Error(`Internal paths must start with '/': ${path}`);
  }
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}

/** Whether `currentPath` is the page for `href` or one of its sub-pages. */
export function isCurrentSection(currentPath: string, href: string): boolean {
  const strip = (value: string) =>
    value.length > 1 && value.endsWith("/") ? value.slice(0, -1) : value;
  const current = strip(currentPath);
  const target = strip(href);
  return current === target || current.startsWith(`${target}/`);
}
