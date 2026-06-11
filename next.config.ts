import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dočasné placeholder fotky — po nahrání reálných fotek Glampidolu lze odstranit
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
