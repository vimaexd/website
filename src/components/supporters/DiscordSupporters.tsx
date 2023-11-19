'use client'
import axios from 'axios'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BandcampSupporters() {
  let [fetching, setFetching] = useState(false);
  let [fetched, setFetched] = useState(false);
  let [error, setError] = useState(false);
  let [supporters, setSupporters] = useState<{username: string; pfp: string;}[]>([]);

  const getDiscordUsers = async () => {
    if(fetched || fetching) return;
    setFetching(true);
    axios.get('/_api/discord-supporters')
      .then((bc) => {
        console.log(bc.data)
        setSupporters(bc.data.list);
        
        setFetching(false);
        setFetched(true);
      })
      .catch((err) => {
        setError(true);
        console.log(err)
      })
  }

  if(error) (
    <div className='flex gap-2 items-center'>
      <div>
        <i className='bx bxs-error'></i>
      </div>
      <p className='text-xs'>couldn't fetch discord supporters</p>
    </div>
  )

  getDiscordUsers();

  if(!fetched) return (
    <div className='flex gap-2 items-center'>
      <div>
        <i className='bx bx-loader animate-spin'></i>
      </div>
      <p className='text-xs'>asking discord nicely</p>
    </div>
  )

  console.log(supporters)

  return (
    <div className='space-y-4'>
      <div className='flex justify-center gap-2 bg-[#5865F2] rounded-lg py-2'>
        <Image src="/assets/logos/discord-logo-white.svg" width={120} height={20} alt="Discord"/>
        <p className='leading-5'>boosters</p>
      </div>
      <div className='grid auto-cols-max grid-cols-2 sm:grid-cols-4 gap-2'>
        {
          supporters.map((s) => (
            <div key={s.username} className='flex gap-2 text-xs items-center'>
              <Image src={s.pfp} height={32} width={32} alt="Profile picture" className='rounded-full'></Image>
              {s.username}
            </div>
          ))
        }
      </div>
    </div>
  )
}
