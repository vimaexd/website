import Image from 'next/image'
import React from 'react'
import ChipButton from '@mae/components/Chip';
import Releases from '@mae/data/discography.json';

export default function latest_release() {
  let latest = Releases.releases[0]
  return (
    <div className='w-full bg-str-bleck-200 rounded-lg bg-center bg-cover' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(${latest.album_art})`
    }}>
      <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row gap-4'>
        <Image src={latest.album_art} width={128} height={128} alt={'Cover art'} quality={100} className='rounded-lg'></Image>
        <div className='flex flex-col items-start'>
          <h3 className="text-sm font-normal">Latest release</h3>
          <h1 className='text-4xl font-bold tracking-tight'>{latest.title}</h1>
          <h4 className='text-xs'>{latest.tracks.length} tracks • {latest.year}</h4>
          <div className='mt-auto flex-grow-0'>
            <ChipButton href="/" text='Listen'/>
          </div>
        </div>
      </div>
    </div>
  )
}
