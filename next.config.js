const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    remotePatterns: [
      {
        hostname: "cdn.mae.wtf"
      },
      {
        hostname: "i.scdn.co"
      },
      {
        hostname: "cdn.discordapp.com"
      },
      {
        hostname: "media.discordapp.net"
      },
      {
        hostname: "f4.bcbits.com"
      },
      {
        hostname: "static-cdn.jtvnw.net"
      },
      {
        hostname: "i.imgur.com"
      },
      {
        hostname: "thronecdn.com"
      }
    ]
  },
}

module.exports = nextConfig;