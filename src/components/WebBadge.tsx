'use client';
import React from 'react'
import Image from "next/image";
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
  return (
    <Image
      src={props.src}
      width={88}
      height={31}
      alt={props.alt || "Web badge"}
      quality={100}
      className='hover:-translate-x-1 hover:-translate-y-1 transition-transform'
      unoptimized={true}
      style={{
        imageRendering: 'pixelated',
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}