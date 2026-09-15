/** Brand copy after the Velour → ویژن rename. */
export const BRAND = {
  name: "ویژن",
  nameFa: "ویژن",
  cafeEn: "ویژن Cafe",
  cafeFa: "کافه ویژن",
  subtitle: "CAFE BAKERY",
  tagline: "Inspired by the Sky.",
  description:
    "ویژن is a modern French café bakery offering an aesthetic and nature-inspired escape, merging refined taste with an inspirational vibe.",
  descriptionHtml: {
    before: "ویژن is a modern ",
    accent: "French Café Bakery",
    after:
      " offering an aesthetic and nature-inspired escape, merging refined taste with an inspirational vibe.",
  },
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+989376133888",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/velourcafe",
  maps:
    process.env.NEXT_PUBLIC_MAPS_URL ??
    "https://www.google.com/maps/place/%D9%85%D8%B1%DA%A9%D8%B2+%D8%AE%D8%B1%DB%8C%D8%AF+%D8%AF%D9%88%D9%85%D8%A7%D9%86%E2%80%AD/@35.769781,51.3763371,17z",
  addressLine1: "Floor 3, Duman Mall, Khovardin Blvd.",
  addressLine2: "Shahrak-E-Gharb, Tehran, IRAN",
  hoursStart: "8:30AM",
  hoursEnd: "10:00PM",
  openLabel: "We Are Open!",
  heroVideo: "https://shanomenu.com/public-velour/videos/velour.webm",
  slides: [
    "https://shanomenu.com/public-velour/images/slides/slide-1.webp",
    "https://shanomenu.com/public-velour/images/slides/slide-2.webp",
    "https://shanomenu.com/public-velour/images/slides/slide-3.webp",
    "https://shanomenu.com/public-velour/images/slides/slide-4.webp",
    "https://shanomenu.com/public-velour/images/slides/slide-5.webp",
    "https://shanomenu.com/public-velour/images/slides/slide-6.webp",
  ],
} as const;

export const SITE_TITLE = `${BRAND.name} - ${BRAND.name} | Digital Menu`;
export const SITE_DESCRIPTION = BRAND.description;
