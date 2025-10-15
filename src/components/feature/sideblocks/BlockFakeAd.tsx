'use client';
import React from 'react'
import Image from "next/image";
import useLocalStorage from 'use-local-storage';
import fakeAds from '@mae/data/fakeAds.json';
import { fakeAdHideCountState } from '@mae/store/fakeAdHideCount';
import { useAtom } from 'jotai';

export default function FakeAd() {
  const [visible, setVisibility] = useLocalStorage("mae.showFakeAds", true);
  const [hideCount, setHideCount] = useAtom(fakeAdHideCountState);

  const toggleFakeAds = () => {
    setVisibility(!visible)
    
    if(!visible || hideCount > 0) {
      setHideCount(hideCount + 1);
    }
  }

  // hide for e-ast3r e.g-g
  if(hideCount >= 6) {
    return (
      <p className='text-xs text-neutral-600'>
        stop toggling fake ads so much. play minesweeper instead
      </p>
    )
  }
  
  const index = Math.floor(Math.random() * fakeAds.list.length);
  const ad = fakeAds.list[index];

  if(!visible) return (
    <div className='flex justify-between'>
      <p className='text-xs text-neutral-600'>
        fake ads are hidden
      </p>
      <p className='text-xs text-neutral-600 hover:text-white hover:underline cursor-pointer' onClick={toggleFakeAds}>
        show
      </p>
    </div>
  )

  return (
    <div>
      {
        ad.filename.endsWith(".webm")
        ? <video width={288} controls={false} muted={true} autoPlay={true} loop={true} aria-description="A fake advertisement video">
            <source src={`/assets/fakeads/${ad.filename}`} type="video/webm"></source>
          </video>
        : <Image
          src={`/assets/fakeads/${ad.filename}`}
          alt="A fake advertisement image"
          width="288"
          height="120"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      }
      <div className='flex justify-between mt-1'>
        <p className='text-xs text-neutral-400'>
          fake ad by {ad.author}
        </p>
        <p className='text-xs text-neutral-400 hover:text-white hover:underline cursor-pointer' onClick={() => setVisibility(!visible)}>
          hide
        </p>
      </div>
    </div>
  );
}

export function FakeAdPlaceholder() {
  return (
    <div>
      <div className='w-full h-[160px] bg-gray-400 animate-pulse'></div>
      <div className='flex justify-between'>
        <div className='bg-gray-400 animate-pulse w-2/6'/>
        <div className='bg-gray-400 animate-pulse w-1/6'/>
      </div>
    </div>
  )
}