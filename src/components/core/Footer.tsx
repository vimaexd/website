import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center z-10 sticky'>
      <div className='w-full p-8 border-0 shadow-ctp-mantle bg-ctp-base flex justify-center'
      style={{
        boxShadow: "0px 0px 32px 8px var(--tw-shadow-color)",
      }}>
        <div className='mx-8 max-w-[1024px] w-full text-sm flex flex-col-reverse gap-4 sm:flex-row'>
          <div className='flex flex-col w-1/3'>
            <h4 className='font-bold text-2xl'>mae</h4>
            <p className='text-xs'>
              ©️ 2018-{dayjs().year()} Stringy Software
            </p>
            <p>
          
            </p>
            <Link href="https://github.com/vimaexd/website">
                source code
            </Link>
            <Link href="/privacy">
                privacy
            </Link>
          </div>
          <div className='flex gap-16 sm:justify-end w-full'>
            <div className='flex flex-col'>
              <h3 className='font-semibold text-lg'>About</h3>
              <Link href="/">
                Home
              </Link>
              <Link href="/gear">
                Gear
              </Link>
              <Link href="/donate">
                Donate
              </Link>
              <Link href="/contact">
                Contact
              </Link>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold text-lg'>Media</h3>
              <Link href="/music">
                Music
              </Link>
              <Link href="/oc">
                My OC
              </Link>
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold text-lg'>Services</h3>
              <Link href="https://co.mae.wtf">
                cobalt
              </Link>
              <Link href="https://misc.mae.wtf">
                misc
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
