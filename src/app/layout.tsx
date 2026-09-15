import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, Poppins, Vazirmatn } from "next/font/google";
import { BRAND, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/brand";
import "./globals.css";

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  weight: ["400", "500", "700", "800"],
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND.name,
  metadataBase: new URL("https://vizhen-cafe.vercel.app"),
  openGraph: {
    title: `${BRAND.name} | Digital Menu`,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | Digital Menu`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#C3D0E0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dela.variable} ${poppins.variable} ${vazirmatn.variable}`}>
      <body className="bg-sky text-ink antialiased">{children}</body>
    </html>
  );
}
