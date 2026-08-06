"use client";

import { useEffect, useRef } from "react";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const { copyrightName, copyrightYear, currentJam } = siteConfig.footer;

  useEffect(() => {
    if (!footerRef.current) {
      return;
    }

    const updateFooterHeight = () => {
      if (!footerRef.current) {
        return;
      }
      const { height } = footerRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--footer-height",
        `${height}px`,
      );
    };

    updateFooterHeight();

    const observer = new ResizeObserver(() => updateFooterHeight());
    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-(--color-text-soft) bg-(--color-footer) px-18 py-6 text-left"
    >
      <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-m text-(--color-text-muted)">
          &copy; {copyrightName} {copyrightYear}
        </p>
        <a
          href={currentJam.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Listen to ${currentJam.song} by ${currentJam.artist} on Spotify`}
          className="flex items-center gap-4 rounded-2xl border border-(--color-subtext-soft) px-6 py-3 transition duration-200 ease-out hover:scale-105 hover:border-(--color-subtext-strong)"
        >
          <Icons.spotify className="h-8 w-8 shrink-0 text-(--color-accent)" />
          <span className="flex flex-col">
            <span className="text-xs text-(--color-text-soft)">
              {currentJam.label}
            </span>
            <span className="text-sm font-semibold text-foreground">
              {currentJam.song} by {currentJam.artist}
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}
