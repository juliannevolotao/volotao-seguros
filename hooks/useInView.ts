"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reports once an element has scrolled into view, for a one-shot reveal
 * animation. Falls back to already-visible when IntersectionObserver is
 * unavailable; prefers-reduced-motion is handled separately via CSS on the
 * Reveal component so this hook doesn't need to special-case it.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px"
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
