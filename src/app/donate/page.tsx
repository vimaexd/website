import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Donate() {
  return (
    <PageContainer>
      <PageHeader title='💸 donate'>
        if you feel like you want to give me something for something i've made, or you just feel like wasting your extra money, 
        there are multiple ways you can donate to me below ^^
      </PageHeader>

      <div className='w-full rounded-lg bg-throne-gradient'>
        <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-start gap-4'>
          <div className='flex flex-col'>
            <div className='flex gap-2'>
              <Image src="/assets/logos/throne_white.svg" width={32} height={32} alt="Throne Logo"></Image>
              <h1 className='text-4xl font-bold tracking-tight'>
                Throne
              </h1>
            </div>
            <p className='md:w-2/3 w-full'>
              If you want to buy me a gift anonymously from my wishlist, Throne serves as my wishlist that 
              you can buy from anonymously (or not) and the gift will be shipped to me
            </p>
            <div className='mt-8 flex-grow-0'>
              <Link href='https://throne.com/str/wishlist'>
                <h1 className='text-sm flex items-center gap-1'>
                  See my wishlist <i className='bx bx-link-external'></i>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className='w-full rounded-lg bg-[#FF5E5B]'>
        <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-start gap-4'>
          <div className='flex flex-col'>
          <div className='flex gap-2'>
            <Image src="/assets/logos/kofi.png" width={32} height={32} alt="Ko-fi Logo" className='w-10 scale-125'></Image>
            <h1 className='text-4xl font-bold tracking-tight'>Ko-fi</h1>
          </div>
            <p className='md:w-2/3 w-full'>
              If you just want to donate money (or "buy me a coffee"), you can do so via my Ko-fi page
            </p>
            <div className='mt-8 flex-grow-0'>
              <Link href='https://ko-fi.com/stringy'>
                <h1 className='text-sm flex items-center gap-1'>
                  Buy me a coffee <i className='bx bx-link-external'></i>
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='w-full rounded-lg bg-str-bleck'>
          <div className='w-full h-full p-6 backdrop-blur-xl rounded-lg flex flex-row justify-start gap-4'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-bold tracking-tight'>Twitch</h1>
              <p className='w-2/3'>
                It's not the best option due to Twitch requiring a $50 minimum before payout and taking a cut, but you can either donate bits or subscribe to me on Twitch.
              </p>
              <div className='mt-8 flex-grow-0'>
                <Link href='https://twitch.tv/etstringy'>
                  <h1 className='text-sm flex items-center gap-1'>
                    Donate on Twitch <i className='bx bx-link-external'></i>
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-16'>
      </div>
    </PageContainer>
  ) 
}
