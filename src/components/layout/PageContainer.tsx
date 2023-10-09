import { ComponentChildren } from '@mae/misc/types';
import React from 'react'

export default function PageContainer({ children }: {children: ComponentChildren;}) {
  return (
    <div className='flex items-center flex-col pt-8'>
      <div className='lg:max-w-[1024px] flex-shrink w-full min-w-0 px-4 lg:px-0 space-y-8 mb-32'>
        { children }
      </div>
    </div>
  )
}
