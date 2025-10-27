// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs/promises');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mae.wtf",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/shhh__/*",
    "/doodlefm"
  ],
  async additionalPaths() {
    let paths = []
    
    // discog
    const _discography = await fs.readFile('./src/data/discography-vimae.json', { encoding: "utf-8"});
    const discography = JSON.parse(_discography);
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