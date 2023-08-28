import type { ProjectPropsImg } from './types';

export default function ProjectWithImg(props: ProjectPropsImg) {
  return (
    <div className='bg-slate-700 w-full rounded-md sm:h-52 min-h-max flex flex-col justify-end bg-cover shadow-xl anim-projects flex-grow-0' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%), url(${props.image})`,
      }}>
      <div className='p-4 space-y-1'>
        <h1 className='font-bold text-lg'>{props.title}</h1>
        <p className='leading-5 text-sm pb-2'>
          {props.description}
        </p>
        <div className='flex w-full mt-2'>
          {props.children}
        </div>
      </div>
    </div>
  )
}