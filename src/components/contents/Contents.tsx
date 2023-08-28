import { ComponentChildren } from '@mae/misc/types'
import React from 'react'

export default function Contents({children}: {children: ComponentChildren}) {
  return (
    <details open={true} className='mx-4 lg:mx-0 lg:w-80 bg-neutral-900 p-4 rounded-lg flex flex-col flex-shrink-0 h-fit mt-8'>
      <summary className='cursor-pointer text-xl font-semibold text-center mb-4'>Contents</summary>
      {children}
    </details>
  )
}
