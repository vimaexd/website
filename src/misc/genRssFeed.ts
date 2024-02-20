import path from 'path';
import fs from 'fs/promises';
import dayjs from 'dayjs';
import RSS from 'rss';
import {remark} from 'remark'
import remarkHtml from 'remark-html'

export async function generateRSSFeed() {
  // generate rss feed from blog dir using rss package
  const postPath = path.join('blog');
  const dir = await fs.readdir(postPath)

  let posts = [];

  for await(const id of dir) {
    const meta = await fs.readFile(path.join(postPath, id, 'post.json'), {encoding: "utf-8"})
    posts.push(JSON.parse(meta));
  }

  posts = posts.sort((a: any, b: any) => {
    const da = dayjs(a.date).unix()
    const db = dayjs(b.date).unix()
    return db - da
  })

  const feed = new RSS({
    feed_url: 'https://mae.wtf/rss.xml',
    site_url: 'https://mae.wtf',
    title: 'vimae\'s blog',
    description: 'my blog covering topics i like to talk about',
    image_url: 'https://mae.wtf/assets/maewave.png',
    pubDate: new Date(),
    copyright: 'vimae',
  })

  for await(let p of posts) {
    // fetch post
    const rawContent = await fs.readFile(path.join(postPath, p.id, p.file), {encoding: "utf-8"});
    
    const content = await remark()
    .use(remarkHtml)
    .process(rawContent)

    feed.item({
      title: p.title,
      description: content.toString(),
      url: `https://mae.wtf/blog/${p.id}`,
      date: p.date,
      author: 'vimae',
      categories: ['post'].concat(p.tags),
      enclosure: {
        url: `https://mae.wtf/assets/blog_img/${p.id}/${p.header_img}`,
        type: 'image/jpeg',
      },
      guid: p.id,
    })
  }

  fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
}

generateRSSFeed();