import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LatestRelease from '@mae/components/frontpage_blocks/latest_release';
import LatestProject from '@mae/components/frontpage_blocks/latest_project';
import { ReactSVG } from 'react-svg'
import anime from 'animejs';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip'


export default function Home() {
  'use client'
  anime({
    targets: ".anim-initslide",
    opacity: [0, 1],
    duration: 1000,
    translateX: [-20, 0],
    delay: anime.stagger(50)
  })
  return (
    <main>
      <div className='flex items-center flex-col pt-4'>
        <div className='w-[1024px] space-y-8'>
          <div className='flex justify-evenly'>
            <div className='w-full flex flex-col'>
              <h1 className='text-4xl font-bold tracking-tight anim-initslide'>👋 hey! i'm mae</h1>
              <div className='leading-6 text-base space-y-2 flex flex-col mt-2'>
                <p className='anim-initslide'>
                  I code websites and projects, make electronic music and generally just exist on the internet. Here's a few more facts about me.
                </p>
                <ol className='space-y-1'>
                  <li className='anim-initslide'>
                    <span className='w-6 mr-2 inline-block text-center align'>🏳️‍⚧️</span>
                    I use she/her pronouns
                  </li>
                  <li className='flex flex-row items-center anim-initslide'>
                    <span className='w-6 mr-2 h-6 flex'>
                      <ReactSVG src="/assets/icons/neurodiversity.svg" wrapper="svg"/>
                    </span>
                    I'm neurodivergent
                  </li>
                  <li className='flex flex-row items-center anim-initslide'>
                    <span className='w-6 mr-2 h-6 flex items-center justify-center'>
                      <div className='w-4 h-4 bg-purple-400 rounded-full inline-block'></div>
                    </span>
                    <span> 
                      I love the color <span className='bg-gradient-to-r from-purple-300 to-violet-500 bg-clip-text text-transparent font-bold'>purple!</span>
                    </span>
                  </li>
                </ol>
              </div>
              <div className='text-4xl text-neutral-100 flex gap-1 mt-auto'>
                <Link href='https://youtube.com/Stringy' data-tooltip-content='YouTube' data-tooltip-id='front:social:yt'>
                  <Tooltip id="front:social:yt" className='text-sm' />
                  <i className='bx bxl-youtube hover:scale-110 hover:text-str-yarn transition-all duration-75 active:scale-90'></i>
                </Link>
                <Link href='https://discord.gg/A8A52G2' data-tooltip-content='Discord server' data-tooltip-id='front:social:discord'>
                  <Tooltip id="front:social:discord" className='text-sm'/>
                  <i className='bx bxl-discord-alt hover:scale-110 hover:text-str-yarn transition-all duration-75 active:scale-90'></i>
                </Link>
                <Link href='https://wetdry.world/@mae' data-tooltip-content='Mastodon' data-tooltip-id='front:social:wdw'>
                  <Tooltip id="front:social:wdw" className='text-sm'/>
                  <i className='bx bxl-mastodon hover:scale-110 hover:text-str-yarn transition-all duration-75 active:scale-90'></i>
                </Link>
                <Link href='https://github.com/etstringy' data-tooltip-content='GitHub' data-tooltip-id='front:social:gh'>
                  <Tooltip id="front:social:gh" className='text-sm'/>
                  <i className='bx bxl-github hover:scale-110 hover:text-str-yarn transition-all duration-75 active:scale-90'></i>
                </Link>
                <Link href='https://twitter.com/etstringy' data-tooltip-content='Twitter' data-tooltip-id='front:social:birdsite'>
                  <Tooltip id="front:social:birdsite" className='text-sm'/>
                  <i className='bx bxl-twitter hover:scale-110 hover:text-str-yarn transition-all duration-75 active:scale-90'></i>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex justify-end'>
              <Image src="/maewave.png" width={256} height={256} alt={''}></Image>
            </div>
          </div>
          <div className='flex gap-8'>
            <LatestRelease/>
            <LatestProject/>
          </div>
        </div>
      </div>
    </main>
  )
}
