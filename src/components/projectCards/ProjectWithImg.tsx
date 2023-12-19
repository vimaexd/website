import type { ProjectPropsImg } from './types';

export default function ProjectWithImg(props: ProjectPropsImg) {
  return (
    <div className='bg-slate-700 w-full rounded-md sm:h-52 min-h-max flex flex-col justify-end bg-cover shadow-xl anim-projects flex-grow-0 progressive-blur' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%), url(${props.image})`,
      }}>
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
  )
}