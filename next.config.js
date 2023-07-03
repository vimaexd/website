/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: false,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/A8A52G2",
        permanent: true
      },
      {
        source: "/socials",
        destination: "/contact",
        permanent: true
      }
    ]
  },
  images: {
    domains: [
      "i.mae.wtf"
    ]
  }
}

module.exports = nextConfig
