import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Allow HMR to work when accessed via IP from other devices (e.g. mobile)
    allowedDevOrigins: ["*"],
  },
};

export default nextConfig;
