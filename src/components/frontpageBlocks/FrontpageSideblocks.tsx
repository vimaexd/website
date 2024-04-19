'use client';
import SideblockWrapper from "@mae/components/frontpageBlocks/SideblockWrapper"
import dynamic from 'next/dynamic';
import { FakeAdPlaceholder } from '@mae/components/frontpageBlocks/sideblocks/FakeAd';

import SideBlock from '@mae/components/frontpageBlocks/SideBlock';
import LanyardBlock from '@mae/components/frontpageBlocks/sideblocks/LanyardBlock';
import SocialSpeeddialBlock from '@mae/components/frontpageBlocks/sideblocks/SocialSpeeddialBlock';
import ClockBlock from '@mae/components/frontpageBlocks/sideblocks/ClockBlock';
import LatestReleaseBlock from '@mae/components/frontpageBlocks/sideblocks/LatestReleaseBlock';
import { useEffect } from "react";

import { fakeAdHideCountState } from '@mae/store/fakeAdHideCount';
import { useRecoilState } from 'recoil';

const FakeAdBlock = dynamic(() => import('@mae/components/frontpageBlocks/sideblocks/FakeAd'), { 
  ssr: false, 
  loading: () => <FakeAdPlaceholder/>
})
const MaesweeperGameBlock = dynamic(() => import('@mae/components/games/Maesweeper'))

export default function FrontpageSideblocks() {
  const [hideCount, setHideCount] = useRecoilState(fakeAdHideCountState);

  if(hideCount >= 6) {
    return (
      <SideblockWrapper>
        { /* TODO uncomment when done */}
        {/* <MaesweeperGameBlock/> */}
        <FakeAdBlock/>
      </SideblockWrapper>
    )
  }

  return (
    <SideblockWrapper>
      <SideBlock title="📱 socials">
        <div className="text-4xl text-neutral-100 flex justify-evenly items-center">
          <SocialSpeeddialBlock
            href="https://discord.gg/A8A52G2"
            tooltipContent="Discord"
            tooltipId="front:social:dc"
            icon="bxl-discord-alt"
          />
          <SocialSpeeddialBlock
            href="https://twitter.com/vimaexd"
            tooltipContent="Twitter"
            tooltipId="front:social:twt"
            icon="bxl-twitter"
          />
          <SocialSpeeddialBlock
            href="https://wetdry.world/@mae"
            tooltipContent="Mastodon"
            tooltipId="front:social:mst"
            icon="bxl-mastodon"
          />
          <SocialSpeeddialBlock
            href="https://youtube.com/@vimaee"
            tooltipContent="YouTube"
            tooltipId="front:social:yt"
            icon="bxl-youtube"
          />
        </div>
      </SideBlock>
      <ClockBlock />
      <div className='row-span-2'>
        <LatestReleaseBlock />
      </div>

      {/* 
        lanyard block is specifically at the bottom
        so that it wont disrupt the ux flow of the blocks above it which are interactive
      */}
      <LanyardBlock id={"577743466940071949"} />

      <FakeAdBlock/>
    </SideblockWrapper>
  )
}