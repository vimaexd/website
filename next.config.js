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
        source: "/socials",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/watercolor-stems",
        destination: "https://drive.google.com/drive/folders/198X_ZzJQv7VeguTzRgJ6RJy8z9fihQr8?usp=sharing",
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