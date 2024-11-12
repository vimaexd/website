'use client';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

export default function SocialSpeeddial({href, tooltipContent, tooltipId, icon}: {href: string, tooltipContent: string, tooltipId: string, icon: string}) {
  return (
    <Link href={href} data-tooltip-content={tooltipContent} data-tooltip-id={tooltipId} className='text-white' aria-label={tooltipContent}>
      <Tooltip id={tooltipId} style={{fontSize: "0.875rem", lineHeight: "1.25rem"}} />
      <i className={`bx ${icon} hover:scale-110 hover:text-ctp-mauve transition-all duration-75 active:scale-90`}></i>
    </Link>
  )
}