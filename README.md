# ویژن — Digital Café Menu

Near-identical recreation of the [Velour digital menu](https://shanomenu.com/velour/menu) as a standalone Next.js site, with branding swapped to **ویژن**.

## Names that were changed

| Original | New |
| --- | --- |
| Velour | ویژن |
| Velour Cafe / Velour Café | ویژن Cafe / کافه ویژن |
| Royal Velour | Royal ویژن |
| رویال ولور | رویال ویژن |
| ولور / ولور کافه | ویژن / کافه ویژن |
| Logo wordmark `velour` | Text logo **ویژن** (placeholder — replace with the real mark) |
| Meta title `Velour - Velour \| Shano Menu` | `ویژن - ویژن \| Digital Menu` |

Everything else (menu copy, prices, category order, layout, colors, hours, address, phone, and “By Shanomenu” footer) is kept as on the original.

**Not swapped (contact URLs that still contain the old handle):**

- Instagram: `https://www.instagram.com/velourcafe`
**Hero video:** the original `velour.webm` has the old wordmark burned into the footage. This clone keeps the video (same pastry/café footage) and covers that mark with an opaque **ویژن / CAFE BAKERY** plate. Swap in a clean branded video when you have one.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional env (copy `.env.example` to `.env.local`):

- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_MAPS_URL`

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repo in [Vercel](https://vercel.com/new) — framework preset is Next.js (`vercel.json` is included).
3. Or from the CLI:

```bash
npm i -g vercel
vercel
```

No special server, database, or build settings are required. The jobs form posts to `/api/jobs` (serverless) and logs the application.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS
- Framer Motion
- `next/image` for menu and gallery photos

## Approximations

- Persian UI font on the original is **Peyda**; this build uses **Vazirmatn** from Google Fonts.
- Display English uses **Dela Gothic One** and body English uses **Poppins**, matching the original.
- The original is a Vue SPA on Shano Menu; this is a static/SSR Next.js clone of the public pages (`/`, `/menu`, `/menu/categories/[slug]`, `/jobs`).
- The neighborhood map is an SVG recreation of the illustrated map.
- The balloon + cloud mark is redrawn; drop a real logo into `src/components/BrandMarks.tsx` when you have one.
