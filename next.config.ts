import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crafto.themezaa.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // <- fixed here
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "unblast.com", // ✅ added this line
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
