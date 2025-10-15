import PageContainer from '@mae/components/core/PageContainer'
import React from 'react'
import { Metadata } from 'next';
import PageHeader from '@mae/components/core/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy | mae ✨',
  description: 'privacy notices'
}

export default function Donate() {
  return (
    <PageContainer>
      <PageHeader title="‼️ privacy notice"></PageHeader>
      <p>
        privacy respecting analytics are collected from this website to a self hosted&nbsp;
        <a href="http://plausible.com">Plausible</a> instance, purely so i can just see
        how active the site is
      </p>
    </PageContainer>
  )
}
