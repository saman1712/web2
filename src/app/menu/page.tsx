import { AppHeader } from "@/components/AppHeader";
import { CategoryIndexList } from "@/components/CategoryNav";
import { PhoneShell } from "@/components/PhoneShell";
import { SiteFooter } from "@/components/SiteFooter";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { categories } from "@/lib/menu";
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Digital Menu | ${BRAND.name}`,
};

export default function MenuPage() {
  return (
    <PhoneShell>
      <WelcomeDialog />
      <AppHeader backHref="/" />
      <div className="px-5 pb-6 pt-6 text-center">
        <h1 className="font-display text-[28px] uppercase tracking-[-0.04em] text-ink">
          Digital Menu
        </h1>
        <p className="mt-1 font-sans text-[14px] text-ink/80">Select the category</p>
      </div>
      <CategoryIndexList categories={categories} />
      <div className="h-10" />
      <SiteFooter />
    </PhoneShell>
  );
}
