'use client'
import Portfolio from '../../data/portfolio.json'
import Link from 'next/link'
import anime from 'animejs/lib/anime.es';
import { useEffect } from 'react';

import Project from '@mae/components/projectCards/Project';
import ProjectWithImg from '@mae/components/projectCards/ProjectWithImg';
import ProjectJumbotron from '@mae/components/projectCards/ProjectJumbotron';
import ChipButton from '@mae/components/ChipButton';
import PageContainer from '@mae/components/layout/PageContainer';
import PageHeader from '@mae/components/layout/PageHeader';

export default function meow() {
  useEffect(() => {
    anime({
      targets: ".anim-projects",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      delay: anime.stagger(50)
    })
  })
  
  return (
    <PageContainer>
      <PageHeader title="📦 projects">
        stuff i've made and worked on<br/>
        i use technologies such as
        &nbsp;<b>🟢 node</b>,
        &nbsp;<b>🟦 typescript</b>,
        &nbsp;<b>⚛️ react</b>,
        &nbsp;<b>👉 next.js</b> ,
        &nbsp;<b>🌍 express</b>,
        and <b>🐍 python</b>
      </PageHeader>
      
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
              <ChipButton text="Website" href='https://onlineconfine.lol'/>
            </ProjectWithImg>
            <ProjectWithImg 
              title='Disq' 
              description='A service which allowed you to upload screenshots (with ShareX support) and create Short URLs.'
              image='/assets/project_images/disq.png'
            >
              <ChipButton text="Source" href='https://github.com/disqTeam/api'/>
            </ProjectWithImg>
            <Project
              title='Knok' 
              description="A web UI and server to make an iPad act as a doorbell for my room."
            >
              <ChipButton text="Source" href='https://github.com/etstringy/knok'/>
            </Project>
            <Project
              title='Stringy Software API' 
              description="A multi-purpose API used for past versions of my website and various other projects that returned various data."
            >
              <ChipButton text="Source" href='https://github.com/etstringy/api'/>
            </Project>
          </div>
          <div className='w-full space-y-4'>
            <ProjectWithImg 
              title='Satori' 
              description='A Discord chat bot that managed XP and provided chat minigames for the Flute Gang community complete with a web dashboard to view stats.'
              image='/assets/project_images/satori.png'
            >
              <ChipButton text="Source" href='https://github.com/disqTeam/api'/>
            </ProjectWithImg>
            <Project
              title='Blob Maker' 
              description='A web app to customize your very own blob character. Mainly created to try out VueJS.'>
              <ChipButton text="Source" href='https://github.com/etstringy/blobmaker'/>
              <ChipButton text="Website" href='https://mkblob.web.app'/>
            </Project>
            <Project 
            title='SwitchPresence' 
            description="An early attempt at using the Discord Game SDK and Electron to show what Nintendo Switch game you're playing."
            >
              <ChipButton text="Source" href='https://github.com/etstringy/switchpresence'/>
            </Project>
            <Project 
            title='Website v7' 
            description="A scrapped version of this website that used VueJS. I decided not to use it as I wanted to make the site in React."
            >
              <ChipButton text="Source" href='https://github.com/etstringy/website/tree/v7'/>
            </Project>
            <Project 
            title='Website v6' 
            description="The last live version of this website that used React + CRA."
            >
              <ChipButton text="Source" href='https://github.com/etstringy/website/tree/v6'/>
            </Project>
          </div>
        </div>
      </div>
    </PageContainer>
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