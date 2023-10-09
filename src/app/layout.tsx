import { Inter, JetBrains_Mono } from 'next/font/google';
import 'react-tooltip/dist/react-tooltip.css';
import '../css/globals.css';
import 'boxicons/css/boxicons.min.css';
import Navbar from '@mae/components/layout/Navbar';
import Footer from '@mae/components/layout/Footer';
import LayoutWrappers from './layoutWrappers';
import { ComponentChildren } from '@mae/misc/types';

import { promises as fs } from 'fs';
import path from 'path'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '✨ mae',
  description: 'vimae is a queer programmer, musician and internet user',
  keywords: 'vimae, vimae discord, vimae twitter, mae, etstringy, stringy, stringy music, stringy artist, maewtf, personal website',
  robots: 'index, follow'
}

const inter = Inter({ preload: true, weight: ['300', '400', '500', '600', '700', '900'], subsets: ['latin']});
const jbm = JetBrains_Mono({ preload: true, weight: ['400', '600'], subsets: ['latin'], variable: '--font-jbm'});

export default async function RootLayout({
  children,
}: {
  children: ComponentChildren
}) 
{
  let pack: any = await fs.readFile('package.json', {encoding: "utf-8"})
  pack = JSON.parse(pack);

  return (
    <html lang="en">
      <head>

      </head>
      <body className={`${inter.className} ${jbm.variable} bg-[#0c0c0c] text-gray-200`}>
        <LayoutWrappers>
          <Navbar version={pack.version}/>
            {/* <div className='w-screen py-4 bg-hazardtape text-center font-bold text-4xl'>
              <span className='drop-shadow-2xl text-red-500 bg-[rgba(0,0,0,0.8)]'>MAE MAKE THIS RESPONSIVE BEFORE YOU SHIP THIS</span>
            </div> */}
            <div>{children}</div>
          <Footer/>
        </LayoutWrappers>
      </body>
    </html>
  )
}
