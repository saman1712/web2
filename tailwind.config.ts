import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F05323",
          hover: "#dc471c",
        },
        sky: {
          DEFAULT: "#C3D0E0",
          deep: "#B7C6D8",
        },
        cream: "#EDE4D4",
        ink: "#1E1E1E",
        cloud: "#E6EAF0",
      },
      fontFamily: {
        display: ["var(--font-dela)", "sans-serif"],
        mark: ["var(--font-lalezar)", "var(--font-dela)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
        fa: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
      },
      maxWidth: {
        phone: "430px",
      },
      boxShadow: {
        pill: "0 8px 24px rgba(240, 83, 35, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
