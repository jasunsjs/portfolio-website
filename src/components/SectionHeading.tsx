"use client";

import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={`font-serif text-4xl font-medium text-center text-foreground md:text-5xl ${
        className ?? ""
      }`}
    >
      {children}
    </h2>
  );
}
