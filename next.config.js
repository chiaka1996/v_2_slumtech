/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "img.icons8.com",
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "res.cloudinary.com",
          pathname: '/images/**',
        },
      ],
    },
  }
