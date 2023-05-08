import React, { Children, ReactNode } from 'react'

export default function PageContainer({ children }: {children: ReactNode[] | ReactNode;}) {
  return (
    <div className='flex items-center flex-col pt-4'>
      <div className='w-[1024px] space-y-8'>
        { children }
      </div>
    </div>
  )
}
