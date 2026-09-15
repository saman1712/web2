"use client";

import { useState } from "react";
import { OrangeButton } from "@/components/OrangeButton";

const YEARS = Array.from({ length: 36 }, (_, i) => 1350 + i);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const JOB_TITLES = [
  "باریستا",
  "سرآشپز",
  "کمک آشپز",
  "شیرینی‌پز",
  "گارسون",
  "صندوق‌دار",
  "مدیر شیفت",
  "سایر",
];

type Status = "idle" | "sending" | "ok" | "error";

export function JobsForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.birthDate = `${data.year}/${data.month}/${data.day}`;

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      setMessage("درخواست شما ثبت شد.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("ارسال ناموفق بود. دوباره تلاش کنید.");
    }
  }

  const field =
    "w-full rounded-[18px] border-0 bg-orange px-4 py-3 text-right font-fa text-[15px] text-sky outline-none placeholder:text-sky/70";
  const label = "mb-1 block text-right font-fa text-[14px] font-bold text-orange";

  return (
    <form dir="rtl" onSubmit={onSubmit} className="space-y-4 px-5 pb-6">
      <label className="block">
        <span className={label}>نام و نام خانوادگی</span>
        <input name="fullName" required className={field} />
      </label>

      <label className="block">
        <span className={label}>عنوان شغلی</span>
        <select name="jobTitle" required defaultValue="" className={field}>
          <option value="" disabled>
            انتخاب کنید
          </option>
          {JOB_TITLES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className={label}>تاریخ تولد</legend>
        <div className="grid grid-cols-3 gap-2">
          <label>
            <span className="sr-only">سال</span>
            <select name="year" required defaultValue="" className={field}>
              <option value="" disabled>
                سال
              </option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">ماه</span>
            <select name="month" required defaultValue="" className={field}>
              <option value="" disabled>
                ماه
              </option>
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">روز</span>
            <select name="day" required defaultValue="" className={field}>
              <option value="" disabled>
                روز
              </option>
              {DAYS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <label className="block">
        <span className={label}>شماره تماس</span>
        <input name="phone" required inputMode="tel" className={field} />
      </label>

      <label className="block">
        <span className={label}>نوع همکاری</span>
        <select name="workType" required defaultValue="" className={field}>
          <option value="" disabled>
            انتخاب کنید
          </option>
          <option value="part">پاره وقت (۳ روز در هفته)</option>
          <option value="full">تمام وقت (۶ روز در هفته)</option>
        </select>
      </label>

      <label className="block">
        <span className={label}>نام آخرین محل کار و مدت همکاری</span>
        <input name="lastJob" className={field} />
      </label>

      <label className="block">
        <span className={label}>خلاصه رزومه</span>
        <textarea name="resume" rows={4} className={`${field} min-h-[96px]`} />
      </label>

      <label className="block">
        <span className={label}>محدوده سکونت</span>
        <input name="area" className={field} />
      </label>

      <OrangeButton type="submit" className="mt-4">
        {status === "sending" ? "..." : "ثبت درخواست"}
      </OrangeButton>

      <p className="pt-2 text-center font-fa text-[13px] leading-7 text-ink">
        پس از ثبت فرم در صورت قبولی مشخصات شما، همکاران ما با شما تماس می‌گیرند.
      </p>

      {message && (
        <p
          className={`text-center font-fa text-[14px] ${status === "ok" ? "text-orange" : "text-red-700"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
