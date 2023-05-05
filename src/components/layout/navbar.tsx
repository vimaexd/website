'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-24 flex justify-center z-20 sticky'>
      <div className='w-[1024px] h-full flex flex-row items-center py-8'>
        <div className='flex flex-row items-center space-x-4'>
          <div>
            <Link href='/'>
              <h3 className='font-bold text-5xl tracking-tighter'>mae</h3>
            </Link>
            <h6 className='text-xs font-mono'>v8.0.0</h6>
          </div>
        </div>
        <div className='ml-auto flex flex-row space-x-4'>
          <NavbarLink name="🏠 Home" href="/"/>
          <NavbarLink name="📦 Projects" href="/projects"/>
          <NavbarLink name="🎵 Music" href="/music"/>
          <NavbarLink name="😀 My OC" href="/oc"/>
          <NavbarLink name="💰 Donate" href="/donate"/>
        </div>
      </div>
    </div>
  )
}


function NavbarLink({name, href}: {name: string; href: string;}) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <h3 className={
        `${(pathname == href) ? 'bg-purple-500 hover:bg-purple-400 text-white' : 'bg-neutral-800 hover:bg-neutral-700'} transition-all py-1 px-4 rounded-md active:scale-90`
        }>
        {name}
      </h3>
    </Link>
  )
}
