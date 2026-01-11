"use client";

import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/icons";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const goForward = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goBack = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[40vmin] w-[70vmin] overflow-hidden border-2 border-[color:var(--color-footer)] md:h-[35vmin] md:w-[60vmin]">
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes="(max-width: 768px) 70vmin, 60vmin"
        className="object-cover"
      />
      <button
        type="button"
        aria-label="Previous image"
        onClick={goBack}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:scale-95"
      >
        <Icons.arrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={goForward}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:scale-95"
      >
        <Icons.arrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
