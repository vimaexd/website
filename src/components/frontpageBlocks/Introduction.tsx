'use client'
import Image from 'next/image'
import Link from 'next/link';
import { Tooltip } from 'react-tooltip'
import { useEffect } from 'react';

import anime from 'animejs/lib/anime.es';

export default function Introduction() {
  useEffect(() => {
    anime({
      targets: '[data-anim="initslide"]',
      opacity: [0, 1],
      duration: 1000,
      translateX: [-6, 0],
      delay: anime.stagger(50)
    })

    anime.timeline({
      targets: '[data-anim="goober"]',
    })
    .add({
      translateY: [-120, 20],
      rotateX: [-2, 0],
      easing: "easeInExpo",
      opacity: [0, 1],
      duration: 300
    })
    .add({
      scaleX: [1, 1.06],
      scaleY: [1, 0.8],
      duration: 50,
      easing: "linear"
    })
    .add({
      scaleY: 1,
      scaleX: 1,
      translateY: 0,
      easing: "easeOutExpo",
      duration: 200
    })
  })
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='w-full sm:w-1/2 flex flex-col'>
        <h1 className='text-4xl font-bold tracking-tight' data-anim="initslide">👋 hey! i'm mae</h1>
        <div className='leading-6 text-base space-y-2 flex flex-col mt-2'>
          <p data-anim="initslide">
            i code websites and projects, make electronic music and generally just exist on the internet. here's a few more facts about me:
          </p>
          <ol className='space-y-1'>
            <li data-anim="initslide">
              <span className='w-6 mr-2 inline-block text-center align'>🏳️‍⚧️</span>
              i use she/they pronouns
            </li>
            <li className='flex flex-row items-center' data-anim="initslide">
              <span className='w-6 mr-2 h-6 flex'>
                <Image src="/assets/icons/neurodiversity.svg" width="64" height="64" alt={'Neurodiversity "infinity" symbol'}/>
              </span>
              i'm neurodivergent
            </li>
            <li className='flex flex-row items-center' data-anim="initslide">
              <span className='w-6 mr-2 h-6 flex items-center justify-center'>
                <div className='w-4 h-4 bg-purple-400 rounded-full inline-block'></div>
              </span>
              <span> 
                i love the color 
                <span className='bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent font-bold'
                  style={{
                    textShadow: "0px 2px 32px rgba(133, 72, 245, 0.8)"
                  }}
                >
                  &nbsp;purple!
                </span>
              </span>
            </li>
          </ol>
        </div>
      </div>
      <div className='hidden sm:block'>
        <Image src="/assets/maewave.png" width={200} height={200} alt={'A drawing of Mae\'s OC waving'} data-anim="goober" className=''></Image>
      </div>
    </div>
  )
}
