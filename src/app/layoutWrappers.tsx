'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function LayoutWrappers({children}: {children: ComponentChildren}) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}
