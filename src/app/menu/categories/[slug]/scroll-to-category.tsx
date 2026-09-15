"use client";

import { useEffect } from "react";

export function ScrollToCategory({ slug }: { slug: string }) {
  useEffect(() => {
    const el = document.getElementById(slug);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [slug]);

  return null;
}
