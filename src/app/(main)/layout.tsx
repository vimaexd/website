import Navbar from '@mae/components/layout/Navbar';
import Footer from '@mae/components/layout/Footer';
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
      <Navbar version={pack.version}/>
        {/* <div className='w-screen py-4 bg-hazardtape text-center font-bold text-4xl'>
          <span className='drop-shadow-2xl text-red-500 bg-[rgba(0,0,0,0.8)]'>MAE MAKE THIS RESPONSIVE BEFORE YOU SHIP THIS</span>
        </div> */}
        <div>{children}</div>
      <Footer/>
    </>
  )
}
