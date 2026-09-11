/** Smooth-scrolls to a section, accounting for the sticky header's height. */
export function scrollToId(id: string, headerOffset = 74) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
