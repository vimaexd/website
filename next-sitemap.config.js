const fs = require('fs/promises')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mae.wtf",
  generateRobotsTxt: true,
  async additionalPaths() {
    let paths = []
    
    // discog
    const discography = await import('./src/data/discography.json');
    discography.releases.forEach((r) => {
      paths.push("/music/release/" + r.slug)
    })

    // blog
    const blogdir = await fs.readdir('blog');
    blogdir.forEach((b) => {
      paths.push("/blog/" + b)
    })

    return paths;
  }
}