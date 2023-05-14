'use client';
import anime from 'animejs/lib/anime.es';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react'
import Button from '@mae/components/Button';

export default function Navbar() {

  return (
    <div className='w-full lg:h-24 flex justify-center z-20 sticky'>
      <div className='w-[1024px] px-4 lg:px-0 h-full flex lg:flex-row flex-col lg:items-center py-8 gap-4 lg:gap-0'>
        <div className='flex flex-row items-center space-x-4'>
          <div>
            <Link href='/'>
              <LogoText/>
            </Link>
            <h6 className='text-xs font-mono'>v8.0.0</h6>
          </div>
        </div>
        <div className='lg:ml-auto flex flex-row lg:justify-end flex-wrap gap-2 lg:w-5/6'>
          <Button text="🏠 Home" href="/"/>
          <Button text="📦 Projects" href="/projects"/>
          <Button text="🎵 Music" href="/music"/>
          <Button text="😀 My OC" href="/oc"/>
          <Button text="💰 Donate" href="/donate"/>
        </div>
      </div>
    </div>
  )
}

function LogoText() {
  useEffect(() => {
    anime({
      targets: '[data-anim="logo"]',
      translateX: [-16, 0],
      skew: [100, 0],
      scale: [0, 1],
      opacity: [0, 1],
      easing: "easeOutExpo"
    })
  })

  return (
    <h3 className='font-bold text-5xl tracking-tighter' data-anim="logo">mae</h3>
  )
}