import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental:{
    taint: true
  }
};

export default nextConfig;
