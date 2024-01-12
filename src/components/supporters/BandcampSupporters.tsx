'use client'
import axios from 'axios'
import React, { useState } from 'react'
import Image from 'next/image'

const bandcampImageEndpoint = "https://f4.bcbits.com/img/"

export default function BandcampSupporters() {
  let [fetching, setFetching] = useState(false);
  let [fetched, setFetched] = useState(false);
  let [error, setError] = useState(false);
  let [supporters, setSupporters] = useState<{name: string; image_id: string;}[]>([]);

  const askBandcampVeryNicely = async () => {
    if(fetched || fetching) return;
    setFetching(true);
    axios.get('/api/bandcamp-supporters')
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
      <p className='text-xs'>couldn't fetch bandcamp supporters</p>
    </div>
  )

  askBandcampVeryNicely();

  if(!fetched) return (
    <div className='flex gap-2 items-center'>
      <div>
        <i className='bx bx-loader animate-spin'></i>
      </div>
      <p className='text-xs'>asking bandcamp nicely</p>
    </div>
  )

  console.log(supporters)

  return (
    <div className='space-y-4'>
       <div className='flex justify-center gap-2 bg-[#61929c] rounded-lg'>
        <Image src="/assets/logos/bandcamp.png" width={120} height={20} alt="Bandcamp"/>
      </div>
      <div className='grid auto-cols-max grid-cols-2 sm:grid-cols-4 gap-2'>
        {
          supporters.map((s) => (
            <div className='text-neutral-200'>
              <div key={s.name} className='flex gap-2 text-xs items-center'>
                <Image src={bandcampImageEndpoint + s.image_id + "_42.jpg"} height={32} width={32} alt="Profile picture"></Image>
                {s.name}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
