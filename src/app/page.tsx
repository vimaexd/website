import LatestRelease from '@mae/components/frontpageBlocks/LatestRelease';
import LatestProject from '@mae/components/frontpageBlocks/LatestProject';
import PageContainer from '@mae/components/layout/PageContainer';
import Introduction from '@mae/components/frontpageBlocks/Introduction';

export default function Home() {
  return (
    <PageContainer>
      <Introduction/>
      <div className='flex gap-8'>
        <LatestRelease/>
        <LatestProject/>
      </div>
    </PageContainer>
  )
}
