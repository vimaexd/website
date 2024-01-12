import { IResolvedRelease } from '@mae/misc/discography/types'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mae/components/Button';

const serviceToIcon: {[a: string]: string;} = {
  "bandcamp": "bx bx-money",
  "spotify": "bx bxl-spotify",
  "applemusic": "bx bxl-apple",
  "soundcloud": "bx bxl-soundcloud"
}

const serviceSlugToName: {[a: string]: string;} = {
  "bandcamp": "Bandcamp",
  "spotify": "Spotify",
  "applemusic": "Apple Music",
  "soundcloud": "SoundCloud"
}

export default function releasefull({release}: {release: IResolvedRelease}) {
  return (
    <>
      <Image src={release.album_art} alt="album art" fill={true} objectFit='cover' quality={1} className='rounded-lg blur-xl outline-black outline-4'/>
      <div className='flex flex-col justify-center items-center h-screen w-screen z-10 gap-8'>
        <div className='w-80 min-w-[256px] gap-4 flex items-center flex-col p-4 bg-ctp-base rounded-lg shadow-xl'>
          <div className='flex items-center justify-center'>
            <Image src={release.album_art} alt="album art" width={512} height={512} quality={95} className='rounded-lg'/>
          </div>
          <div className='w-full'>
            <h2 className="font-semibold text-4xl">{release.title}</h2>
            <h3 className="text-lg">Stringy</h3>
          </div>

          <div className='flex flex-col gap-2 w-full'>
            {
              Object.keys(release.links)
                .map((e: any, i) => {
                  return <Button 
                  text={serviceSlugToName[e]} 
                  href={Object.values(release.links)[i]} 
                  className={((e == "bandcamp") ? "!bg-ctp-mauve !text-ctp-surface0" : "") + ' w-full h-10 flex justify-center items-center'}
                  icon={serviceToIcon[e] + " bx-sm mr-2"}/>;
                })
            }
          </div>
        </div>
        {/* <Link href="/music" className='text-white'>More music <i className='bx bxs-arrow-left'></i> </Link> */}
      </div>
      <Image src="/assets/logos/stringy/StringyV3_White.svg" width={32} height={32} alt="Stringy logo" className='absolute bottom-8 left-1/2 -translate-x-1/2'></Image>
    </>
  )
}
