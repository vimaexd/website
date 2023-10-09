import PageContainer from '@mae/components/layout/PageContainer';
import Introduction from '@mae/components/frontpageBlocks/Introduction';
import Image from 'next/image'
import { Metadata } from 'next';
import { ToolAdobeIcon, ToolBoxicon } from '@mae/components/frontpageBlocks/Tool';
import FrontpageSideblocks from '@mae/components/frontpageBlocks/FrontpageSideblocks';
import { ComponentChildren } from '@mae/misc/types';
import dynamic from 'next/dynamic';

const Tool = dynamic(() => import('@mae/components/frontpageBlocks/Tool'))

export const metadata: Metadata = {
  title: '✨ mae',
  description: 'vimae is a queer programmer, musician and internet user'
}

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-4 lg:px-8 ">
        <PageContainer>
          <Introduction />

          {/* sideblocks mobile */}
          <div className='max-[670px]:block hidden'>
            <FrontpageSideblocks/>
          </div>
          <hr className='mt-2 opacity-40'/>

          {/* backstory (mae lore) */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className='block'>
              <Image
                src="/assets/code_screenshot_full.png"
                width={1280}
                height={500}
                className="rounded-lg"
                alt="a screenshot of visual studio code"
                style={{
                  boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)"
                }}
              />
            </div>
            <div className="space-y-4 text-right">
              <h2 className="text-2xl font-semibold">✨ since the start..</h2>
              <p>
                Since very young, I've been obsessed with computers and the
                different possibilities of creating things on them. I use
                different software to my advantage to create anything, from music
                to memes. In my spare time I like to play video games casually.
              </p>
            </div>
          </div>
          <hr className='mt-2 opacity-40'/>

          {/* software i work with */}
          <div className='flex flex-col space-y-8'>
            <h2 className='font-semibold text-2xl'>🔧 software i work with</h2>
            <div className='grid grid-flow-col justify-around items-center'>
              <Tool name="FL Studio" color='#454545' useBoxShadow={false}>
                <div className='w-12 h-12 flex items-center justify-center p-2 '>
                  <Image src="/assets/logos/FLStudio_logo.png" width={32} height={32} alt="FL Studio Logo" className='mae-tool-img-flstudio' />
                </div>
              </Tool>
              <Tool name="Ableton Live" color='rgba(255,255,255,0.1)' useBoxShadow={true}>
                <div className='w-8 h-8 bg-white'>
                  <p className='mix-blend-multiply text-black font-medium text-[12px] flex items-center justify-center h-full'>
                    Live
                  </p>
                </div>
              </Tool>
              <Tool name="Photoshop" color='#001833' useBoxShadow={true}>
                <ToolAdobeIcon text="Ps"/>
              </Tool>
              <Tool name="Premiere Pro" color='#00005b' useBoxShadow={true}>
                <ToolAdobeIcon text="Pr"/>
              </Tool>
              <Tool name="After Effects" color='#00005b' useBoxShadow={true}>
                <ToolAdobeIcon text="Ae"/>
              </Tool>
              <Tool name="Visual Studio Code" color='#0078d7'>
                <ToolBoxicon icon="bxl-visual-studio"/>
              </Tool>
            </div>
          </div>
          <hr className='mt-2 opacity-40'/>

          {/* tools i work with */}
          <div className='flex flex-col space-y-8'>
            <h2 className='font-semibold text-2xl'>🔧 tools i work with</h2>
            <div className='grid grid-flow-col justify-around items-center'>
              <Tool name="JavaScript" color='#f7df1e'>
                <ToolBoxicon icon="bxl-javascript"/>
              </Tool>
              <Tool name="Python" color='#27cc53'>
                <ToolBoxicon icon="bxl-python"/>
              </Tool>
              <Tool name="Node.js"  color='#6cc24a'>
                <ToolBoxicon icon="bxl-nodejs"/>
              </Tool>
              <Tool name="React"  color='#00d8ff'>
                <ToolBoxicon icon="bxl-react"/>
              </Tool>
              <Tool name="Tailwind CSS"  color='#38bdf8'>
                <ToolBoxicon icon="bxl-tailwind-css"/>
              </Tool>
              <Tool name="HTML" color='#e34f26'>
                <ToolBoxicon icon="bxl-html5"/>
              </Tool>
              <Tool name="CSS"  color='#264de4'>
                <ToolBoxicon icon="bxl-css3"/>
              </Tool>
              <Tool name="GitHub" color='#fafafa'>
                <ToolBoxicon icon="bxl-github"/>
              </Tool>
              <Tool name="PostgreSQL" color='#0064a5'>
                <ToolBoxicon icon="bxl-postgresql"/>
              </Tool>
            </div>
          </div>
        </PageContainer>

      {/* sideblocks desktop */}
      <div className='min-[670px]:block hidden lg:mx-0 mx-4'>
        <FrontpageSideblocks/>
      </div>
      
    </div>
  );
}
