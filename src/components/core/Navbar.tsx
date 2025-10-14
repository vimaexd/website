'use client';
import anime from 'animejs';
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Button, { ButtonStyle } from '@mae/components/ui/Button';
import VimaeLogo from '@mae/assets/icons/logo-vimae';
import VimaeLogoMono from '@mae/assets/icons/logo-vimae-mono';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { transparentNavbar } from '@mae/store/transparentNavbar';
import NavbarStars from '@mae/components/subnavigation/StarryBg';

let navOptions: {[path: string]: string} = {
  "/": "🏠 Home",
  "/blog": "📝 Blog",
  "/projects": "📦 Projects",
  "/music": "🎵 Music",
  "/gear": "⌨️ Gear",
  "/contact": "📱 Contact",
  "/donate": "💰 Donate"
}

export default function Navbar({version}: {version: string}) {
  const pathname = usePathname();
  const [isTransparentPage, setTransparentPage] = useAtom(transparentNavbar);

  // when navigating to a new page, set the transparent state to default
  useEffect(() => {
    setTransparentPage(false)
  }, [pathname])

  const bar = useRef<HTMLDivElement>(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const [barSize, setBarSize] = useState<number[]>([]);

  useLayoutEffect(() => {
    if(bar.current) {
      setBarSize([bar.current.clientWidth, bar.current.clientHeight])
    }
  }, [])

  return (
    <nav className={`w-full lg:h-32 flex justify-center z-20 sticky ${(isTransparentPage) ? 'bg-transparent' : 'bg-ctp-mantle'}`} ref={bar}>
      {
        <NavbarStars barHeight={barSize[1]} barWidth={barSize[0]}/>
      }
      <div className='w-[1024px] lg:px-0 h-full flex lg:flex-row flex-col lg:items-center py-4 lg:py-8 gap-4 lg:gap-0 z-10 md:px-8 px-4'>
        <div className='flex flex-row items-center lg:justify-center justify-between space-x-4'>
          <div>
            <LogoText/>
            <h2 className='text-xs font-mono'>v{version}</h2>
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
          {
            Object.keys(navOptions).map((op) => (
              <Button text={navOptions[op]} href={op} style={(pathname == op) ? ButtonStyle.Active : ButtonStyle.Primary}/>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

function LogoText() {
  const [isTransparentPage, setTransparentPage] = useAtom(transparentNavbar);

  return (
    <Link href='/' className='font-bold text-5xl tracking-tighter text-white' data-anim="logo">
      {
      (isTransparentPage)
      ? <VimaeLogoMono width="128px" height="fit" className="pb-2"/>
      : <VimaeLogo width="128px" height="fit" className="pb-2"/>
      }
    </Link>
  )
}