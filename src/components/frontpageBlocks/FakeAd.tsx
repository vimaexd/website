'use client';
import React from 'react'
import Image from 'next/image';
import useLocalStorage from 'use-local-storage';

export default function FakeAd({ad}: {ad: any}) {
  const [visible, setVisibility] = useLocalStorage("mae.showFakeAds", true);

  if(!visible) return (
    <div className='flex justify-between'>
      <p className='text-xs text-neutral-600'>
        fake ads are hidden
      </p>
      <p className='text-xs text-neutral-600 hover:text-white hover:underline cursor-pointer' onClick={() => setVisibility(!visible) }>
        show
      </p>
    </div>
  )

  return (
    <div>
      <Image src={`/assets/fakeads/${ad.filename}`} alt="fake ad" width="288" height="120"/>
      <div className='flex justify-between'>
        <p className='text-xs text-neutral-600'>
          fake ad by {ad.author}
        </p>
        <p className='text-xs text-neutral-600 hover:text-white hover:underline cursor-pointer' onClick={() => setVisibility(!visible)}>
          hide
        </p>
      </div>
    </div>
  )
}

export function FakeAdPlaceholder() {
  return (
    <div>
      <div className='w-full h-[160px] bg-gray-400 animate-pulse'></div>
      <div className='flex justify-between'>
        <div className='bg-gray-400 animate-pulse w-2/6'/>
        <div className='bg-gray-400 animate-pulse w-1/6'/>
      </div>
    </div>
  )
}