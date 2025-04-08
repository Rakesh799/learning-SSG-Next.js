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

// npm install --global serve
// serve -s out -p 3000 // This one is to test, either our SSG is working or not. 
//After building it should create a out folder.

// https://nextjs.org/docs/app/building-your-application/deploying/static-exports