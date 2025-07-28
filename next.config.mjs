/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "afrotouch.design",
      },
      {
        protocol:"https",
        hostname:"media.istockphoto.com"
      },
      {
        protocol:"https",
        hostname:"img.freepik.com"
      },
      {
        protocol:"https",
        hostname:"e7.pngegg.com"
      },
      {
        protocol:"https",
        hostname:"static.vecteezy.com"
      },
    ],
  },
};

export default nextConfig;
