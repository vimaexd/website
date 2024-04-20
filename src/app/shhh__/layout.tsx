import { ComponentChildren } from '@mae/misc/types';

import { promises as fs } from 'fs';

export default async function Layout({
  children,
}: {
  children: ComponentChildren
}) 
{
  let pack: any = await fs.readFile('package.json', {encoding: "utf-8"})
  pack = JSON.parse(pack);

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
