
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
        hostname: "*"
      },
    ]
  },
}

module.exports = nextConfig;