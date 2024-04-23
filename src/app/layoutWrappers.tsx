'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import { RecoilRoot } from 'recoil'
import PlausibleProvider from 'next-plausible'

export default function LayoutWrappers({children}: {children: ComponentChildren}) {
  return (
    <RecoilRoot>
      <PlausibleProvider domain="https://mae.wtf" customDomain='https://metrics.mae.wtf'>
        {children}
      </PlausibleProvider>
    </RecoilRoot>
  )
}
