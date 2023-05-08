'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavbarLink({text, href, className}: {text: string; href: string; className?: string;}) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <h3 className={
        `${(pathname == href) ? 'bg-purple-500 hover:bg-purple-400 text-white' : 'bg-neutral-800 hover:bg-neutral-700'} transition-all py-1 px-4 rounded-md active:scale-90 ${className}`
        }>
        {text}
      </h3>
    </Link>
  )
}
