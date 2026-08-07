"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import Chip from "../../ui/Chip";
import SideBlock from "@mae/components/feature/sideblocks/Block";
import SocialSpeeddialBlock, {
    SocialSpeeddialSvg,
} from "@mae/components/feature/sideblocks/BlockSocial";
import LogoBsky from '@mae/assets/icons/logo-bluesky';

import { animate, stagger, createTimeline, createSpring } from 'animejs';
import { set } from "animejs";

export default function Introduction() {
    useLayoutEffect(() => {
        // everything is set to 0 opacity in CSS
        // in globals.css

        animate('[data-anim="glow"]', {
            opacity: [0, 0.8],
            delay: 200,
            duration: 800,
        })

        animate('[data-anim="initslide"]', {
            opacity: [0, 1],
            duration: 1000,
            x: [-6, 0],
            delay: stagger(100),
        });

        createTimeline({
            defaults: {
                delay: stagger(100, { start: 200}),
            },
        })
            .add('[data-anim="goober"]', {
                x: [-16, 5],
                ease: createSpring({
                    bounce: 0.50,
                    duration: 400
                }),
                opacity: [0, 1],
                letterSpacing: [-6, -1]
            })
            .add('[data-anim="serial"]', {
                y: [8, 0],
                opacity: [0, 1],
                ease: 'outExpo',
                duration: 900,
            }, 800);

        animate('.anim-sideblock-wrapper > *', {
            y: [20, 0],
            ease: 'outExpo',
            opacity: [0, 1],
            delay: stagger(100, {
                start: 600
            }),
        })

        animate('[data-anim="tags"] div', {
            y: [-20, 0],
            ease: 'outExpo',
            opacity: [0, 1],
            delay: stagger(200, {
                start: 400
            }),
        });
    });
    return (
        <div className="flex flex-col sm:flex-row w-full items-center">
            <div className="flex flex-col my-16">
                <div className="relative">
                    <div data-anim="glow" className="absolute left-0 -translate-x-1/2 w-1/3 h-24 bg-ctp-mauve blur-[64px] rounded-full opacity-80 -z-10" />
                </div>
                <div className="flex gap-4 items-end">
                    <h1
                        className="text-6xl font-bold tracking-tight md:text-left will-change-auto"
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
