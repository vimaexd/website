import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import anime from 'animejs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact |✨ mae',
  description: 'info on how and where to contact me'
}

export default function page() {
  return (
    <PageContainer>
      <PageHeader title="📱 contact">
        wanna talk? send me an email or dm me on any platform below
      </PageHeader>

      <div>
        please <b className='text-red-300'>do not</b> contact me regarding:
        <ul className='list-disc list-inside'>
          <li>collaborations</li>
          <li>advertisement</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h1 className='font-semibold text-xl'>All social media:</h1>
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <div className="space-y-4 bg-neutral-800 p-4 rounded-lg w-full shadow-xl anim-contact-card">
            <div className="flex gap-2">
              <Image
                alt="Stringy logo"
                src="/assets/logos/stringy/StringyV3_Gradient.svg"
                width="32"
                height="32"
              />
              <h1 className="text-2xl font-semibold">Stringy</h1>
            </div>
            <div className="flex flex-col text-lg font-medium">
              <span className="mb-2">
                Email{" "}
                <span className="font-light font-mono">
                  (stringy at mae dot wtf)
                </span>
              </span>

              <Link
                href="https://youtube.com/@Stringy"
                className="text-[#ff6868]"
              >
                YouTube <span className="font-light">(Stringy)</span>
              </Link>
              <Link
                href="https://youtube.com/@Stringy2"
                className="text-[#ff6868]"
              >
                YouTube <span className="font-light">(Stringy 2)</span>
              </Link>
              <Link
                href="https://etstringy.newgrounds.com"
                className="text-[#ffb50e]"
              >
                Newgrounds <span className="font-light">(etstringy)</span>
              </Link>
              <Link
                href="https://soundcloud.com/etstringy"
                className="text-[#ff8800]"
              >
                SoundCloud <span className="font-light">(Stringy)</span>
              </Link>
              <Link
                href="https://reddit.com/u/etstringy"
                className="text-[#ff4500]"
              >
                Reddit <span className="font-light">(u/etstringy)</span>
              </Link>
              <Link href="https://twitch.tv/etstringy" className="text-[#9146ff]">
                Twitch <span className="font-light">(etstringy)</span>
              </Link>
              <Link href="https://etstringy.bandcamp.com" className='text-[#629aa9]'>
                Bandcamp <span className="font-light">(etstringy)</span>
              </Link>
              <Link href="https://tiktok.com/@etstringy" className='text-[#FE2C55]'>
                TikTok <span className="font-light">(etstringy)</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4 bg-neutral-800 p-4 rounded-lg w-full shadow-xl anim-contact-card">
            <div className="flex gap-2">
              <Image
                alt="Stringy logo"
                src="/assets/pfp.png"
                width="32"
                height="32"
                className="rounded-full"
              />
              <h1 className="text-2xl font-semibold">Personal</h1>
            </div>
            <div className="flex flex-col text-lg font-medium">
              <Link
                href="https://discord.com/users/577743466940071949"
                className="text-[#5865f2]"
              >
                Discord <span className="font-thin">(vimae)</span>
              </Link>
              <Link
                href="https://discord.gg/A8A52G2"
                className="text-[#5865f2]"
              >
                Discord server
              </Link>
              <Link
                href="https://twitter.com/etstringy"
                className="text-[#1da1f2]"
              >
                Twitter <span className="font-thin">(@etstringy)</span>
              </Link>
              <Link
                href="https://github.com/etstringy"
                className="text-[#f5f5f5]"
              >
                GitHub <span className="font-thin">(etstringy)</span>
              </Link>
              <Link href="https://wetdry.world/@mae" className="text-[#6364FF]">
                Fediverse Main <span className="font-thin">(@mae@wetdry.world)</span>
              </Link>
              <Link href="https://f.mae.wtf/@mae" className="text-[#c4a7e7]">
                Fediverse Alt <span className="font-thin">(@mae@f.mae.wtf)</span>
              </Link>
              <Link
                href="https://lethallava.land/@mae"
                className="text-[#6364FF]"
              >
                Fediverse Alt <span className="font-thin">(@mae@lethallava.land)</span>
              </Link>
              <Link
                href="https://instagram.com/mae.flac"
                className="text-[#c13584]"
              >
                Instagram <span className="font-thin">(mae.flac)</span>
              </Link>
              <Link href="https://steamcommunity.com/id/etstringy/" className='text-[#66c0f4]'>
                Steam <span className='font-thin'>(etstringy)</span>
              </Link>
              <Link href="https://www.last.fm/user/etstringy">
                last.fm <span className='font-thin'>(etstringy)</span>
              </Link>
              <Link
                href="https://soundcloud.com/vimae"
                className="text-[#ff8800]"
              >
                SoundCloud <span className="font-light">(✨ mae)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
