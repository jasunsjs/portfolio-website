"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealElement = "div" | "section" | "li" | "p" | "span" | "h2" | "h3";

const DEFAULT_REVEAL_DELAY_MS = 0;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: RevealElement;
};

export default function Reveal({
  children,
  className,
  delayMs = DEFAULT_REVEAL_DELAY_MS,
  as = "div",
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isVisible) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  const style: CSSProperties = {
    ["--reveal-delay" as never]: `${delayMs}ms`,
  };

  const Component = as as any;

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        elementRef.current = node;
      }}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className ?? ""}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
