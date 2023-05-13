'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { IBaseRelease, IUnresolvedRelease } from '@mae/misc/discography/types';
import anime from 'animejs';
import Link from 'next/link';

export default function releaseCard({release}: {release: IUnresolvedRelease}) {
  const [isExpanded, setExpanded] = useState(false);
  let hasAnimatedIn = false;
  const popoverId = `musicpopover-${release.slug}`

  const enter = () => {
    setExpanded(true)
  }

  const exit = () => {
    anime({
      targets: `[data-anim=${popoverId}]`,
      translateX: [0, -10],
      opacity: [1, 0],
      easing: 'easeOutExpo',
      duration: 200,
      complete() {
        setExpanded(false)
        hasAnimatedIn = false;
      }
    })
  }

  useEffect(() => {
    if(!hasAnimatedIn) {
      anime({
        targets: `[data-anim=${popoverId}]`,
        translateX: [-10, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 200
      })
      anime({
        targets: [`[data-anim=${popoverId}] h1`, `[data-anim=${popoverId}] h2`],
        translateX: [-5, 0],
        opacity: [0, 1],
        easing: "spring(0.5, 120, 10, 0)",
        delay: anime.stagger(50)
      })
      hasAnimatedIn = true;
    }
  })

  return (
      <div className='flex flex-col items-center gap-2 cursor-pointer' onMouseEnter={enter} onMouseLeave={exit}>
        <div className='flex flex-row w-full'>
          <Link href={'/music/' + release.slug}>
            <Image
            src={release.album_art}
            width={128}
            height={128}
            quality={75}
            alt={"Album art for " + release.title}
            className={`transition-all ${(isExpanded) ? 'rounded-tl-lg rounded-bl-lg' : 'rounded-lg'}`}></Image>
          </Link>
          {
            isExpanded &&
            <div className='relative h-full'>
              <div className="absolute h-full">
                <div className='h-full bg-str-bleck-200 w-36 py-2 px-4 rounded-tr-lg rounded-br-lg' data-anim={popoverId}>
                  <h1 className='font-bold'>{release.title}</h1>
                  <h2 className='text-sm'>{release.type}</h2>
                  <h2 className='text-sm'>{release.tracks.length} song{(release.tracks.length > 1) && "s"}</h2>
                </div>
              </div>
            </div>
          }
        </div>
        <p className={`text-sm tracking-wide transition-all duration-75 ${(isExpanded) ? '-translate-y-1 opacity-0' : ''}`}>{release.title}</p>
      </div>
  )
}
