/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYnJhZGNodW5kYWdlIiwiYSI6ImNsY3MxYnJ0bjBjYnozcHBzOXB3ZjRhd3YifQ.Frq-2B0E_Y5NDK-aPPnxzA",
  },
}

module.exports = nextConfig
