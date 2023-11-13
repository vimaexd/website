'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface WebBadgeProps {
  href: string;
  src: string;
}

export default function WebBadge(props: WebBadgeProps) {
  return (
    <Link href={props.href}>
      <Image src={props.src} width={88} height={31} alt="Web badge"></Image>
    </Link>
  )
}
