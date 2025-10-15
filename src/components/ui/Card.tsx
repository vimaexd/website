import { ComponentChildren } from '@mae/misc/types';
import Image from "next/image";

export interface CardProps {
  children?: ComponentChildren
  title: string;
  description: string;
  image?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className='relative'>
      <div className='bg-slate-700 w-full rounded-md h-52
        min-h-max flex flex-col justify-end bg-cover shadow-xl flex-grow-0
        anim-projects backface-hidden translate-z-0 progressive-blur progressive-dim'>
          {(props.image) && <Image
          src={props.image}
          alt={"Background image"}
          className='rounded-lg'
          quality={40}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top"
          }} />}
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
  );
}