import React from 'react';
import PageContainer from "@mae/components/layout/PageContainer";
import Introduction from "@mae/components/frontpageBlocks/Introduction";
import {
  ToolBoxicon,
} from "@mae/components/frontpageBlocks/Tool";
import FrontpageSideblocks from "@mae/components/frontpageBlocks/FrontpageSideblocks";
import Link from "next/link";
import Button from "@mae/components/Button";
import HorizSeperator from "@mae/components/HorizSeperator";
import WebBadge from "@mae/components/WebBadge";
import Tool from '@mae/components/frontpageBlocks/Tool'
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-2 lg:gap-8 lg:px-8 transition-all">
      <PageContainer>
        <Introduction />

        {/* sideblocks mobile */}
        <div className="max-[670px]:block hidden">
          <FrontpageSideblocks />
        </div>
        <HorizSeperator />

        {/* backstory (mae lore) */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="block">
            <Image
              src="/assets/moon16by9_origres.png"
              width={1000}
              height={500}
              className="rounded-sm"
              alt="a pixel art illustration of mae's oc sitting on grass by the beach next to a building
                that says NUU CORP with a transgender flag on top. there is a moon in the corner of the frame
                and icons in the other corner"
              unoptimized={true}
              style={{
                boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)",
                imageRendering: "pixelated"
              }}
            />
          </div>
          <div className="space-y-4 h-full">
            <h2 className="text-2xl font-semibold">🪐 i do a lot of things!</h2>
            <p className="leading-6">
              i enjoy screwing around with creative software and really just
              anything.
              <br />
              <br />
              i've done webdev, gamedev, 3D modelling, pixelart, graphic design,
              reverse engineering, native development and system administration.
            </p>
            <div className="mt-auto w-fit">
              <Button
                href="/projects"
                text="projects"
                className="bg-str-cotton"
              ></Button>
            </div>
          </div>
        </div>
        <HorizSeperator />
        <div className="flex flex-col sm:flex-row-reverse gap-8">
          <div className="block">
            <Image
              src="/assets/ableton_screenshot.png"
              width={1280}
              height={720}
              className="rounded-sm "
              alt="a screenshot of visual studio code"
              style={{
                boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)",
              }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              🎼 i really really like music
            </h2>
            <p>
              i've been making music since 2020 in <b>Ableton Live</b> and <b>FL Studio</b>. i'm still
              trying to figure out what my style is but i've made a lot of electronic centered music
              in the past
            </p>
            <p>
              as for listening, i listen to a variety of genres - a lot of
              hyperpop, pop, electronic stuff, dubstep, indie, occasionally rock
              or metal. check out my{" "}
              <Link href="https://last.fm/user/etstringy" className="font-bold">
                last.fm
              </Link>{" "}
              to see what i've been listening to lately~
            </p>
          </div>
        </div>
        <HorizSeperator />

        {/* tools i work with */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-2xl">🔧 what i work with</h2>
          <p>
            i've written software in <b>JavaScript</b>, <b>Python</b>, <b>Rust</b>,&nbsp;
            <b>C#</b>, <b>Java</b> (in order of confidence)
          </p>
          <p>
            on the web side, i'm experienced with modern frameworks and toolsets like&nbsp;
            <b>React</b>, <b>Next.js</b>, <b>Svelte</b>, <b>SvelteKit</b>, <b>Vite</b> and <b>TailwindCSS</b>
          </p>
          <div className="grid grid-flow-col items-center py-4 gap-4">
            <Tool name="Rust" color="#ff954d">
              <Image src="/assets/logos/rust.svg" alt="Rust logo" width={32} height={32} style={{filter: "invert(100%)"}}/>
            </Tool>
            <Tool name="JavaScript" color="#f7df1e">
              <ToolBoxicon icon="bxl-javascript" />
            </Tool>
            <Tool name="Python" color="#27cc53">
              <ToolBoxicon icon="bxl-python" />
            </Tool>
            <Tool name="React" color="#00d8ff">
              <ToolBoxicon icon="bxl-react" />
            </Tool>
            <Tool name="Tailwind CSS" color="#0064a5">
              <ToolBoxicon icon="bxl-tailwind-css" />
            </Tool>
          </div>
        </div>
        <HorizSeperator />
        
        <div className="flex justify-center flex-wrap gap-2">
          <WebBadge href="https://mae.wtf" src="/assets/buttons/mae.png" alt="Mae web button"></WebBadge>
          <WebBadge href="https://arimelody.me" src="/assets/buttons/ari.gif" alt="Ari Melody web button"></WebBadge>
          <WebBadge href="https://invoxiplaygames.uk" src="/assets/buttons/ipg.png" alt="InvoxiPlayGames web button"></WebBadge>
          <WebBadge href="https://supitszaire.com" src="/assets/buttons/zaire.gif" alt="zaire web button"></WebBadge>
          <WebBadge href="https://notnite.com" src="/assets/buttons/notnite.png" alt="notnite web button"></WebBadge>
          <WebBadge href="https://lexd0g.eu.org" src="/assets/buttons/lexd0g.png" alt="lexd0g web button"></WebBadge>
          <WebBadge href="https://deci.pages.gay" src="/assets/buttons/deci.png" alt="deci web button"></WebBadge>
          <WebBadge src="/assets/buttons/trans.png" alt="Transgender web button"></WebBadge>
          <WebBadge src="/assets/buttons/bi.png" alt="Bisexual web button"></WebBadge>
        </div>
      </PageContainer>

      {/* sideblocks desktop */}
      <div className="min-[670px]:block hidden lg:mr-0 mr-4">
        <FrontpageSideblocks />
      </div>
    </div>
  );
}
