'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import { Tooltip } from 'react-tooltip'

export default function Tool({name, children, color, useBoxShadow=false}: {name: string; children: ComponentChildren; color: string; useBoxShadow?: boolean}) {
  
  const style: React.CSSProperties = {
    background: `${color}20`
  }
  
  return (
    <div className='h-24 flex items-center justify-center mae-tool rounded-lg border-2 border-opacity-10 border-white'
    style={style}
    >
      <Tooltip id={`frontpage-tool-${name}`} />
      <div data-tooltip-id={`frontpage-tool-${name}`} data-tooltip-content={name}>
        {children}
      </div>
    </div>
  )
}

export function ToolBoxicon({icon}: {icon: string}) {
  return (
    <i className={'bx bx-md ' + icon}>
    </i>
  )
}

export function ToolAdobeIcon({text}: {text: string}) {
  return (
    <div className='w-8 h-8 bg-white rounded-lg'>
      <p className='mix-blend-multiply text-black font-semibold text-lg flex items-center justify-center h-full select-none'>
        {text}
      </p>
    </div>
  )
}