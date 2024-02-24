import type { ProjectPropsImg } from './types';

export default function ProjectJumbotron(props: ProjectPropsImg) {
  return (
    <div className='bg-slate-700 w-full rounded-md h-60 bg-cover col-span-2 anim-projects' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(${props.image})`,
      }}>
      <div className='p-4 space-y-2 flex flex-col justify-end mb-auto h-full'>
        <h2 className='font-bold text-3xl'>{props.title}</h2>
        <p className='leading-5 text-sm'>
          {props.description}
        </p>
        <div className='flex w-full gap-2'>
          {props.children}
        </div>
      </div>
    </div>
  )
}