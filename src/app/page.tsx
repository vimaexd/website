import LatestReleaseBlock from '@mae/components/frontpageBlocks/LatestReleaseBlock';
import PageContainer from '@mae/components/layout/PageContainer';
import Introduction from '@mae/components/frontpageBlocks/Introduction';
import Image from 'next/image'
import { Metadata } from 'next';
import SideBlock from '@mae/components/frontpageBlocks/SideBlock';
import LanyardBlock from '@mae/components/frontpageBlocks/LanyardBlock';
import SocialSpeeddial from '@mae/components/frontpageBlocks/SocialSpeeddial';
import ClockBlock from '@mae/components/frontpageBlocks/ClockBlock';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { FakeAdPlaceholder } from '@mae/components/frontpageBlocks/FakeAd';

const FakeAdWrapper = dynamic(() => import('@mae/components/frontpageBlocks/FakeAdWrapper'), { 
  ssr: false, 
  loading: () => <FakeAdPlaceholder/>
})

export const metadata: Metadata = {
  title: 'Home |✨ mae',
  description: 'the website of mae (aka Stringy)'
}

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-8">
        <PageContainer>
          <Suspense fallback="im waiting">
            <Introduction />
          </Suspense>
          <div className='max-[1380px]:block hidden'>
            <Sideblocks/>
          </div>
          <hr className='mt-2 opacity-40'/>
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src="/assets/code_screenshot_full.png"
              width={400}
              height={500}
              className="rounded-lg border-2 border-str-cotton"
              alt="a screenshot of visual studio code"
              style={{
                boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)"
              }}
            />
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
        </PageContainer>
      <div className='min-[1380px]:block hidden'>
        <Sideblocks/>
      </div>
    </div>
  );
}

function Sideblocks() {
  return (
    <div className="min-[1380px]:w-72 mt-8 min-[1380px]:flex-col grid min-[1380px]:grid-cols-1 grid-cols-2 max-[624px]:grid-cols-1 min gap-4 w-full">
      <SideBlock title="📱 speed dial">
        <div className="text-4xl text-neutral-100 flex justify-evenly items-center">
          <SocialSpeeddial
            href="https://youtube.com/Stringy"
            tooltipContent="YouTube"
            tooltipId="front:social:yt"
            icon="bxl-youtube"
          />
          <SocialSpeeddial
            href="https://discord.gg/A8A52G2"
            tooltipContent="Discord"
            tooltipId="front:social:dc"
            icon="bxl-discord-alt"
          />
          <SocialSpeeddial
            href="https://wetdry.world/@mae"
            tooltipContent="Mastodon"
            tooltipId="front:social:mst"
            icon="bxl-mastodon"
          />
          <SocialSpeeddial
            href="https://github.com/etstringy"
            tooltipContent="GitHub"
            tooltipId="front:social:gh"
            icon="bxl-github"
          />
          <SocialSpeeddial
            href="https://twitter.com/etstringy"
            tooltipContent="Twitter"
            tooltipId="front:social:twt"
            icon="bxl-twitter"
          />
        </div>
      </SideBlock>
      <ClockBlock />
      <div className='row-span-2'>
        <LatestReleaseBlock />
      </div>
      {/* <SideBlock title='📺 YouTube' disablePadding={true}>
        <div className='flex'>
          <iframe
            width={284}
            className='rounded-md'
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLxOjvF2NKxDNT8mB9vEajUWf70rI_GECn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </SideBlock> */}
      <LanyardBlock id={"577743466940071949"} />
    <FakeAdWrapper/>
    </div>
  )
}