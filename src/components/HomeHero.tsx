"use client";

import { HeroWordmark } from "@/components/BrandMarks";
import { BRAND } from "@/lib/brand";

export function HomeHero() {
  return (
    <section className="relative">
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={BRAND.slides[2]}
        >
          <source src={BRAND.heroVideo} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 pb-10">
          <HeroWordmark />
        </div>
      </div>

      <div
        className="pointer-events-none relative z-20 -mt-10 flex h-12 justify-center overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="relative top-5 block h-16 w-16 shrink-0 rounded-full bg-sky"
          />
        ))}
      </div>
    </section>
  );
}
