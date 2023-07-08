import React, { Fragment } from 'react'

export default function SideBlock({children, title, disablePadding = false}: {title: string, disablePadding?: boolean, children: React.ReactNode | React.ReactNode[]}) {
  return (
    <div className='w-full bg-zinc-900 rounded-lg border-2 border-gray-600 min-w-[288px]'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-sm px-2 py-1'>
          {title}
        </h1>
        <span className='ml-auto font-mono h-full select-none'>
          <span className='px-2'>─</span>
          <span className='px-2'>☐</span>
          <span className='px-3'>✕</span>
        </span>
      </div>
      {
        children &&
        <Fragment>
          <hr className='border-t-gray-600'/>
          <div className={(!disablePadding) ? 'p-2' : ''}>{children}</div>
        </Fragment>
      }
    </div>
  )
}
