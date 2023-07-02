'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {Howl, Howler} from 'howler';

const soundClick = new Howl({
  src: ['/assets/sfx/click.wav'],
  volume: 0.2
});

export default function NavbarLink({text, href, className, icon}: {text: string; href: string; className?: string; icon?: string;}) {
  const pathname = usePathname();

  const playSound = () => {
    soundClick.play()
  }

  return (
    <Link href={href} onClick={playSound}>
      <h3 className={
        `${(pathname == href) ? 'bg-purple-500 hover:bg-purple-400 text-white' : 'bg-neutral-800 hover:bg-neutral-700'} transition-all py-1 px-4 rounded-md active:scale-90 text-white ${className}`
        }>
        {icon && <i className={icon}></i>}
        {text}
      </h3>
    </Link>
  )
}
