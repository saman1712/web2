"use client";

import Image from "next/image";
import { CloudIcon, CloudRow } from "./BrandMarks";
import { displayEnglish, formatPrice, type FoodItem } from "@/lib/menu";

function CloudStage({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: string | null;
}) {
  const large = variant === "style5" || variant === "style1";

  return (
    <div className={`relative mx-auto ${large ? "h-[240px] w-[92%]" : "h-[220px] w-[88%]"}`}>
      <CloudIcon className="absolute left-[-8%] top-[18%] h-24 w-36 text-[#d9e2ec]" />
      <CloudIcon className="absolute bottom-[6%] right-[-6%] h-28 w-40 text-[#d5dee8]" />
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="380px"
          className="object-contain drop-shadow-sm"
        />
      </div>
    </div>
  );
}

export function FoodCard({ item, showDivider = true }: { item: FoodItem; showDivider?: boolean }) {
  return (
    <article className="px-5">
      {item.image && (
        <CloudStage src={item.image} alt={item.name} variant={item.style} />
      )}

      <div className="mt-4">
        {item.nameFa && (
          <div dir="rtl" className="text-right">
            <h2 className="font-fa text-[22px] font-bold leading-snug text-orange">{item.nameFa}</h2>
            {item.descriptionFa && (
              <p className="mt-1 font-fa text-[13px] leading-7 text-orange/90">{item.descriptionFa}</p>
            )}
          </div>
        )}

        <div className="mt-3 text-left">
          <h2 className="font-display text-[22px] leading-tight tracking-[-0.03em] text-orange">
            {displayEnglish(item.name)}
          </h2>
          {item.description && (
            <p className="mt-1 max-w-[340px] font-sans text-[13px] leading-relaxed text-orange/90">
              {item.description}
            </p>
          )}
        </div>

        <p className="mt-4 font-display text-[26px] tracking-[-0.03em] text-orange">
          {formatPrice(item.price)}
        </p>
      </div>

      {showDivider && <CloudRow />}
    </article>
  );
}
