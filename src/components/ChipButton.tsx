import Link from 'next/link';
import React from 'react'

export default function ChipButton({href, text}: {href: string; text: string;}) {
  return (
    <Link href={href}>
      <span className='text-sm text-black px-4 flex items-center h-8 rounded-full hover:bg-str-cotton bg-white hover:text-white transition-all'>
        {text}
      </span>
    </Link>
  )
}