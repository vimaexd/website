import React from 'react'
import { promises as fs } from 'fs';
import path from 'path'
import { notFound } from 'next/navigation';

import {remark} from 'remark'
import remarkHtml from 'remark-html'
import BlogPost from './BlogPost';

export default async function page(props: any) {
  console.log("cwd", process.cwd())

  const allblogs = await fs.readdir(path.join('blog'))
  console.log("posts in folder:", allblogs)

  const postPath = path.join('blog', props.params.post)
  console.log("accessing post path: ", postPath)
  try {
    await fs.access(postPath, fs.constants.R_OK)
  } catch(err) {
    console.log(err)
    return notFound();
  }

  const meta = JSON.parse(await fs.readFile(path.join(postPath, 'post.json'), {encoding: "utf-8"}));
  console.log(meta)
  const contentRaw = await fs.readFile(path.join(postPath, meta.file), {encoding: "utf-8"});

  const content = await remark()
  .use(remarkHtml)
  .process(contentRaw)

  return (
    <BlogPost content={content} meta={meta}/>
  )
}
