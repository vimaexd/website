import Image from 'next/image'
import React from 'react'
import ChipButton from '@mae/components/ChipButton';
import Releases from '@mae/data/discography-vimae.json';
import Link from 'next/link';

export default function latest_release() {
  let latest = Releases.releases[0]
  return (
    <Link href={`/music/release/${latest.slug}`} className='text-white'>
      <div className='w-full bg-neutral-800 rounded-lg bg-center bg-cover' style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(${latest.album_art})`
      }}>
        <div className='w-full h-full p-4 backdrop-blur-xl rounded-lg space-y-2'>
          <h2 className="text-xs font-semibold tracking-widest uppercase">Latest release</h2>
          <div className='flex flex-row gap-4'>
            <Image src={latest.album_art} width={64} height={64} alt={'Cover art'} quality={100} className='w-fit h-fit rounded-lg'></Image>
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-bold tracking-tight align-bottom -mt-2'>{latest.title}</h3>
              <p className='text-xs'>{latest.tracks.length} track{(latest.tracks.length > 1) && "s"} • {latest.year}</p>
              {/* <div className='mt-auto flex-grow-0'>
                <ChipButton href="/" text='Listen'/>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className='absolute bottom-2 right-3'>
            <i className='bx bx-sm bx-link-external'></i>
          </div>
        </div>
      </div>
    </Link>
  )
}
