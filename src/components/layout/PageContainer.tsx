import React, { Children, ReactNode } from 'react'

export default function PageContainer({ children }: {children: ReactNode[] | ReactNode;}) {
  return (
    <div className='flex items-center flex-col pt-4'>
      <div className='lg:w-[1024px] flex-shrink w-full min-w-0 px-4 lg:px-0 space-y-8 mb-8'>
        { children }
      </div>
    </div>
  )
}
