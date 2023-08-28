'use client';
import { transparentNavbar } from '@mae/store/transparentNavbar';
import Link from 'next/link';
import React from 'react'
import { useRecoilState } from 'recoil';
import Image from 'next/image';

export default function NavbarMusic() {
  const [isTransparentPage, setTransparentPage] = useRecoilState(transparentNavbar);

  return (
    <div 
    className={`w-full bg-neutral-800 p-2 flex justify-center gap-4 items-center z-20 sticky ${isTransparentPage ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-neutral-800'}`}>
      <div className='flex items-center gap-8 w-full max-w-[1024px]'>
        <h2 className='text-2xl font-semibold'>🎹</h2>
        <div className='flex gap-8 overflow-scroll'>
          <Link href="/music">
            Discography
          </Link>
          <Link href="/music/stems">
            Stems
          </Link>
          <Link href="/music/wallpapers">
            Wallpapers
          </Link>
        </div>
        {/* <Link href="/music">
          Latest release
        </Link> */}

        <div className='ml-auto'>
          <Link href="https://etstringy.bandcamp.com">
            <Image src="/assets/logos/bandcamp.png" width={120} height={20} alt="Bandcamp"/>
          </Link>
        </div>
      </div>
    </div>
  )
}
