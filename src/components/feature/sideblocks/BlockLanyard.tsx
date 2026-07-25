"use client";
import React, { Fragment } from "react";
import SideBlock from "@mae/components/feature/sideblocks/Block";
import { useLanyardWS } from "use-lanyard";
import Image from "next/image";
import Link from "next/link";

export default function LanyardBlock({ id }: { id: `${bigint}` }) {
    const lanyard = useLanyardWS(id);
    if (!lanyard)
        return (
            <SideBlock title="system status">
                <div className='w-full h-full bg-ctp-base animate-pulse'></div>
            </SideBlock>
        );

    console.log(lanyard);

    const mediaProxyRegex = /mp:external\/.*?(http.*)/;
    const desktopMusicAppIds = [
        "409394531948298250", // musicbee
        "911790844204437504", // cider
        "886578863147192350", // cider (as apple music)
        "1165957668758900787", // feishin
    ];

    const desktopMusicApp = lanyard.activities
        .filter((a) => a.type == 2)
        .find((a) => desktopMusicAppIds.includes(a.application_id!.toString()));

    return (
        <Fragment>
            {
                /* Offline status*/
                lanyard.discord_status == "offline" && (
                    <SideBlock title="🌌 offline"></SideBlock>
                )
            }
            <SideBlock title={(lanyard.discord_status !== "offline") ? "system status" : "offline"}>
                {
                    (!desktopMusicApp && lanyard.discord_status !== "offline") && <>
                        <div className="p-2 h-full flex flex-col items-center justify-center gap-2">
                            <div className="flex justify-center items-center align-center gap-2">
                                <Image
                                    src={`https://cdn.discordapp.com/avatars/${lanyard.discord_user.id}/${lanyard.discord_user.avatar}`}
                                    alt="Profile picture"
                                    width={36}
                                    height={36}
                                    className="rounded-full"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                />
                                <p className="text-sm font-medium">mae is online!</p>
                            </div>
                        </div>
                    </>
                }
                {
                    desktopMusicApp && (
                        <div className="p-2 h-full flex flex-col items-center justify-center gap-2">
                            <div className="flex justify-center items-center align-center gap-2">
                                <Image
                                    src={`https://cdn.discordapp.com/avatars/${lanyard.discord_user.id}/${lanyard.discord_user.avatar}`}
                                    alt="Profile picture"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                />
                                <p className="text-xs font-medium">mae is online! she's listening to:</p>
                            </div>
                            <div className="flex justify-center items-center flex-row gap-2 p-1">
                                {desktopMusicApp.assets?.large_image &&
                                    desktopMusicApp.assets?.large_image.startsWith(
                                        "mp:external",
                                    ) && (
                                        <Image
                                            src={desktopMusicApp.assets?.large_image
                                                .match(mediaProxyRegex)![1]
                                                .replace("https/", "https://")}
                                            alt="Album art"
                                            width={36}
                                            height={36}
                                            className="rounded-sm"
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    )}
                                <div className="flex flex-col justify-center -mt-1">
                                    <h2 className="text-sm font-medium">
                                        {desktopMusicApp.details}
                                    </h2>
                                    <h3 className="text-xs">{desktopMusicApp.state}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }
            </SideBlock>
        </Fragment>
    );
}
