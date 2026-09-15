import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api2.shanomenu.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "shanomenu.com",
        pathname: "/public-velour/**",
      },
    ],
  },
};

export default nextConfig;
