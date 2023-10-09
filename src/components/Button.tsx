'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {Howl, Howler} from 'howler';

const soundClick = new Howl({
  src: ['/assets/sfx/click.wav'],
  volume: 0.2
});

export default function Button({text, href, className, icon, onClick}: {text: string; href: string; className?: string; icon?: string; onClick?: () => any;}) {
  const pathname = usePathname();

  const playSound = () => {
    if(onClick) onClick();
    soundClick.play()
  }


  if(onClick) {
    let href = null;
  }

  return (
    <Link href={href} onClick={playSound}>
      <h3 className={
        `${(pathname == href) ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-neutral-800 hover:bg-neutral-700'} select-none transition-all py-1 px-4 rounded-md active:scale-90 text-white ${className}`
        }>
        {icon && <i className={icon}></i>}
        {text}
      </h3>
    </Link>
  )
}
