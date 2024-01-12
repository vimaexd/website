const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    version
  },
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
      "i.mae.wtf",
      "i.scdn.co",
      "cdn.discordapp.com",
      "f4.bcbits.com",
      "static-cdn.jtvnw.net"
    ]
  }
}

module.exports = nextConfig;