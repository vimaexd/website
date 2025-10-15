import React from 'react'
import VimaeLogoMono from '@mae/assets/icons/logo-vimae-mono';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        {children}
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-8'>
        <VimaeLogoMono width="128px" height="fit"/>
      </div>
    </>
  )
}
