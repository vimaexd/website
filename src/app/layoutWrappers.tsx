'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import PlausibleProvider from 'next-plausible'

console.log("%c", "");
console.log("%c::v", "color:violet;font-weight:800;font-size:6rem;");
console.log("%cM43:E:V:A:72401VI", "font-weight:400;font-size:1.25rem;font-family:monospace;");
console.log("%cPCBID: M4372401VI", "font-weight:400;font-size:1.25rem;");
console.log("%cREVISION: V", "font-weight:400;font-size:1.25rem;");
console.log("%c", "");

export default function LayoutWrappers({children}: {children: React.ReactNode}) {
  return (
    <PlausibleProvider domain="mae.wtf" customDomain='https://metrics.mae.wtf'>
        {children}
    </PlausibleProvider>
  )
}
