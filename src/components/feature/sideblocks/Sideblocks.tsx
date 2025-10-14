"use client";
import SideblockWrapper from "@mae/components/feature/sideblocks/SideblocksWrapper";
import dynamic from "next/dynamic";
import { FakeAdPlaceholder } from "@mae/components/feature/sideblocks/BlockFakeAd";

import SideBlock from "@mae/components/feature/sideblocks/Block";
import LanyardBlock from "@mae/components/feature/sideblocks/BlockLanyard";
import SocialSpeeddialBlock, {
    SocialSpeeddialSvg,
} from "@mae/components/feature/sideblocks/BlockSocial";
import ClockBlock from "@mae/components/feature/sideblocks/BlockClock";
import LatestReleaseBlock from "@mae/components/feature/sideblocks/BlockLatestRelease";
import { useEffect } from "react";

import { fakeAdHideCountState } from "@mae/store/fakeAdHideCount";
import { useRecoilState } from "recoil";
import LogoBsky from '@mae/assets/icons/logo-bluesky';

const FakeAdBlock = dynamic(
    () => import("@mae/components/feature/sideblocks/BlockFakeAd"),
    {
        ssr: false,
        loading: () => <FakeAdPlaceholder />,
    }
);
const MaesweeperGameBlock = dynamic(
    () => import("@mae/components/feature/maesweeper/Maesweeper")
);

export default function FrontpageSideblocks() {
    const [hideCount, setHideCount] = useRecoilState(fakeAdHideCountState);

    if (hideCount >= 6) {
        return (
            <SideblockWrapper>
                {/* TODO uncomment when done */}
                {/* <MaesweeperGameBlock/> */}
                <FakeAdBlock />
            </SideblockWrapper>
        );
    }

    return (
        <SideblockWrapper>
            <SideBlock title="📱 socials">
                <div className="text-4xl text-neutral-100 flex justify-evenly items-center">
                    <SocialSpeeddialBlock
                        href="https://discord.com/users/577743466940071949"
                        tooltipContent="Discord"
                        tooltipId="front:social:dc"
                        icon="bxl-discord-alt"
                    />
                    <SocialSpeeddialSvg 
                        href="https://bsky.app/profile/mae.wtf"
                        tooltipContent="Bluesky"
                        tooltipId="front:social:bsky"
                    >
                        <LogoBsky width={32} className="pl-1 pr-1 pb-1"/>
                    </SocialSpeeddialSvg>
                    <SocialSpeeddialBlock
                        href="https://youtube.com/@vimaee"
                        tooltipContent="YouTube"
                        tooltipId="front:social:yt"
                        icon="bxl-youtube"
                    />
                </div>
            </SideBlock>
            <ClockBlock />
            <div className="row-span-2">
                <LatestReleaseBlock />
            </div>

            {/* 
        lanyard block is specifically at the bottom
        so that it wont disrupt the ux flow of the blocks above it which are interactive
      */}
            <LanyardBlock id={"577743466940071949"} />

            <FakeAdBlock />
        </SideblockWrapper>
    );
}
