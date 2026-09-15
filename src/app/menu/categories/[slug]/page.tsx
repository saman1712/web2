import { AppHeader } from "@/components/AppHeader";
import { CategoryPills } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { PhoneShell } from "@/components/PhoneShell";
import { SiteFooter } from "@/components/SiteFooter";
import { WelcomeDialog } from "@/components/WelcomeDialog";
import { BRAND } from "@/lib/brand";
import { categories, getCategory } from "@/lib/menu";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollToCategory } from "./scroll-to-category";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  return {
    title: cat ? `${cat.name} | ${BRAND.name}` : BRAND.name,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const current = getCategory(slug);
  if (!current) notFound();

  return (
    <PhoneShell>
      <WelcomeDialog />
      <ScrollToCategory slug={slug} />
      <AppHeader backHref="/menu" />
      <CategoryPills categories={categories} activeSlug={slug} />
      <div className="pt-2">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </div>
      <SiteFooter />
    </PhoneShell>
  );
}
