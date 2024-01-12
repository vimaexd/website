import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function layout({children}: {children: ComponentChildren}) {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      {children}
    </div>
  )
}
