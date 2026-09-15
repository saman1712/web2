import Link from "next/link";
import { BalloonMark } from "./BrandMarks";

type Props = {
  backHref: string;
  backLabel?: string;
};

export function AppHeader({ backHref, backLabel = "Back" }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-sky/95 px-[18px] pb-2 pt-4 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <Link
          href={backHref}
          className="font-display text-[18px] uppercase tracking-[-0.03em] text-orange underline decoration-2 underline-offset-4"
        >
          {backLabel}
        </Link>
        <Link href="/" aria-label="Home" className="translate-x-1">
          <BalloonMark className="h-11 w-11" />
        </Link>
      </div>
    </header>
  );
}
