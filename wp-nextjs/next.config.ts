import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.WORDPRESS_HOSTNAME}`,
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // {
      //   source: "/wp-login",
      //   destination: `${process.env.WORDPRESS_URL}/wp-admin`,
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
