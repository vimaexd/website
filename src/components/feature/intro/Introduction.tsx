"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import Chip from "../../ui/Chip";
import SideBlock from "@mae/components/feature/sideblocks/Block";
import SocialSpeeddialBlock, {
    SocialSpeeddialSvg,
} from "@mae/components/feature/sideblocks/BlockSocial";
import LogoBsky from '@mae/assets/icons/logo-bluesky';

import anime from "animejs/lib/anime.es";

export default function Introduction() {
    useLayoutEffect(() => {
        anime({
            targets: '[data-anim="initslide"]',
            opacity: [0, 1],
            duration: 1000,
            translateX: [-6, 0],
            delay: anime.stagger(100),
        });

        anime
            .timeline({
                targets: '[data-anim="goober"]',
                delay: anime.stagger(20),
            })
            .add({
                translateX: [-8, 5],
                rotateX: [-2, 0],
                easing: "easeOutExpo",
                opacity: [0, 1],
                duration: 1200,
            })
            .add({
                scaleY: 1,
                scaleX: 1,
                translateY: 0,
                easing: "easeOutExpo",
                duration: 200,
            })
            .add({
                targets: '[data-anim="serial"]',
                translateY: [8, 0],
                opacity: [0, 1],

            }, 800);

        anime({
            targets: '[data-anim="tags"] div',
            translateY: [-20, 0],
            easing: "easeOutExpo",
            opacity: [0, 1],
            delay: anime.stagger(200),
        });
    });
    return (
        <div className="flex flex-col sm:flex-row w-full items-center">
            <div className="flex flex-col my-16">
                <div className="relative">
                    <div className="absolute left-0 -translate-x-1/2 w-1/3 h-24 bg-ctp-mauve blur-[64px] rounded-full opacity-80 -z-10" />
                </div>
                <div className="flex gap-4 items-end">
                    <h1
                        className="text-6xl font-bold tracking-tight md:text-left"
                        data-anim="goober"
                    >
                        vimae
                    </h1>
                    <p className="font-mono font-semibold text-ctp-text/50" data-anim="serial">[M43-72401VI]</p>
                </div>
                <p className="text-left text-lg" data-anim="goober">
                    is a musician, programmer and internet person
                </p>
                <div className="flex justify-start gap-2 mt-4" data-anim="tags">
                    <Chip
                        text="🏳️‍⚧️ she • they"
                        hideDot={true}
                        className="bg-ctp-surface0 text-ctp-text select-none shadow-xl"
                    ></Chip>
                    <Chip
                        text="🇬🇧 en-gb"
                        hideDot={true}
                        className="bg-ctp-surface0 text-ctp-text select-none shadow-xl"
                    ></Chip>
                </div>
            </div>

            <div className="ml-auto">
                <SideBlock title="socials">
                    <div className="p-4 gap-4 text-4xl text-neutral-100 flex justify-evenly items-center">
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
            </div>
        </div>

    );
}
