'use client';
import React from 'react'
import SideBlock from './SideBlock'
import { useDayjsCurrentTime } from '@mae/misc/useDayjsFormat'

export default function ClockBlock() {
  const time = useDayjsCurrentTime("HH:mm:ss");
  return (
    <SideBlock title="🕒 clock">
      <div className='text-sm flex flex-col items-center'>
        <span className='font-semibold text-3xl font-mono'>{time}</span>
        London, UK
      </div>
    </SideBlock>
  )
}
