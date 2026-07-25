import Image from "next/image"
import React from 'react'
import Releases from '@mae/data/discography-vimae.json';
import Link from 'next/link';

export default function latest_release() {
  const latest = Releases.releases[0]
  return (
      <Link href={`/music/release/${latest.slug}`} className="text-white a-unstyled">
        <div className="relative h-full rounded-lg overflow-hidden border border-white/6 hover:brightness-125 active:brightness-95">
          <Image
            src={latest.album_art}
            alt="Album art"
            fill
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/75 to-black/20 pointer-events-none" />

          <div className="relative w-full h-full p-4 backdrop-blur-xl rounded-lg space-y-2">
            <h2 className="text-xs w-full font-semibold tracking-widest uppercase">
              New music
            </h2>

            <div className="flex mt-6 flex-row gap-4">
              <div className="relative w-16 h-16 shrink-0 overflow-hidden">
                <Image
                  src={latest.album_art}
                  alt="Cover art"
                  fill
                  sizes="64px"
                  quality={60}
                  className="object-cover rounded-sm"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold tracking-tight align-bottom -mt-2">
                  {latest.title}
                </h3>
                <p className="text-xs">
                  {latest.tracks.length} track{latest.tracks.length > 1 && 's'} • {latest.year}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 right-3">
            <i className="bx bx-sm bx-link-external"></i>
          </div>
        </div>
      </Link>
  );
}
