import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import anime from 'animejs';
import { Metadata } from 'next';
import { StringLiteral } from 'typescript';

export const metadata: Metadata = {
  title: 'Contact me | mae ✨',
  description: 'info on how and where to contact me'
}

export default function page() {
  return (
    <PageContainer>
      <PageHeader title="📱 contact">
        wanna talk? send me an email or dm me on any platform below
      </PageHeader>

      <div>
        please <b className="text-red-300">do not</b> contact me regarding:
        <ul className="list-disc list-inside">
          <li>collaborations</li>
          <li>advertisement</li>
        </ul>
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>preferred</h3>
          <ContactLink text='vimae' icon='bxl-discord-alt' className='text-ctp-blue'
            link="https://discord.com/users/577743466940071949"/>
          <ContactLink text='@mae@wetdry.world' icon='bxl-mastodon' className='text-ctp-blue'
            link="https://wetdry.world/@mae"/>
          <ContactLink text='mae @ (this domain)' icon='bxs-envelope' className='text-ctp-blue'
            link="mailto:mae@mae.wtf"/>
        </div>

        <div className='flex flex-col'>
          <h3 className='font-semibold'>less likely to answer</h3>
          <ContactLink text='@mae:matrix.mae.wtf' icon='bxs-chat' className='text-ctp-pink'
            link="https://wetdry.world"/>
          <ContactLink text='@etstringy' icon='bxl-twitter' className='text-ctp-pink'
            link="https://twitter.com/@etstringy"/>
          <ContactLink text='@etstringy' icon='bxl-tiktok' className='text-ctp-pink'
            link="https://tiktok.com/@etstringy"/>
          <ContactLink text='@mae@f.mae.wtf' icon='bxl-mastodon' className='text-ctp-pink'
            link="https://f.mae.wtf/@mae"/>
          <ContactLink text='mae' icon='bxl-steam' className='text-ctp-pink'
            link="https://steamcommunity.com/id/etstringy/"/>
        </div>

        <div className='flex flex-col'>
          <h3 className='font-semibold'>everything else</h3>
          <ContactLink text='/u/etstringy' icon='bxl-reddit' className='text-ctp-rosewater'
            link="https://reddit.com/u/etstringy"/>
          <ContactLink text='lastfm - etstringy' icon='' className='text-ctp-rosewater'
            link="https://www.last.fm/user/etstringy"/>
        </div>

      </div>
    </PageContainer>
  );
}

function ContactLink({text, className, icon, link}: {text: string; className?: string; icon: string; link: string;}) {
  return (
    <Link
      href={link}
      className={'text-ctp-overlay1 space-x-1 ' + className}
    >
      <i className={'bx bx-sm align-bottom ' + icon}></i>
      <span>{text}</span>
    </Link>
  )
}
