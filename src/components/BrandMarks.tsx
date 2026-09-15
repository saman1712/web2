import { BRAND } from "@/lib/brand";

export function BalloonMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 72" className={className} aria-hidden="true">
      <g fill="#F05323">
        <ellipse cx="14" cy="36" rx="12" ry="8" />
        <ellipse cx="6" cy="38" rx="7" ry="5.5" />
        <ellipse cx="82" cy="36" rx="12" ry="8" />
        <ellipse cx="90" cy="38" rx="7" ry="5.5" />
        <ellipse cx="48" cy="24" rx="15" ry="19" />
        <path d="M48 43.5 L42.5 54 H53.5 Z" />
        <rect x="42" y="53" width="12" height="5.5" rx="1.2" />
      </g>
      <ellipse cx="42" cy="16" rx="4.5" ry="7" fill="#ff8a62" opacity="0.4" />
    </svg>
  );
}

export function Wordmark({
  className = "text-[48px] text-orange",
}: {
  className?: string;
}) {
  return (
    <p className={`font-fa leading-none ${className}`} aria-label={BRAND.name}>
      {BRAND.name}
    </p>
  );
}

export function CloudIcon({ className = "h-8 w-12 text-cloud" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 36h28c8 0 14-6 14-13s-6-13-14-13c-1.4 0-2.7.2-4 .6C42.2 4.8 36.6 0 29.5 0 20.4 0 13 6.7 12.1 15.4 5.3 16.6 0 22.4 0 29c0 7 6.3 7 12 7h8Z"
      />
    </svg>
  );
}

export function DiamondRow({ count = 7 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="diamond" />
      ))}
    </div>
  );
}

export function CloudRow() {
  return (
    <div className="flex items-center justify-center gap-10 py-8" aria-hidden="true">
      <CloudIcon className="h-9 w-14 text-[#d7e0ea]" />
      <CloudIcon className="h-9 w-14 text-[#d7e0ea]" />
      <CloudIcon className="h-9 w-14 text-[#d7e0ea]" />
    </div>
  );
}
