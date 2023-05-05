import Image from 'next/image'
import React from 'react'
import ChipButton from '../chip_button';
import Link from 'next/link';

export default function portfolio_redirect() {
  return (
    <div className='w-full bg-str-bleck-200 rounded-lg bg-center bg-cover' style={{
      backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(/all.png)"
    }}>
      <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-end gap-4'>
        <div className='flex flex-col items-end'>
          <h3 className="text-sm font-normal">Latest project</h3>
          <h1 className='text-4xl font-bold tracking-tight'>Website v8</h1>
          <div className='mt-auto flex-grow-0'>
            <Link href='/projects'>
              <h1 className='text-sm flex items-center gap-1'>
                More projects <i className='bx bx-link-external'></i>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
