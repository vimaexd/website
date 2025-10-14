'use client';
import React from 'react'
import Image from "next/legacy/image";
import Link from 'next/link';

interface WebBadgeProps {
  href?: string;
  src: string;
  alt: string;
}

export default function WebBadge(props: WebBadgeProps) {
  if(props.href) {
    return <Link href={props.href}>
      <WebBadgeInner {...props}/>
    </Link>
  } else {
    return <WebBadgeInner {...props}/>
  }
}

function WebBadgeInner(props: WebBadgeProps) {
  return <Image 
    src={props.src} 
    width={88} 
    height={31} 
    alt={props.alt || "Web badge"} 
    quality={100} 
    style={{ imageRendering: 'pixelated' }} 
    className='hover:-translate-x-1 hover:-translate-y-1 transition-transform'
    unoptimized={true}/>
}