'use client';
import anime from 'animejs/lib/anime.es';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react'
import Button from '@mae/components/Button';
import Image from 'next/image';
import Head from 'next/head';

export default function Navbar() {
  const bar = useRef()
  const [stars, setStars] = useState<number[][]>([]);

  useEffect(() => {
    const width = bar.current!.offsetWidth
    const height = bar.current!.offsetHeight
    console.log(width, height)

    let newStars = []
    for(let i = 0; i < 8; i++) {
      let star = Math.floor(Math.random() * (4));
      let randX = Math.floor(Math.random() * (width)) + 0;
      let randY = Math.floor(Math.random() * (height - 16));
      newStars.push([randX, randY, star])
    }
    setStars(stars.concat(newStars))
  }, [bar])

  return (
    <div className='w-full lg:h-32 flex justify-center z-20 sticky bg-neutral-900' ref={bar}>
      <div className="absolute top-0 left-0 w-[1024px] opacity-60 z-0 text-clip">
        {
          stars.map((star, i) => (
            <Image 
            src={`/assets/stars/star_${star[2]}.png`}
            width={16} 
            height={16} 
            alt="star" 
            className='absolute' 
            style={{top: star[1], left: star[0], imageRendering: "pixelated"}}
            key={"star_" + i}/>
          ))
        }
      </div>
      <div className='w-[1024px] px-4 lg:px-0 h-full flex lg:flex-row flex-col lg:items-center py-8 gap-4 lg:gap-0 z-10'>
        <div className='flex flex-row items-center space-x-4'>
          <div>
            <Link href='/'>
              <LogoText/>
            </Link>
            <h6 className='text-xs font-mono'>v8.1.0</h6>
          </div>
        </div>
        <div className='lg:ml-auto flex flex-row lg:justify-end flex-wrap gap-2 lg:w-8/12'>
          <Button text="🏠 Home" href="/"/>
          <Button text="📦 Projects" href="/projects"/>
          <Button text="🎵 Music" href="/music"/>
          <Button text="😀 My OC" href="/oc"/>
          <Button text="💻 Services" href="/services"/>
          <Button text="💰 Donate" href="/donate"/>
          <Button text="📱 Contact" href="/contact"/>
          <Button text="⌨️ Gear" href="/gear"/>
        </div>
      </div>
    </div>
  )
}

function LogoText() {
  return (
    <h3 className='font-bold text-5xl tracking-tighter text-white' data-anim="logo">mae</h3>
  )
}