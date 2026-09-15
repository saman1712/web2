import { BRAND } from "@/lib/brand";
import { OrangeButton } from "./OrangeButton";

type Props = {
  variant?: "contact" | "join";
};

export function SiteFooter({ variant = "contact" }: Props) {
  return (
    <footer className="mt-6 rounded-t-[28px] bg-orange px-5 pb-10 pt-8 text-center text-sky">
      {variant === "join" ? (
        <>
          <h3 className="font-display text-[28px] uppercase tracking-[-0.03em]">Join us</h3>
          <p className="mx-auto mt-2 max-w-[280px] font-sans text-[13px] leading-relaxed text-sky">
            If you want to work with us in {BRAND.cafeEn}, go to the jobs page
          </p>
          <div className="mt-6 space-y-3">
            <OrangeButton href="/jobs" tone="sky">
              Jobs
            </OrangeButton>
            <OrangeButton href={`tel:${BRAND.phone}`} tone="sky">
              Call
            </OrangeButton>
          </div>
        </>
      ) : (
        <>
          <h3 className="font-display text-[28px] uppercase tracking-[-0.03em]">Get in Touch</h3>
          <p className="mx-auto mt-2 max-w-[280px] font-sans text-[13px] leading-relaxed">
            if you have any question or need reservation call {BRAND.cafeEn}
          </p>
          <div className="mt-6">
            <OrangeButton href={`tel:${BRAND.phone}`} tone="sky">
              Call
            </OrangeButton>
          </div>
        </>
      )}

      <a href="https://shanomenu.com/" className="mt-8 block">
        <p className="font-display text-[22px] uppercase tracking-[-0.03em] text-sky">
          By Shanomenu
        </p>
        <p className="mt-1 font-sans text-[11px] text-sky/80">© 2026 ShanoMenu. Version 1.</p>
      </a>
    </footer>
  );
}
