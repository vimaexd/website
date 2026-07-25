import localFont from 'next/font/local';
import LayoutWrappers from './layoutWrappers';
import { ComponentChildren } from '@mae/misc/types';

import '../css/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import 'boxicons/css/boxicons.min.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'mae / vimae\'s cozy site ✨',
  description: 'vimae is a queer programmer, musician, and internet user.',
  keywords: 'vimae, vimae discord, vimae twitter, mae, maewtf, personal website',
  robots: 'index, follow'
}

const interVariable = localFont({
  src: [
    {
        path: "../assets/fonts/Inter/InterVariable.woff2",
        style: "normal"
    },
    {
        path: "../assets/fonts/Inter/InterVariable-Italic.woff2",
        style: "italic"
    }
  ],
});

const monaspace = localFont({
  src: [
    {
        path: "../assets/fonts/MonaspaceKrypton/Monaspace Krypton Var.woff2",

    }
    ],
    display: "swap",
    variable: '--font-monaspace',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`mocha ${interVariable.className} ${monaspace.variable} bg-ctp-crust text-gray-200`}>
        <LayoutWrappers>
          {children}
        </LayoutWrappers>
      </body>
    </html>
  )
}
