/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    npm_package_version: process.env.npm_package_version,
  },
};

module.exports = nextConfig;
