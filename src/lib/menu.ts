import menuData from "@/data/menu.json";

export type FoodItem = {
  id: number;
  name: string;
  nameFa: string;
  description: string | null;
  descriptionFa: string | null;
  price: number;
  image: string | null;
  style: string | null;
  order: number;
  subcategory: string | null;
};

export type CategoryChild = {
  id: number;
  name: string;
  nameFa: string;
  slug: string;
  foods: FoodItem[];
};

export type MenuCategory = {
  id: number;
  name: string;
  nameFa: string;
  slug: string;
  order: number;
  foods: FoodItem[];
  children: CategoryChild[];
};

export const categories = menuData.categories as MenuCategory[];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(price: number) {
  return String(price);
}

/** Title-case English menu labels the way the original UI does. */
export function displayEnglish(name: string) {
  return name
    .split(" ")
    .map((word) => {
      if (!word) return word;
      if (word === "&") return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
