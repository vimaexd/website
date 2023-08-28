import React from 'react'

export default function ContentsOption({href, name}: {href: string; name: string;}) {
  return (
    <a href={href} className='py-2 border-b-2 border-neutral-700 text-neutral-300'>{name}</a>
  )
}
