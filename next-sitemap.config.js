const fs = require('fs/promises')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mae.wtf",
  generateRobotsTxt: true,
  exclude: [
    "/api/*"
  ],
  async additionalPaths() {
    let paths = []
    
    // discog
    const discography = await require('./src/data/discography-vimae.json');
    discography.releases.forEach((r) => {
      paths.push({loc: "/music/release/" + r.slug})
    })

    // blog
    const blogdir = await fs.readdir('blog');
    blogdir.forEach((b) => {
      paths.push({loc: "/blog/" + b})
    })

    return paths;
  }
}