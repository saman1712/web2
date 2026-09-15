"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OrangeButton } from "./OrangeButton";

const KEY = "vizhen-welcome-seen";

export function WelcomeDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function dismiss() {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#C3D0E0]/85 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            dir="rtl"
            className="w-full max-w-[340px] rounded-[28px] px-2 py-4 text-center"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
          >
            <p className="font-fa text-[20px] font-bold text-ink">با کمال احترام؛</p>
            <p className="mt-3 font-fa text-[16px] leading-8 text-ink">
              در ساعات شلوغی، زمان استفاده از میزها یک ساعت و نیم می‌باشد.
            </p>
            <p className="mt-3 font-fa text-[16px] text-ink">با تشکر از همراهی شما</p>
            <div className="mt-8">
              <OrangeButton onClick={dismiss}>متوجه شدم</OrangeButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
