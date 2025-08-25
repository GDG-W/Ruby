import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/common.scss";`,
  },
};

export default nextConfig;
