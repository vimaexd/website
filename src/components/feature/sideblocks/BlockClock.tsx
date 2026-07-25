'use client';
import React from 'react'
import SideBlock from '@mae/components/feature/sideblocks/Block'
import { useDayjsCurrentTime } from '@mae/misc/useDayjsFormat'

export default function ClockBlock() {
  const time = useDayjsCurrentTime("HH:mm:ss");
  return (
    <SideBlock title="clock">
      <div className='text-sm flex flex-col items-center justify-center h-full'>
        <span className='font-semibold text-3xl font-mono'>{time}</span>
        Europe/London
      </div>
    </SideBlock>
  )
}
