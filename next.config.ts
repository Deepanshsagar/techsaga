import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resources.techsaga.co.in",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
