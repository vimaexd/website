import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'My projects | mae ✨',
  description: 'projects that i have written or contributed to'
}

const PageClient = dynamic(() => import('./pageClient'), {
  ssr: false
})


export default function ProjectsPage() {
  return (
    <PageClient/>
  )
}