"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "span" | "li";
  className?: string;
  /** Stagger delay in ms, applied only once the element is in view. */
  delay?: number;
  /** Distance (px) the element travels while fading in. */
  y?: number;
};

/** Fades and slides children into place the first time they scroll into view. */
export function Reveal({ children, as = "div", className = "", delay = 0, y = 22 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      data-reveal
      className={`transition-all duration-700 ease-[cubic-bezier(.22,.7,.3,1)] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${y}px)`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}
