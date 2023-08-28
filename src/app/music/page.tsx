import React from 'react';
import PageContainer from '@mae/components/layout/PageContainer';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PageClient = dynamic(() => import('./pageClient'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Music |✨ mae',
  description: 'all music i have released as Stringy'
}
export default function page() {

  return (
    <PageContainer>
      <PageClient/>
    </PageContainer>
  )
}
