import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `STATIC_EXPORT=1 npm run build` writes a plain static site to out/ (Cloudflare Pages, GitHub Pages, any static host).
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;
