import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'

import { promises as fs } from 'fs';
import path from 'path'
import ProjectWithImg from '@mae/components/projectCards/ProjectWithImg';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function BlogAllPostsPage() {
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

  // console.log(posts)

  return (
    <PageContainer>
      <PageHeader title="blog">
        i write here from time to time :)
      </PageHeader>
      <div className='grid sm:grid-cols-2 gap-8 flex-grow-0'>
        {
          posts.map((d) => (
            <Link key={d.id} href={`/blog/${d.id}`} className='text-white hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none'>
              <ProjectWithImg
              title={d.title}
              description={`${dayjs(d.date).format("DD/MM/YYYY")} • ${d.tags.join(", ")}`}
              image={`/assets/blog_img/${d.id}/${d.header_img}`}>
              </ProjectWithImg>
            </Link>
          ))
        }
      </div>
    </PageContainer>
  )
}
