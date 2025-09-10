'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {Howl, Howler} from 'howler';

const soundClick = new Howl({
  src: ['/assets/sfx/click.wav'],
  volume: 0.2
});

export enum ButtonStyle {
  Unstyled = 0,
  Primary,
  Active,
  Outline
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

    switch(style) {
      case ButtonStyle.Active:
        temp += " " + "flex justify-center bg-ctp-mauve text-ctp-crust font-semibold"
        break;

      case ButtonStyle.Primary:
        temp += " " + "flex justify-center bg-ctp-surface0 hover:bg-ctp-surface1 text-white"
        break;

      case ButtonStyle.Outline:
        temp += " " + "flex justify-center outline-1 outline-double outline-neutral-400 text-center text-ctp-text hover:bg-white hover:text-black bg-transparent"
    }

    setClasses(temp)

  }, [className, style])

  return (
    <Link href={href} onClick={playSound} className={classes}>
      {/* <button className={classes}> */}
        {icon && <i className={icon}></i>}
        {text}
      {/* </button> */}
    </Link>
  )
}
