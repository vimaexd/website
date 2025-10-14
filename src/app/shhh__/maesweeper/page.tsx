import PageContainer from '@mae/components/core/PageContainer'
import dynamic from 'next/dynamic'
import React from 'react'

const MaesweeperGame = dynamic(() => import('@mae/components/feature/maesweeper/Maesweeper'), {
  ssr: false
})

export default function MaesweeperPage() {
  return (
    <PageContainer>
      <MaesweeperGame/>
    </PageContainer>
  )
}
