'use client';
import { transparentNavbar } from '@mae/store/transparentNavbar';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavbarBlog() {
  const pathname = usePathname();
  const [isTransparentPage, setTransparentPage] = useRecoilState(transparentNavbar);

  // when navigating to a new page, set the transparent state to default
  useEffect(() => {
    setTransparentPage(false)
  }, [pathname])

  return (
    <div 
    className={`w-full p-2 flex justify-center gap-4 items-center z-20 sticky ${isTransparentPage ? 'bg-[rgba(255,255,255,0.05)]' : 'bg-neutral-800'}`}>
      <div className='flex items-center gap-8 w-full max-w-[1024px]'>
        <h2 className='text-2xl font-semibold'>📝</h2>
        <Link href="/blog">
          All Posts
        </Link>
        {/* <Link href="/music">
          Latest release
        </Link> */}

        <div className='ml-auto'>
        </div>
      </div>
    </div>
  )
}
