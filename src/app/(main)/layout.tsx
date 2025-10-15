import Navbar from '@mae/components/core/Navbar';
import Footer from '@mae/components/core/Footer';
import { ComponentChildren } from '@mae/misc/types';

import { promises as fs } from 'fs';

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) 
{
  const _pack: string = await fs.readFile('package.json', {encoding: "utf-8"})
  const pack: { version: string; } = JSON.parse(_pack);

  return (
    <>
      <Navbar version={pack.version}/>
        <div>{children}</div>
      <Footer/>
    </>
  )
}
