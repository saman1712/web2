import { DiamondRow } from "@/components/BrandMarks";
import { FoodCard } from "@/components/FoodCard";
import { displayEnglish, type MenuCategory } from "@/lib/menu";

export function CategorySection({ category }: { category: MenuCategory }) {
  const parentFoods = category.foods.filter((f) => !f.subcategory);
  const childGroups = category.children.filter((c) => c.foods.length > 0);

  return (
    <section id={category.slug} className="scroll-mt-28 pb-10">
      <DiamondRow />
      <div className="px-5">
        <h3 dir="rtl" className="text-right font-fa text-[28px] font-bold text-orange">
          {category.nameFa}
        </h3>
        <h3 className="mt-2 font-display text-[28px] uppercase tracking-[-0.04em] text-orange">
          {displayEnglish(category.name)}
        </h3>
      </div>
      <DiamondRow />

      <div>
        {parentFoods.map((item, i) => (
          <FoodCard
            key={item.id}
            item={item}
            showDivider={i < parentFoods.length - 1 || childGroups.length > 0}
          />
        ))}

        {childGroups.map((group) => (
          <div key={group.id} className="mt-4">
            <div className="px-5 pb-4">
              {group.nameFa && (
                <p dir="rtl" className="text-right font-fa text-[20px] font-bold text-orange">
                  {group.nameFa}
                </p>
              )}
              <p className="font-display text-[18px] uppercase tracking-[-0.03em] text-orange">
                {displayEnglish(group.name)}
              </p>
            </div>
            {group.foods.map((item, i) => (
              <FoodCard key={item.id} item={item} showDivider={i < group.foods.length - 1} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
