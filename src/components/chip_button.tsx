import Link from 'next/link';
import React from 'react'

export default function Chip({href, text}: {href: string; text: string;}) {
  return (
    <Link href={href}>
      <h1 className='text-sm text-black px-4 flex items-center h-8 rounded-full hover:bg-str-cotton bg-white hover:text-white transition-all'>
        {text}
      </h1>
    </Link>
  )
}