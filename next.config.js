/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "dummyjson.com", "robohash.org", "jsonkeeper.com", "www.jsonkeeper.com"]
  }
}

module.exports = nextConfig
