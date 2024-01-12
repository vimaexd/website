import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';

import { promises as fs } from 'fs';
import path from 'path'
import Button from '@mae/components/Button';


export default async function WallpaperPage() {
  const postPath = path.join('public', 'downloads', 'wallpaper');
  const _dir = await fs.readdir(postPath)
  let dir = _dir.sort((a: string,b: string) => (
    +b.split("_")[0] - +a.split("_")[0] 
  ))

  return (
    <PageContainer>
      <PageHeader title='🖼️ wallpapers'>
        free to download desktop wallpapers
      </PageHeader>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
        {
          dir.map((filename: string) => (
            <div className='flex flex-col gap-2 w-fit'>
              <Image src={`/downloads/wallpaper/${filename}`} width={256} height={10} alt="Wallpaper"></Image>
              <p className='font-mono text-sm'>{filename.split("_")[1]}</p>
              <Button href={`/downloads/wallpaper/${filename}`} text='Download' className='w-fit'/>
            </div>
          ))
        }
      </div>

    </PageContainer>
  )
}
