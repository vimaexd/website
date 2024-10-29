import PageContainer from '@mae/components/layout/PageContainer'
import React from 'react'
import Image from 'next/image';
import Button from '@mae/components/Button';
import { Metadata } from 'next';
import PageHeader from '@mae/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'My OC | mae ✨',
  description: 'info and references for my oc'
}

export default function Donate() {
  return (
    <PageContainer>
      <PageHeader title="🎏 my oc (mae)"></PageHeader>
      <p className='text-4xl font-semibold'>Page Work in Progress!</p>
      <p>For now, here's a static refsheet.</p>
      <Button href='https://cdn.mae.wtf/maeoc/refsheet-2024.png' text='Download High Quality' className='w-fit' icon='bx bx-download mr-2'></Button>
      <Image src="https://cdn.mae.wtf/maeoc/refsheet-2024.png" width={400} height={100} alt="mae refsheet"></Image>
    </PageContainer>
  )
}
