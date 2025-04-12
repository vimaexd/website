import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Remix stems | mae ✨',
  description: 'publicly released multitrack stems for some of my songs'
}

export default function page() {
  return (
    <PageContainer>
      <PageHeader title='🎛️ stems'>
        publicly released multitrack stems for some of my songs
      </PageHeader>

      <div className='flex flex-col gap-2'>
        <Link href="https://drive.google.com/drive/folders/198X_ZzJQv7VeguTzRgJ6RJy8z9fihQr8?usp=sharing">
            watercolor stems
        </Link>
      </div>

      <details>
        <summary>older stuff</summary>
        <div className='flex flex-col gap-2'>
          <Link href="https://drive.google.com/file/d/1buYBDqva2yPzjwPxU2-C3_3Q9ncjHDLI/view?usp=drive_link">
            strawberry factory
          </Link>
          <Link href="https://drive.google.com/file/d/1nCLTtRug9LlT6nM2WjBhw1-oCG4MoW0f/view?usp=drive_link">
            Mango on a Fork (Remix Stems)
          </Link>
          <Link href="https://drive.google.com/file/d/1UgOeNAjn7EwO98FV5FXA7CVGXRzYM6_L/view?usp=drive_link">
            Nightworld
          </Link>
          <Link href="https://drive.google.com/file/d/13Ti-W8ndIR4p5P3e4Kt6tlu4NcDrkg-i/view?usp=drive_link">
            Fluff
          </Link>
          <Link href="https://drive.google.com/file/d/1h0uDx8xc93QZtco-ynEF38J4eUzPTKhA/view?usp=drive_link">
            Coolepic
          </Link>
        </div>
      </details>
    </PageContainer>
  )
}
