'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import PlausibleProvider from 'next-plausible'

export default function LayoutWrappers({children}: {children: React.ReactNode}) {
  return (
    <PlausibleProvider domain="mae.wtf" customDomain='https://metrics.mae.wtf'>
        {children}
    </PlausibleProvider>
  )
}
