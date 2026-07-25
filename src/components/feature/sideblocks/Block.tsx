'use client'
import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function SideBlock({children, title, disablePadding = false}: {title: string, disablePadding?: boolean, children?: React.ReactNode}) {
  return (
    <div className='flex flex-col w-full h-full rounded-lg shadow-[rgba(255,255,255,0.1)] border border-white/16'>
      <div className='flex items-center'>
        <span className='font-normal text-sm px-3 py-1'>
          {title}
        </span>
      </div>
      {
        children &&
        <Fragment>
          <hr className='border-t border-t-ctp-mauve'/>
          <div className={'h-full rounded-bl-md rounded-br-md overflow-hidden'}>{children}</div>
        </Fragment>
      }
    </div>
  )
}
