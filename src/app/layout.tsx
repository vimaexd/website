import localFont from 'next/font/local';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@mae/components/layout/Navbar';
import Footer from '@mae/components/layout/Footer';
import LayoutWrappers from './layoutWrappers';
import { ComponentChildren } from '@mae/misc/types';

import 'react-tooltip/dist/react-tooltip.css';
import '../css/globals.css';
import 'boxicons/css/boxicons.min.css';
// import '../../public/assets/fonts/Inter/inter.css'

import { promises as fs } from 'fs';
import path from 'path'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'mae / vimae\'s cozy site ✨',
  description: 'vimae is a queer programmer, musician, fediverse person and internet user interested in tech.',
  keywords: 'vimae, vimae discord, vimae twitter, mae, etstringy, maewtf, personal website',
  robots: 'index, follow'
}

const interVariable = localFont({
  src: "../assets/fonts/Inter/InterVariable.woff2"
});

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
      <body className={`${interVariable.className} ${jbm.variable} bg-ctp-crust text-gray-200`}>
        <LayoutWrappers>
          {children}
        </LayoutWrappers>
      </body>
    </html>
  )
}
