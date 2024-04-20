'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface WebBadgeProps {
  href?: string;
  src: string;
  alt: string;
}

export default function WebBadge(props: WebBadgeProps) {
  return (
    <Link href={props.href || "#"}>
      <Image 
      src={props.src} 
      width={88} 
      height={31} 
      alt={props.alt || "Web badge"} 
      quality={100} 
      style={{ imageRendering: 'pixelated' }} 
      className='hover:-translate-x-1 hover:-translate-y-1 transition-transform'
      unoptimized={true}/>
    </Link>
  )
}
