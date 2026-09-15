import { AppHeader } from "@/components/AppHeader";
import { PhoneShell } from "@/components/PhoneShell";
import { SiteFooter } from "@/components/SiteFooter";
import { BRAND } from "@/lib/brand";
import { JobsForm } from "./jobs-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Jobs | ${BRAND.name}`,
};

export default function JobsPage() {
  return (
    <PhoneShell>
      <AppHeader backHref="/" />
      <div dir="rtl" className="px-5 pb-4 pt-8 text-right">
        <h1 className="font-fa text-[28px] font-extrabold text-orange">فرم استخدام</h1>
        <p className="mt-4 font-fa text-[16px] leading-8 text-ink">
          {BRAND.cafeFa} استخدام می‌کند.
        </p>
        <p className="mt-2 font-fa text-[15px] leading-8 text-ink">
          اگر مشتاق همکاری با ما هستید، اطلاعات خود را از طریق فرم زیر ارسال کنید.
        </p>
      </div>
      <JobsForm />
      <SiteFooter />
    </PhoneShell>
  );
}
