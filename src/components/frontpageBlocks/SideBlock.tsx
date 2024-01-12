'use client'
import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function SideBlock({children, title, disablePadding = false}: {title: string, disablePadding?: boolean, children: ComponentChildren}) {
  return (
    <div className='w-full bg-ctp-surface0 rounded-lg min-w-[288px] shadow-[rgba(255,255,255,0.1)]'>
      <div className='flex items-center'>
        <span className='font-normal text-sm px-2 py-1'>
          {title}
        </span>
        {/* <span className='ml-auto font-mono h-full select-none'>
          <span className='px-2'>─</span>
          <span className='px-2'>☐</span>
          <span className='px-3 select-all'>✕</span>
        </span> */}
      </div>
      {
        children &&
        <Fragment>
          <hr className='border-t-ctp-surface1'/>
          <div className={(!disablePadding) ? 'p-2' : ''}>{children}</div>
        </Fragment>
      }
    </div>
  )
}
