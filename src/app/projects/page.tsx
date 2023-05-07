'use client'
import React from 'react'
import Portfolio from '../../data/portfolio.json'
import Link from 'next/link'
import anime from 'animejs';

export default function meow() {
  React.useEffect(() => {
      anime({
        targets: ".anim-projects",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: anime.stagger(50)
      })
  })
  
  return (
    <div className='flex items-center flex-col pt-4'>
      <div className='w-[1024px] h-14 flex flex-col space-y-4'>
        <div>
          <h1 className='font-bold text-2xl'>
            📦 projects
          </h1>
          <h3 className='text-md'>
            stuff i've made and worked on
          </h3>
        </div>

        <div className='flex flex-col gap-4'>
          <ProjectJumbotron 
          title="Website v8"
          description="The 8th evolution of my personal website. You're currently looking at it."
          image='all.png'
          />
          <div className='flex w-full gap-4 mb-12'>
            <div className='w-full space-y-4'>
              <ProjectWithImg 
                title='Online Confine Dashboard' 
                description='A web dashboard for authenticated users to manage DNS records for subdomains assigned to them.'
                image='/assets/project_images/ocdash.png'
              >
                <ProjectButton text="Website" href='https://onlineconfine.lol'/>
              </ProjectWithImg>
              <ProjectWithImg 
                title='Disq' 
                description='A service which allowed you to upload screenshots (with ShareX support) and create Short URLs.'
                image='/assets/project_images/disq.png'
              >
                <ProjectButton text="Source" href='https://github.com/disqTeam/api'/>
              </ProjectWithImg>
              <Project
                title='Knok' 
                description="A web UI and server to make an iPad act as a doorbell for my room."
              >
                <ProjectButton text="Source" href='https://github.com/etstringy/knok'/>
              </Project>
              <Project
                title='Stringy Software API' 
                description="A multi-purpose API used for past versions of my website and various other projects that returned various data."
              >
                <ProjectButton text="Source" href='https://github.com/etstringy/api'/>
              </Project>
            </div>
            <div className='w-full space-y-4'>
              <ProjectWithImg 
                title='Satori' 
                description='A Discord chat bot that managed XP and provided chat minigames for the Flute Gang community complete with a web dashboard to view stats.'
                image='/assets/project_images/satori.png'
              >
                <ProjectButton text="Source" href='https://github.com/disqTeam/api'/>
              </ProjectWithImg>
              <Project
                title='Blob Maker' 
                description='A web app to customize your very own blob character. Mainly created to try out VueJS.'>
                <ProjectButton text="Source" href='https://github.com/etstringy/blobmaker'/>
              </Project>
              <Project 
              title='SwitchPresence' 
              description="An early attempt at using the Discord Game SDK and Electron to show what Nintendo Switch game you're playing."
              >
                <ProjectButton text="Source" href='https://github.com/etstringy/switchpresence'/>
              </Project>
              <Project 
              title='Website v7' 
              description="A scrapped version of this website that used VueJS. I decided not to use it as I wanted to make the site in React."
              >
                <ProjectButton text="Source" href='https://github.com/etstringy/website/tree/v7'/>
              </Project>
              <Project 
              title='Website v6' 
              description="The last live version of this website that used React + CRA."
              >
                <ProjectButton text="Source" href='https://github.com/etstringy/website/tree/v6'/>
              </Project>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectButton({href, text}: {href: string; text: string;}) {
  return (
    <Link href={href}>
      <h1 className='text-sm px-4 flex items-center min-w-[8] h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black  transition-all'>
        {text}
      </h1>
    </Link>
  )
}

interface ProjectProps {
  children?: React.ReactNode | React.ReactNode[]
  title: string;
  description: string;
}

type ProjectPropsImg = ProjectProps & {
  image: string;
}

function ProjectJumbotron(props: ProjectPropsImg) {
  return (
    <div className='bg-slate-700 w-full rounded-md h-60 bg-cover col-span-2 anim-projects' style={{
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%), url(${props.image})`,
      }}>
      <div className='p-4 space-y-2 flex flex-col justify-end mb-auto h-full'>
        <h1 className='font-bold text-3xl'>{props.title}</h1>
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

function ProjectWithImg(props: ProjectPropsImg) {
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

function Project(props: ProjectProps) {
  return (
    <div className='bg-str-bleck-200 w-full rounded-md flex flex-col justify-end bg-cover h-auto max-h-44 anim-projects'>
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

