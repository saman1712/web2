import Link from "next/link";
import { PhoneShell } from "@/components/PhoneShell";
import { OrangeButton } from "@/components/OrangeButton";
import { BRAND } from "@/lib/brand";

export default function NotFound() {
  return (
    <PhoneShell>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="font-fa text-[40px] font-extrabold text-orange">{BRAND.name}</p>
        <p className="mt-4 font-display text-[22px] uppercase text-ink">Page not found</p>
        <div className="mt-8 w-full">
          <OrangeButton href="/">Back</OrangeButton>
        </div>
        <Link href="/menu" className="mt-4 font-display text-orange underline">
          Digital Menu
        </Link>
      </div>
    </PhoneShell>
  );
}
