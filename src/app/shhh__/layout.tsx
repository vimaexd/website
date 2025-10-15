import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) 
{

  return (
    <>
      <div className='bg-gradient-to-r from-red-700 to-red-900'>
        <div className='p-8'>
          <h1 className='text-4xl'>IN DEVELOPMENT - THIS PAGE IS SUBJECT TO CHANGE</h1>
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}
