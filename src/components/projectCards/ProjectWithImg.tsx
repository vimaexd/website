import type { ProjectPropsImg } from './types';
import Image from 'next/image';

export default function ProjectWithImg(props: ProjectPropsImg) {
  return (
    <div className='relative'>
      <div className='bg-slate-700 w-full rounded-md h-52
        min-h-max flex flex-col justify-end bg-cover shadow-xl flex-grow-0
        anim-projects backface-hidden translate-z-0 progressive-blur progressive-dim'>
        <Image
          src={props.image}
          alt={"Background image"}
          layout="fill"
          objectFit="cover"
          objectPosition='top'
          className='rounded-lg'
          quality={40}
        />
        <div className='p-4 space-y-1 z-10'>
          <h3 className='font-bold text-lg shadow-beeg'>{props.title}</h3>
          <p className='leading-5 text-sm pb-2 shadow-beeg'>
            {props.description}
          </p>
          <div className='flex mt-2 w-auto gap-2'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}