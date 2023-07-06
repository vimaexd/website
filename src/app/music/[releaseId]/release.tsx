import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

import Button from '@mae/components/Button'
import type { IResolvedRelease } from '@mae/misc/discography/types'

export default function Release({release}: {release: IResolvedRelease}) {
  return (
    <div>
      <div className='w-full h-full blur-3xl absolute top-0 left-0 z-10'>
        <div className='w-full h-full absolute top-0 left-0 z-20 bg-black opacity-60'></div>
        <img src={release.album_art} className='w-full h-full object-cover object-center'/>
      </div>
      <div className="z-10 sticky flex justify-center mt-8">
        <div className='w-[1024px] space-y-8'>
          <Link href="/music" className='text-sm flex items-center bg-[rgba(0,0,0,0.6)] cursor-pointer w-fit px-4 py-2 rounded-lg hover:scale-105 active:scale-90 transition-transform'>
            <i className='bx bx-left-arrow-alt bx-xs'></i>
            <span className='font-bold'>All releases</span>
          </Link>
          <div className='flex gap-8'>
            <Image src={release.album_art} width="140" height="140" alt="Cover art" className='rounded-lg shadow-xl'></Image>
            <div className='mb-auto flex flex-col h-full'>
              <h1 className='text-7xl font-bold -mt-5'>{release.title}</h1>
              <h2>{release.type} • {release.tracks.length} tracks • {release.year}</h2>
              <div className='flex flex-row gap-2 mt-8'>
              {
                release.links.bandcamp &&
                  <Button 
                  text="Buy" 
                  href={release.links.bandcamp}
                  icon="bx bx-money bx-sm mr-2"
                  className='flex w-36 justify-center bg-str-cotton hover:bg-purple-500 text-center'/>
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
          </div>
            </div>
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
