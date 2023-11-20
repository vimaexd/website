'use client'
import React, { useEffect, useState } from 'react'
import { IBaseRelease, IUnresolvedRelease } from '@mae/misc/discography/types';
import Link from 'next/link';

export default function ReleaseCard({release}: {release: IUnresolvedRelease}) {
  return (
    <Link href={'/music/release/' + release.slug} className='w-full text-white'>
      <div className=' bg-neutral-700 w-full bg-center bg-cover bg-clip-border rounded-lg hover:bg-[center_center_16rem] transition-all hover:translate-y-0.5'  style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0, 100%), url(${release.album_art})`
      }}>
        <div className='px-4 py-2 w-full h-full backdrop-blur-lg rounded-lg border-2 border-ctp-surface1 transition-all'>
          <h2 className='text-lg font-semibold'>{release.title}</h2>
          <p className='text-sm'>{release.type} • {release.tracks.length} track{(release.tracks.length > 1) ? 's' : ''} • {release.year}</p>
        </div>
      </div>
    </Link>
  )
}
