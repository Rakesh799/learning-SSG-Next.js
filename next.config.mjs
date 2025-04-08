/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
};

export default nextConfig;

