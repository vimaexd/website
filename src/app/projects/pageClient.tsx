'use client';
import Link from 'next/link'
import anime from 'animejs/lib/anime.es';
import { useEffect } from 'react';

import projectData from '@mae/data/projects.json'

import Project from '@mae/components/projectCards/Project';
import ProjectWithImg from '@mae/components/projectCards/ProjectWithImg';
import ProjectJumbotron from '@mae/components/projectCards/ProjectJumbotron';
import ChipButton from '@mae/components/ChipButton';
import PageContainer from '@mae/components/layout/PageContainer';
import PageHeader from '@mae/components/layout/PageHeader';

export default function pageClient() {
  useEffect(() => {
    anime({
      targets: ".anim-projects",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      delay: anime.stagger(50)
    })
  })

  const buildProjectComponent = (p: any) => {
    if(p.image) {
      return <ProjectWithImg
        title={p.title}
        description={p.description}
        image={p.image}
      >
        {
          p.links.map((l: any) => {
            return <ChipButton
            href={l.href}
            text={l.name}
            />
          })
        }
      </ProjectWithImg>
    } else {
      return <Project
        title={p.title}
        description={p.description}
      >
        {
          p.links.map((l: any) => {
            return <ChipButton
            href={l.href}
            text={l.name}
            />
          })
        }
      </Project>
    }
  }

  return (
    <PageContainer>
      <PageHeader title="📦 projects">
        stuff i've made and worked on<br/>
      </PageHeader>
      
      <div className='flex flex-col gap-4'>
        <div className='flex w-full gap-4 mb-12'>
          <div className='w-full space-y-4'>
            {
              projectData.projects.map((p: any, i: number) => {
                if((i % 2) == 1) return undefined;
                return buildProjectComponent(p)
              })
            }
          </div>
          <div className='w-full space-y-4'>
            {
              projectData.projects.map((p: any, i: number) => {
                if((i % 2) == 0) return undefined;
                return buildProjectComponent(p)
              })
            }
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
