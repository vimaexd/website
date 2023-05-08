import Image from 'next/image'
import React from 'react'
import ChipButton from '@mae/components/Chip';

export default function latest_release() {
  return (
    <div className='w-full bg-str-bleck-200 rounded-lg bg-center bg-cover' style={{
      backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(/assets/tmp/cover.png)"
    }}>
      <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row gap-4'>
        <Image src="/assets/tmp/cover.png" width={128} height={128} alt={'Cover art'} quality={100} className='rounded-lg'></Image>
        <div className='flex flex-col items-start'>
          <h3 className="text-sm font-normal">Latest release</h3>
          <h1 className='text-4xl font-bold tracking-tight'>moon</h1>
          <h4 className='text-xs'>4 tracks • 30/04/2023</h4>
          <div className='mt-auto flex-grow-0'>
            <ChipButton href="/" text='Listen'/>
          </div>
        </div>
      </div>
    </div>
  )
}
