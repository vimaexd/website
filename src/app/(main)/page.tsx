import React from "react";
import PageContainer from "@mae/components/core/PageContainer";
import Introduction from "@mae/components/feature/intro/Introduction";
import { ToolBoxicon } from "@mae/components/misc/Tool";
import FrontpageSideblocks from "@mae/components/feature/sideblocks/Sideblocks";
import Link from "next/link";
import HorizSeperator from "@mae/components/core/HorizSeperator";
import WebBadge from "@mae/components/misc/WebBadge";
import Tool from "@mae/components/misc/Tool";
import Image from "next/image";

import projectData from "@mae/data/projects.json";

export default function Home() {
    return (
        <div className="flex flex-row justify-center gap-2 lg:gap-8 lg:px-8 transition-all bg-pattern">
            <PageContainer>
                <Introduction />

                {/* sideblocks mobile */}
                <div className="flex flex-col">
                    <FrontpageSideblocks />
                </div>
                <HorizSeperator />

                {/* backstory (mae lore) */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="space-y-4 h-full">
                        <h2 className="font-semibold text-2xl">
                            👩‍💻
                        </h2>
                        <p className="leading-7">
                            i'm a <b>programmer</b> and <b>musician</b> and enjoy making things
                            to share with the world. i like to poke into different fields, so
                            you can find me doing web dev, desktop dev,
                            reverse engineering, game dev and much more! i primarily run a linux desktop
                            for fun and i love to build computers.
                        </p>
                        <p>here are some recent things i've made:</p>
                        <div className="flex flex-col gap-4 w-full min-w-0">
                            {projectData.projects.slice(0, 4).map((p: any) => (
                                <div
                                    key={p.title}
                                    className="flex items-center gap-4 w-full min-w-0"
                                >
                                    <Image
                                        src={p.image}
                                        alt="Project image"
                                        width={48}
                                        height={24}
                                        className="rounded-md shrink-0"
                                    />
                                    <div className="flex flex-col min-w-0 flex-1">
                                        <h1 className="font-bold overflow-hidden text-ellipsis text-nowrap">
                                            {p.title}
                                        </h1>
                                        <p className="text-sm min-w-0">
                                            {p.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <Link href="/projects" className="w-fit">
                                <p className="ml-16">More projects</p>
                            </Link>
                        </div>
                        <div className="flex">

                        </div>
                        <p>
                            i also contribute to various open source projects
                            from time to time over on my{" "}
                            <a href="https://codeberg.com/vimaexd">Codeberg</a>{" "}
                            and <a href="https://github.com/vimaexd">GitHub</a>{" "}
                            from time to time.
                        </p>

                    </div>
                </div>
                <HorizSeperator />
                <div className="flex sm:flex-row flex-col items-center-safe gap-16 md:gap-32">
                    <div className="sm:w-2/3">
                        <h2 className="font-semibold text-2xl">
                            🎹
                        </h2>
                        <p className="leading-7 mt-4">
                            i have a deep love of music in many styles, but my taste{" "}
                            usually centers around <b>pop</b> and <b>electronic</b> music.
                            the music i make varies from genre to genre, and you can find my music{" "}
                            <Link href="/music" className="font-bold">here!</Link>
                            <br /><br />

                            i also enjoy arcade rhythm games, such as <b>Sound Voltex</b>,{" "}
                            <b>DanceDanceRevolution</b> and <b>maimai</b>. i find the modern
                            online service tech really interesting!
                        </p>
                    </div>
                    <div className="z-10 relative w-full sm:w-3/12 h-64 rounded-lg overflow-hidden sm:scale-125 rotate-[4deg] border border-white/50">
                        <Image
                            src="/assets/arcade.jpeg"
                            alt="A WACCA arcade cabinet"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <HorizSeperator />

                {/* tools i work with */}
                <div className="flex flex-col space-y-2">
                    <h2 className="font-semibold text-2xl">
                        🔧
                    </h2>
                    <p>
                        i work with many tools:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>TypeScript</li>
                        <li>React (Next, Vite)</li>
                        <li>Svelte (SvelteKit, Vite)</li>
                        <li>TailwindCSS</li>
                        <li>Rust</li>
                        <li>Python</li>
                    </ul>
                </div>
                <HorizSeperator />
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg">friends</h3>
                    <div className="flex flex-wrap gap-2">
                        <WebBadge
                            href="https://mae.wtf"
                            src="/assets/buttons/mae.png"
                            alt="mae"
                        />
                        <WebBadge
                            href="https://arimelody.me"
                            src="/assets/buttons/friends/ari.gif"
                            alt="ari melody"
                        />
                        <WebBadge
                            href="https://invoxiplaygames.uk"
                            src="/assets/buttons/friends/ipg.png"
                            alt="InvoxiPlayGames"
                        />
                        <WebBadge
                            href="https://supitszaire.com"
                            src="/assets/buttons/friends/zaire.gif"
                            alt="zaire"
                        />
                        <WebBadge
                            href="https://notnite.com"
                            src="/assets/buttons/friends/notnite.png"
                            alt="notnite"
                        />
                        <WebBadge
                            href="https://lexd0g.eu.org"
                            src="/assets/buttons/friends/lexd0g.png"
                            alt="lexd0g"
                        />
                        <WebBadge
                            href="https://deci.pages.gay"
                            src="/assets/buttons/friends/deci.png"
                            alt="deci"
                        />
                        <WebBadge
                            href="https://boxy.neocities.org"
                            src="/assets/buttons/friends/boky.png"
                            alt="boxy"
                        ></WebBadge>
                        <WebBadge
                            href="https://ioletsgo.gay"
                            src="/assets/buttons/friends/ivory.gif"
                            alt="ioletsgo"
                        ></WebBadge>
                        <WebBadge
                            href="https://idkimjustadog.neocities.org"
                            src="/assets/buttons/friends/ellie.png"
                            alt="ellie"
                        ></WebBadge>
                        <WebBadge
                            href="https://ixnoah.live"
                            src="/assets/buttons/friends/noah.gif"
                            alt="ixnoah"
                        ></WebBadge>
                        <WebBadge
                            href="https://disphing.com"
                            src="/assets/buttons/friends/disphing.gif"
                            alt="disphing"
                        />
                        <WebBadge
                            href="https://daniela.lol"
                            src="/assets/buttons/friends/daniela.gif"
                            alt="daniela"
                        />
                        <WebBadge
                            href="https://sapphic.moe"
                            src="/assets/buttons/friends/sapphic.png"
                            alt="Sapphic Angels"
                        />
                        <WebBadge
                            href="https://wangleline.com"
                            src="/assets/buttons/friends/line.png"
                            alt="WangleLine"
                        />
                        <WebBadge
                            href="https://ellie53.neocities.org/"
                            src="/assets/buttons/friends/ellie53.png"
                            alt="Ellie53"
                        />
                        <WebBadge
                            href="https://j0.lol/"
                            src="/assets/buttons/friends/j0.gif"
                            alt="j0"
                        />
                        <WebBadge
                            href="https://girlthi.ng/~thermia/"
                            src="/assets/buttons/friends/thermia.gif"
                            alt="thermia"
                        />
                    </div>

                    <h3 className="font-bold text-lg">cool stuff</h3>
                    <div className="flex flex-wrap gap-2">
                        <WebBadge
                            href="https://wetdry.world"
                            src="/assets/buttons/misc/wdw.gif"
                            alt="Wet-Dry World"
                        ></WebBadge>
                        <WebBadge
                            href="https://eightyeightthirty.one"
                            src="/assets/buttons/misc/eightyeight.png"
                            alt="8831"
                        ></WebBadge>
                        <WebBadge
                            href="https://undertale.com"
                            src="/assets/buttons/misc/ut.gif"
                            alt="Webmaster loves Undertale"
                        ></WebBadge>
                        <WebBadge
                            href="https://deltarune.com"
                            src="/assets/buttons/misc/dt.gif"
                            alt="Deltarune.com"
                        ></WebBadge>
                        <WebBadge
                            src="/assets/buttons/misc/wii.gif"
                            alt="Wii"
                        ></WebBadge>
                        <WebBadge
                            src="/assets/buttons/misc/firtnite.png"
                            alt="Firtnite"
                        ></WebBadge>
                        <WebBadge
                            src="/assets/buttons/misc/trans.png"
                            alt="Transgender flag"
                        ></WebBadge>
                        <WebBadge
                            src="/assets/buttons/misc/bi.png"
                            alt="Bisexual flag"
                        ></WebBadge>
                    </div>
                </div>

                <HorizSeperator />
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg">webrings</h3>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-4">
                            <a
                                className="bg-ctp-base hover:bg-ctp-surface0 p-4 rounded-xl"
                                href="https://melon-ring.pathetic.systems/vimae/previous"
                            >
                                ◀
                            </a>
                            <a href="https://melon-ring.pathetic.systems">
                                melon-ring
                            </a>
                            <a
                                className="bg-ctp-base hover:bg-ctp-surface0 p-4 rounded-xl"
                                href="https://melon-ring.pathetic.systems/vimae/next"
                            >
                                ▶
                            </a>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
