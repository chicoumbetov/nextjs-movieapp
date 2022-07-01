/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
