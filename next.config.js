/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "www.w3.org", "sttoolsprdwe1217.blob.core.windows.net", "https://stdemoneil.blob.core.windows.net"],
  },
};

module.exports = nextConfig;

