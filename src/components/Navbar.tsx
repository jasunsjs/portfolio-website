"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/data/site";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#top");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[color:var(--color-secondary-translucent)] shadow-[var(--shadow-soft)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline justify-between gap-6">
          <Link href="/" className="font-serif text-2xl md:text-3xl">
            {siteConfig.logoText}
          </Link>
        </div>
        <nav className="flex flex-col gap-3 border-t border-[color:var(--color-subtext-soft)] pt-3 md:flex-row md:border-t-0 md:pt-0">
          {navigation.map((item) => {
            const isActive = activeHash === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-text)] after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-[1px] after:w-0 after:bg-[color:var(--color-subtext)] after:transition-all after:duration-300 after:content-[''] hover:after:w-full ${
                  isActive ? "text-[color:var(--color-text)] after:w-full" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
