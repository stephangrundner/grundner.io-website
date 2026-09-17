/**
 * Subtle reveal of `[data-reveal]` elements when they enter the viewport.
 *
 * Content is fully visible without JavaScript and with reduced motion: the
 * hidden start state only applies under `html.js` and
 * `prefers-reduced-motion: no-preference` (src/styles/base.css).
 */
const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

const reveal = (element: Element) => element.classList.add("is-revealed");

if (!("IntersectionObserver" in window)) {
  elements.forEach(reveal);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  elements.forEach((element) => observer.observe(element));
}
