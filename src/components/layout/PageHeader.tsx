import { ComponentChildren } from '@mae/misc/types';
import React from 'react'

export default function PageHeader({title, children}: {title: string; children: string | ComponentChildren }) {
  return (
    <div className='space-y-2'>
      <h1 className='font-bold text-4xl'>
        { title }
      </h1>
      <h3 className='text-md'>
        { children }
      </h3>
    </div>
  )
}
