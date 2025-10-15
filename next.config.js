
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
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

      // discord profile pictures
      {
        hostname: "cdn.discordapp.com"
      },
      {
        hostname: "media.discordapp.net"
      },

      // bandcamp profile pictures
      {
        hostname: "f4.bcbits.com"
      },

      // twitch.tv profile pictures
      {
        hostname: "static-cdn.jtvnw.net"
      },

      // throne profile pictures
      {
        hostname: "thronecdn.com"
      },

      // imgur (for musicbee album arts)
      {
        hostname: "i.imgur.com"
      },

      // spotify (album art)
      {
        hostname: "i.scdn.co"
      },

      // apple music (album art)
      {
        hostname: "*.mzstatic.com"
      },
      {
        hostname: "rise.cider.sh"
      },

      // jellyfin (album art)
      {
        hostname: "jellyfin.maecafe.link"
      }
    ]
  },
}

module.exports = nextConfig;