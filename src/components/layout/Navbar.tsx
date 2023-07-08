'use client';
import anime from 'animejs';
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import Button from '@mae/components/Button';
import Image from 'next/image';
import _ from 'lodash';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  const bar = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<number[][]>([]);
  const [starsDone, setStarsDone] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const _generateStars = () => {
    console.log("✨")
    const width = bar.current!.offsetWidth
    const height = bar.current!.offsetHeight

    let newStars = []
    for(let i = 0; i < 8; i++) {
      let star = Math.floor(Math.random() * (4));
      let randX = Math.floor(Math.random() * (width - 16)) + 0;
      let randY = Math.floor(Math.random() * (height - 16));
      newStars.push([randX, randY, star])
    }
    setStarsDone(true)
    setStars(stars.concat(newStars))
  }

  const generateStars = _.debounce(() => {
    _generateStars()
  }, 50)

  useEffect(() => {
    if(!starsDone) {
      window.addEventListener('resize', () => {
        generateStars()
      })
      generateStars()
    }

    if(menuVisible) {
      anime({
        targets: ".anim-navbar-tray a",
        translateX: [-50, 0],
        delay: anime.stagger(50),
        opacity: [0, 1],
      })
    }
  }, [bar, menuVisible])

  return (
    <div className={`w-full lg:h-32 flex justify-center z-20 sticky ${(path.startsWith('/music/')) ? 'bg-transparent' : 'bg-neutral-900'}`} ref={bar}>
      <div className="absolute top-0 left-0 lg:w-[1024px] w-full opacity-60 z-0 text-clip">
        {
          stars.map((star, i) => (
            <Image 
            src={`/assets/stars/star_${star[2]}.png`}
            width={16} 
            height={16} 
            alt="star" 
            className={'absolute ' + `anim_star`} 
            style={{top: star[1], left: star[0], imageRendering: "pixelated"}}
            key={"star_" + i}/>
          ))
        }
      </div>
      <div className='w-[1024px] px-4 lg:px-0 h-full flex lg:flex-row flex-col lg:items-center py-4 lg:py-8 gap-4 lg:gap-0 z-10'>
        <div className='flex flex-row items-center lg:justify-center justify-between space-x-4'>
          <div>
            <Link href='/'>
              <LogoText/>
            </Link>
            <h6 className='text-xs font-mono'>v8.1.2</h6>
          </div>
          <div className='ml-auto lg:hidden'>
            <i className='bx bx-menu bx-md cursor-pointer anim-navbar-hamburger' onClick={() => { 
              anime({
                targets: ".anim-navbar-hamburger",
                rotateZ: [0, 180]
              })
              setMenuVisible(!menuVisible) 
            }}></i>
          </div>
        </div>
        <div className={`lg:ml-auto lg:flex lg:flex-row flex-col lg:justify-end flex-wrap gap-2 lg:w-8/12 anim-navbar-tray ${(menuVisible) ? 'flex' : 'hidden'}`}>
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