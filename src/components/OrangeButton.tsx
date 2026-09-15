"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type Tone = "orange" | "sky";

const tones: Record<Tone, string> = {
  orange:
    "bg-orange text-sky hover:bg-orange-hover shadow-pill",
  sky: "bg-sky text-orange hover:bg-[#b7c6d8]",
};

type Props = {
  href?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: ComponentProps<"button">["onClick"];
  external?: boolean;
};

export function OrangeButton({
  href,
  tone = "orange",
  children,
  className = "",
  type = "button",
  onClick,
  external,
}: Props) {
  const classes = `flex w-full items-center justify-center rounded-[20px] px-8 py-[18px] font-display text-[24px] leading-none tracking-[-0.02em] transition-transform ${tones[tone]} ${className}`;

  const inner = (
    <motion.span
      className="block w-full text-center uppercase"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={classes}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
