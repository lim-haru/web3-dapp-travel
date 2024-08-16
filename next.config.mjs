/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_IPFS_GATEWAY).hostname],
  },
};

export default nextConfig;
