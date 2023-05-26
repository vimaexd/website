export default function ProjectWithImg(props: ProjectPropsImg) {
  return (
    <div className='bg-slate-700 w-full rounded-md h-52 flex flex-col justify-end bg-cover shadow-xl anim-projects' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.25) 100%), url(${props.image})`,
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