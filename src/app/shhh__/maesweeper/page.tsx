import PageContainer from '@mae/components/layout/PageContainer'
import dynamic from 'next/dynamic'
import React from 'react'

const MaesweeperGame = dynamic(() => import('@mae/components/games/Maesweeper'), {
  ssr: false
})

export default function MaesweeperPage() {
  return (
    <PageContainer>
      <MaesweeperGame/>
    </PageContainer>
  )
}
