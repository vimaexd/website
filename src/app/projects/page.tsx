import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Projects |✨ mae',
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

// function ProjectButton({href, text}: {href: string; text: string;}) {
//   return (
//     <Link href={href}>
//       <h1 className='text-sm px-4 flex items-center min-w-[8] h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition-all'>
//         {text}
//       </h1>
//     </Link>
//   )
// }