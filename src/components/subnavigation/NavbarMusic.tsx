'use client';
import { transparentNavbar } from '@mae/store/transparentNavbar';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function NavbarMusic() {
  const pathname = usePathname();
  const [isTransparentPage, setTransparentPage] = useRecoilState(transparentNavbar);

  // when navigating to a new page, set the transparent state to default
  useEffect(() => {
    setTransparentPage(false)
  }, [pathname])

  return (
    <div 
    className={`w-full p-2 flex justify-center gap-4 items-center z-20 sticky ${isTransparentPage ? 'bg-[rgba(0,0,0,0.25)]' : 'bg-ctp-mantle'}`}>
      <div className='flex items-center gap-8 w-full max-w-[1024px]'>
        <h2 className='text-2xl font-semibold'>🎹</h2>
        <div className='flex gap-8 overflow-x-auto'>
          <Link href="/music">
            Discography
          </Link>
          <Link href="/music/stems">
            Stems
          </Link>
        </div>
        {/* <Link href="/music">
          Latest release
        </Link> */}

        <div className='ml-auto'>
          <Link href="https://vimae.bandcamp.com">
            <Image
              src="/assets/logos/bandcamp.png"
              width={120}
              height={20}
              alt="Bandcamp"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
