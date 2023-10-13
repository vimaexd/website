import React from 'react'
import { promises as fs } from 'fs';
import path from 'path'
import { notFound } from 'next/navigation';

import {remark} from 'remark'
import remarkHtml from 'remark-html'
import BlogPost from './BlogPost';

export default async function page(props: any) {
  const postPath = path.join(process.cwd(), 'blog', props.params.post)
  try {
    await fs.access(postPath, fs.constants.R_OK)
  } catch(err) {
    return notFound();
  }

  const meta = JSON.parse(await fs.readFile(path.join(postPath, 'post.json'), {encoding: "utf-8"}));
  const contentRaw = await fs.readFile(path.join(postPath, meta.file), {encoding: "utf-8"});

  const content = await remark()
  .use(remarkHtml)
  .process(contentRaw)

  return (
    <BlogPost content={content} meta={meta}/>
  )
}
