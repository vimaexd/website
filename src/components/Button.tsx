// 'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import {Howl, Howler} from 'howler';

const soundClick = new Howl({
  src: ['/assets/sfx/click.wav'],
  volume: 0.2
});

enum ButtonStyle {
  Unstyled = 0,
  Primary,
  Active
}

export default function Button({text, href, className, icon, onClick, style = ButtonStyle.Primary}: 
  {
    text: string; 
    href: string; 
    className?: string; 
    icon?: string; 
    onClick?: () => any; 
    style?: ButtonStyle;
  }
) {
  const pathname = usePathname();

  const playSound = () => {
    if(onClick) onClick();
    soundClick.play()
  }

  if(onClick) {
    let href = null;
  }

  let [classes, setClasses] = useState("");

  useEffect(() => {
    let temp = ""
    temp += "select-none transition-all duration-75 ease-out py-1 px-4 rounded-md active:scale-90"
    temp += " " + className

    if(style == ButtonStyle.Unstyled) return;

    switch(style) {
      case ButtonStyle.Active:
        temp += " " + "bg-ctp-mauve text-ctp-crust font-semibold"
        break;

      case ButtonStyle.Primary:
        temp += " " + " bg-ctp-surface0 hover:bg-ctp-surface1 text-white"
        break;
    }

    setClasses(temp)

  }, [className, style])

  return (
    <Link href={href} onClick={playSound} className='inline-flex'>
      <button className={classes}>
        {icon && <i className={icon}></i>}
        {text}
      </button>
    </Link>
  )
}
