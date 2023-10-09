'use client';
import { ComponentChildren } from '@mae/misc/types';
import React from 'react'
import { Tooltip } from 'react-tooltip'

export default function Tool({name, children, color, useBoxShadow=false}: {name: string; children: ComponentChildren; color: string; useBoxShadow?: boolean}) {
  
  const style: React.CSSProperties = {

  }
  if(useBoxShadow) {
    style.boxShadow = `0px 2px 20px 16px ${color}`
  } else {
    style.textShadow = `0px 2px 32px ${color}`
  }
  
  return (
    <div className='w-fit h-fit rounded-full flex items-center mae-tool'
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