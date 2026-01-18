"use client";

import { useCallback, useEffect, useRef } from "react";
import { navigation, siteConfig } from "@/data/site";

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    const updateNavHeight = () => {
      if (!headerRef.current) {
        return;
      }
      const { height } = headerRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    };

    updateNavHeight();

    const observer = new ResizeObserver(() => updateNavHeight());
    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      const target = document.querySelector(href);
      const headerHeight = headerRef.current
        ? headerRef.current.getBoundingClientRect().height
        : 0;

      if (target) {
        const targetTop = target.getBoundingClientRect().top + window.scrollY;
        const nextTop = Math.max(targetTop - headerHeight, 0);
        window.scrollTo({ top: nextTop, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-(--color-secondary-translucent) shadow-(--shadow-soft) backdrop-blur animate-nav-drop"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline justify-between gap-6">
          <a
            href="#top"
            onClick={(event) => handleAnchorClick(event, "#top")}
            className="font-serif text-2xl md:text-3xl"
          >
            {siteConfig.logoText}
          </a>
        </div>
        <nav className="flex flex-col gap-3 border-t border-(--color-subtext-soft) pt-3 md:flex-row md:border-t-0 md:pt-0">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="relative text-xs font-medium uppercase tracking-[0.2em] text-(--color-text-muted) transition hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-px after:w-0 after:bg-(--color-subtext) after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
