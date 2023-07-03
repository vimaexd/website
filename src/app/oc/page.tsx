import PageContainer from '@mae/components/layout/PageContainer'
import React from 'react'
import Image from 'next/image';
import Button from '@mae/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My OC |✨ mae',
  description: 'info and references for my oc'
}

export default function Donate() {
  return (
    <PageContainer>
      <h1 className='text-4xl font-semibold'>Page Work in Progress!</h1>
      <p>For now, here's a static refsheet.</p>
      <Button href='https://i.mae.wtf/dqdgox.png' text='Download High Quality' className='w-fit' icon='bx bx-download mr-2'></Button>
      <Image src="https://i.mae.wtf/dqdgox.png" width={400} height={100} alt="mae refsheet"></Image>
    </PageContainer>
  )
}
