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

import { fakeAdHideCountState } from "@mae/store/fakeAdHideCount";
import { useAtom } from "jotai";


const FakeAdBlock = dynamic(
    () => import("@mae/components/feature/sideblocks/BlockFakeAd"),
    {
        ssr: false,
        loading: () => <FakeAdPlaceholder />,
    }
);

export default function FrontpageSideblocks() {
    const [hideCount] = useAtom(fakeAdHideCountState);

    if (hideCount >= 6) {
        return (
            <SideblockWrapper>
                <FakeAdBlock />
            </SideblockWrapper>
        );
    }

    return (
        <SideblockWrapper>
            <LanyardBlock id={"577743466940071949"} />
            <ClockBlock />
            <LatestReleaseBlock />
            <FakeAdBlock />
        </SideblockWrapper>
    );
}
