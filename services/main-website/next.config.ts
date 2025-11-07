import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co", pathname: "/**" },
    ],
  },
  experimental: {
    useCache: true,
    // turbo: {
    //   rules: {
    //     "*.svg": {
    //       loaders: ["@svgr/webpack"],
    //       as: "*.js",
    //     },
    //   },
    // },
  },
  sassOptions: {
    additionalData: `@import "src/styles/common.scss";`,
  },
};

export default nextConfig;
