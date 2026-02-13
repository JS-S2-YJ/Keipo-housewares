/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Keipo-housewares',
  assetPrefix: '/Keipo-housewares',
};

export default nextConfig;
