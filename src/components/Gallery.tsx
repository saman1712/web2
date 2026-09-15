"use client";

import Image from "next/image";
import { BRAND } from "@/lib/brand";

export function Gallery() {
  const slides = [...BRAND.slides, ...BRAND.slides];

  return (
    <div className="relative -mx-1 overflow-hidden py-2">
      <div className="gallery-track flex w-max gap-3 pr-3">
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-[210px] w-[168px] shrink-0 overflow-hidden rounded-[22px]"
          >
            <Image
              src={src}
              alt="Slide"
              fill
              sizes="168px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
