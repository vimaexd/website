import PageContainer from "@mae/components/layout/PageContainer";
import PageHeader from "@mae/components/layout/PageHeader";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import anime from "animejs";
import { Metadata } from "next";
import { StringLiteral } from "typescript";

export const metadata: Metadata = {
    title: "Contact me | mae ✨",
    description: "info on how and where to contact me",
};

export default function page() {
    return (
        <PageContainer>
            <PageHeader title="📱 contact">
                wanna talk? send me an email or dm me on any platform below
            </PageHeader>

            <div>
                please <b className="text-red-300">do not</b> contact me
                regarding:
                <ul className="list-disc list-inside">
                    <li>collaborations</li>
                    <li>advertisement</li>
                </ul>
            </div>

            <div className="flex flex-col justify-between space-y-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">preferred</h3>
                    <ContactLink
                        text="vimae"
                        icon="bxl-discord-alt"
                        className="text-ctp-lavender"
                        link="https://discord.com/users/577743466940071949"
                    />

                    <ContactLink
                        text="mae @ (this domain)"
                        icon="bxs-envelope"
                        className="text-ctp-lavender"
                        link=""
                    />

                    <ContactLink
                        text="mae.wtf (bsky)"
                        icon="bxs-cloud"
                        className="text-ctp-lavender"
                        link="https://bsky.app/profile/mae.wtf"
                    />
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold">less likely to answer</h3>
                    <ContactLink
                        text="@mae:matrix.mae.wtf"
                        icon="bxs-chat"
                        className="text-ctp-pink"
                        link=""
                    />
                    <ContactLink
                        text="@mae@wetdry.world"
                        icon="bxl-mastodon"
                        className="text-ctp-pink"
                        link="https://wetdry.world/@mae"
                    />
                    <ContactLink
                        text="@mae@f.mae.wtf"
                        icon="bxl-mastodon"
                        className="text-ctp-pink"
                        link="https://f.mae.wtf/@mae"
                    />
                    <ContactLink
                        text="@vimaexd"
                        icon="bxl-twitter"
                        className="text-ctp-pink opacity-25"
                        link="https://twitter.com/@vimaexd"
                    />
                </div>
            </div>
        </PageContainer>
    );
}

function ContactLink({
    text,
    className,
    icon,
    link,
}: {
    text: string;
    className?: string;
    icon: string;
    link: string;
}) {
    return (
        <Link href={link} className={"w-fit space-x-1 " + className}>
            <i className={"bx bx-sm align-bottom " + icon}></i>
            <span>{text}</span>
        </Link>
    );
}
