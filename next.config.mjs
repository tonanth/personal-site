/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: './',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

export default nextConfig