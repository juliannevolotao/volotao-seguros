"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently under the header, using an
 * IntersectionObserver whose root margin collapses to a thin line just
 * below the sticky header — the same "what's under this point" idea the
 * original prototype implemented with scroll-position math.
 */
export function useActiveSection(ids: string[], offset = 140) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const build = () =>
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          }
        },
        {
          rootMargin: `-${offset}px 0px -${Math.max(
            window.innerHeight - offset - 1,
            0
          )}px 0px`,
          threshold: 0,
        }
      );

    let observer = build();
    elements.forEach((el) => observer.observe(el));

    const onResize = () => {
      observer.disconnect();
      observer = build();
      elements.forEach((el) => observer.observe(el));
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [ids, offset]);

  return active;
}
