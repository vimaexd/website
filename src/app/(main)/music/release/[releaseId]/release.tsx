'use client';
import Link from 'next/link'
import React, { Suspense } from 'react'
import Image from 'next/image';

import Button from '@mae/components/Button'
import type { IResolvedRelease } from '@mae/misc/discography/types'
import { useRecoilState } from 'recoil';
import { transparentNavbar } from '@mae/store/transparentNavbar';

// TODO: make this responsive

export default function Release({release}: {release: IResolvedRelease}) {
  const [isTransparentPage, setTransparentPage] = useRecoilState(transparentNavbar);
  setTransparentPage(true);

  return (
    <div className='overflow-hidden'>
      <div className='w-full h-full blur-3xl absolute top-0 left-0 z-10'>
        <div className='w-full h-full absolute top-0 left-0 z-20 bg-black opacity-60'></div>
        <Image src={release.album_art} alt="" fill={true} quality={1} className='w-full h-full object-cover object-center'/>
      </div>
      <div className="z-10 sticky flex justify-center my-16 mx-4 min-h-screen">
        <div className='lg:w-[1024px] w-full space-y-8 mx-4'>
          {/* <Link href="/music" className='select-none text-white text-sm flex items-center bg-[rgba(0,0,0,0.6)] cursor-pointer w-fit px-4 py-2 rounded-lg hover:bg-black active:-translate-x-2 active:opacity-0 transition-all ease-out'>
            <i className='bx bx-left-arrow-alt bx-xs'></i>
            <span>All releases</span>
          </Link> */}
          <div className='flex gap-8 '>
            <Suspense fallback={
              <div className='bg-slate-600' style={{width: 120, height: 120}}></div>
            }>
              <Image src={release.album_art} quality={90} width="120" height="120" alt="Cover art" className='lg:w-fit h-fit rounded-lg shadow-xl'></Image>
            </Suspense>
            <div className='flex flex-col justify-end'>
              <h1 className='lg:text-7xl text-4xl font-bold'>{release.title}</h1>
              <h2 className='align-baseline'>{release.type} • {release.tracks.length} tracks • {release.year}</h2>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col gap-2 mt-8'>
            {
              release.links.bandcamp &&
                <Button 
                text={(release.is_free ? "Free Download" : "Buy")}
                href={release.links.bandcamp}
                icon={`bx bx-sm mr-2 ${(release.is_free) ? "bx-down-arrow-alt" : "bx-money"}`}
                className='flex lg:w-42 justify-center bg-str-cotton hover:bg-purple-500 text-center'/>
            }
            {
              release.links.spotify &&
                <Button 
                text="Spotify" 
                href={release.links.spotify}
                icon="bx bxl-spotify bx-sm mr-2"
                className='flex justify-center outline-1 outline-double outline-neutral-400 text-center hover:bg-white hover:text-black bg-transparent'/>
            }
            {
              release.links.applemusic &&
                <Button 
                text="Apple Music" 
                href={release.links.applemusic}
                icon="bx bxl-apple bx-sm mr-2"
                className='flex justify-center outline-1 outline-double outline-neutral-400 text-center hover:bg-white hover:text-black bg-transparent'/>
            }
            {
              release.links.soundcloud &&
                <Button 
                text="SoundCloud" 
                href={release.links.soundcloud}
                icon="bx bxl-soundcloud bx-sm mr-2"
                className='flex justify-center outline-1 outline-double outline-neutral-400 text-center hover:bg-white hover:text-black bg-transparent'/>
            }
            {
              release.links.youtube &&
                <Button 
                text="YouTube" 
                href={release.links.youtube}
                icon="bx bxl-youtube bx-sm mr-2"
                className='flex justify-center outline-1 outline-double outline-neutral-400 text-center hover:bg-white hover:text-black bg-transparent'/>
            }
          </div>

          {
            release.artist_comment &&
            <div>
                <h3 className='text-lg font-bold'>mae's comment</h3>
                <p className='italic'>
                  "{release.artist_comment}"
                </p>
            </div>
          }

          <table className='w-full'>
            <thead>
              <tr>
                <th className='w-4'></th>
                <th>Title</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {release.tracks.map((track, iterator) => (
                <tr key={track.id}>
                  <td>{iterator + 1}.</td>
                  <td>{track.name}</td>
                  <td>{track.artists.join(", ")}</td>
                  <td>{track.genre}</td>
                  <td>{track.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <details className='pb-8'>
            <summary className='bg-[rgba(0,0,0,0.6)] cursor-pointer w-56 px-4 py-2 rounded-lg'>Raw data</summary>
            <p className='transition-all font-mono px-4 py-2 bg-[rgba(0,0,0,0.5)] mt-2 rounded-lg'>
              {JSON.stringify(release, null, 4)}
            </p>
          </details> */}
        </div>
      </div>
    </div>
  )
}
