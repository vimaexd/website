import Link from 'next/link';
import React from 'react'

export default function ChipButton({href, text}: {href: string; text: string;}) {
  return (
    <Link href={href}>
      <span className='text-sm text-black px-4 flex items-center h-8 rounded-full hover:bg-ctp-mauve hover:text-ctp-crust hover:font-semibold bg-white transition-all'>
        {text}
      </span>
    </Link>
  )
}