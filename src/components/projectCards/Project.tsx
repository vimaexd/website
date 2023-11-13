import type { ProjectProps } from './types';

export default function Project(props: ProjectProps) {
  return (
    <div className='bg-ctp-surface0 w-full rounded-md flex flex-col justify-end bg-cover h-auto max-h-44 anim-projects'>
      <div className='p-4 space-y-1'>
        <h1 className='font-bold text-lg'>{props.title}</h1>
        <p className='leading-5 text-sm pb-2'>
          {props.description}
        </p>
        <div className='flex w-full gap-2'>
          {props.children}
        </div>
      </div>
    </div>
  )
}