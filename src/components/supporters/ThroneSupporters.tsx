'use client'
import axios from 'axios'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImageWithFallback = (props: any) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
      <Image
          {...rest}
          src={imgSrc}
          onError={() => {
              setImgSrc(fallbackSrc);
          }}
      />
  );
};

export default function BandcampSupporters() {
  let [fetching, setFetching] = useState(false);
  let [fetched, setFetched] = useState(false);
  let [error, setError] = useState(false);
  let [supporters, setSupporters] = useState<{username: string; pfp: string;}[]>([]);

  const getThroneGifters = async () => {
    if(fetched || fetching) return;
    setFetching(true);
    axios.post('/api/throne-supporters')
      .then((bc) => {
        console.log(bc.data)
        setSupporters(bc.data.list);
        
        setFetching(false);
        setFetched(true);
      })
      .catch((err) => {
        setError(true);
        setFetching(false);
        console.log(err)
      })
  }

  if(error) return (
    <div className='flex gap-2 items-center'>
      <div>
        <i className='bx bxs-error'></i>
      </div>
      <p className='text-xs'>couldn't fetch throne supporters</p>
    </div>
  )

  if (typeof window != "undefined") {
    getThroneGifters();
  }

  if(!fetched) return (
    <div className='flex gap-2 items-center'>
      <div>
        <i className='bx bx-loader animate-spin'></i>
      </div>
      <p className='text-xs'>asking throne nicely</p>
    </div>
  )

  console.log(supporters)

  return (
    <div className='space-y-4'>
      <div className='flex justify-center gap-2 bg-throne-gradient rounded-lg py-2'>
        <Image src="/assets/logos/throne_wordmark_white.svg" width={120} height={20} alt="Throne"/>
      </div>
      <div className='grid auto-cols-max grid-cols-2 sm:grid-cols-4 gap-2'>
        {
          supporters.map((s) => (
            <div key={s.username} className='flex gap-2 text-xs items-center'>
              <ImageWithFallback src={s.pfp} fallbackSrc="/assets/logos/throne_white.svg" height={32} width={32} alt="Profile picture" className='rounded-full'></ImageWithFallback>
              {s.username}
            </div>
          ))
        }
      </div>
    </div>
  )
}
