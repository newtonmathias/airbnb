/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "dummyjson.com", "robohash.org"]
  }
}

module.exports = nextConfig
