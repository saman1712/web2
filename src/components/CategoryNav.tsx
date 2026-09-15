"use client";

import Link from "next/link";
import { displayEnglish, type MenuCategory } from "@/lib/menu";

export function CategoryPills({
  categories,
  activeSlug,
}: {
  categories: MenuCategory[];
  activeSlug?: string;
}) {
  return (
    <nav
      className="no-scrollbar sticky top-[58px] z-20 flex gap-2 overflow-x-auto bg-sky px-[18px] pb-3 pt-2"
      aria-label="Menu categories"
    >
      {categories.map((cat) => {
        const active = cat.slug === activeSlug;
        return (
          <Link
            key={cat.slug}
            href={`/menu/categories/${cat.slug}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 font-display text-[13px] uppercase tracking-[-0.03em] ${
              active ? "bg-orange text-sky" : "bg-transparent text-orange"
            }`}
          >
            {displayEnglish(cat.name)}
          </Link>
        );
      })}
    </nav>
  );
}

export function CategoryIndexList({ categories }: { categories: MenuCategory[] }) {
  return (
    <div className="flex flex-col gap-3 px-5">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/menu/categories/${cat.slug}`}
          className="flex items-center justify-between rounded-[18px] bg-orange px-5 py-[14px] text-sky transition-transform hover:scale-[1.015]"
        >
          <span className="font-display text-[15px] uppercase tracking-[-0.03em]">
            {displayEnglish(cat.name)}
          </span>
          <span dir="rtl" className="font-fa text-[16px] font-bold">
            {cat.nameFa}
          </span>
        </Link>
      ))}
    </div>
  );
}
