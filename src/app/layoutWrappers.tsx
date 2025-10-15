'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import { RecoilRoot } from 'recoil'
import PlausibleProvider from 'next-plausible'

export default function LayoutWrappers({children}: {children: React.ReactNode}) {
  return (
    <RecoilRoot>
      <PlausibleProvider domain="mae.wtf" customDomain='https://metrics.mae.wtf'>
        {children}
      </PlausibleProvider>
    </RecoilRoot>
  )
}
