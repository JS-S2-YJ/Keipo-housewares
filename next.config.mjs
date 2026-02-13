/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages 배포 시 필요할 수 있는 설정 (저장소 이름이 경로에 포함될 경우)
  // basePath: process.env.NODE_ENV === 'production' ? '/Keipo-housewares' : '',
};

export default nextConfig;
