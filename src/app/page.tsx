import LatestRelease from '@mae/components/frontpageBlocks/LatestRelease';
import LatestProject from '@mae/components/frontpageBlocks/LatestProject';
import PageContainer from '@mae/components/layout/PageContainer';
import Introduction from '@mae/components/frontpageBlocks/Introduction';
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home |✨ mae',
  description: 'the website of mae (aka Stringy)'
}

export default function Home() {
  return (
    <PageContainer>
      <Introduction/>
      <div className='flex flex-col lg:flex-row gap-8'>
        <LatestRelease/>
        <LatestProject/>
      </div>
      <hr/>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Image src="/assets/code_screenshot_full.png" width={400} height={500} className='rounded-lg' alt="a screenshot of visual studio code"/>
        <div className='space-y-4 text-right'>
          <h2 className='text-2xl font-semibold'>✨ since the start..</h2>
          <p>
            Since very young, I've been obsessed with computers and
            the different possibilities of creating things on them. I
            use different software to my advantage to create anything,
            from music to memes. In my spare time I like to play video
            games casually.
          </p>
        </div>
      </div>
    </PageContainer>
  )
}
