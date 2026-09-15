import { BalloonMark, DiamondRow, Wordmark } from "@/components/BrandMarks";
import { Gallery } from "@/components/Gallery";
import { HomeHero } from "@/components/HomeHero";
import { MapIllustration } from "@/components/MapIllustration";
import { OrangeButton } from "@/components/OrangeButton";
import { PhoneShell } from "@/components/PhoneShell";
import { SiteFooter } from "@/components/SiteFooter";
import { BRAND } from "@/lib/brand";

export default function HomePage() {
  return (
    <PhoneShell>
      <HomeHero />

      <div className="relative z-10 px-5 pb-2 pt-8">
        <div className="space-y-3">
          <OrangeButton href="/menu">Menu</OrangeButton>
          <OrangeButton href={`tel:${BRAND.phone}`}>Contact</OrangeButton>
        </div>

        <div className="mt-5 flex items-center justify-between px-1 text-[14px]">
          <p className="font-sans text-ink">{BRAND.openLabel}</p>
          <p className="font-display text-[13px] tracking-[-0.03em] text-orange">
            {BRAND.hoursStart} / {BRAND.hoursEnd}
          </p>
        </div>

        <DiamondRow />

        <div className="flex flex-col items-center text-center">
          <BalloonMark className="h-16 w-16" />
          <Wordmark className="mt-2 text-[52px] text-orange" />
          <p className="mt-1 font-display text-[20px] tracking-[-0.03em] text-orange">
            {BRAND.tagline}
          </p>
          <p className="mt-4 max-w-[320px] font-sans text-[15px] font-medium leading-6 text-ink">
            <span className="font-fa">{BRAND.name}</span> Is A Modern{" "}
            <span className="font-extrabold">French Café Bakery</span> Offering An Aesthetic And
            Nature-Inspired Escape, Merging Refined Taste With An Inspirational Vibe.
          </p>
        </div>

        <DiamondRow />
      </div>

      <Gallery />

      <div className="px-2 pt-2">
        <DiamondRow />
        <MapIllustration />
      </div>

      <div className="space-y-3 px-5 pt-4">
        <OrangeButton href={BRAND.maps} external>
          Location
        </OrangeButton>
        <OrangeButton href={BRAND.instagram} external>
          Instagram
        </OrangeButton>
        <p className="pt-2 text-center font-sans text-[14px] font-medium leading-6 text-ink">
          {BRAND.addressLine1}
          <br />
          {BRAND.addressLine2}
        </p>
      </div>

      <SiteFooter variant="join" />
    </PhoneShell>
  );
}
