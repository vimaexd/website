import PageContainer from "@mae/components/layout/PageContainer";
import Introduction from "@mae/components/frontpageBlocks/Introduction";
import Image from "next/image";
import { Metadata } from "next";
import {
  ToolAdobeIcon,
  ToolBoxicon,
} from "@mae/components/frontpageBlocks/Tool";
import FrontpageSideblocks from "@mae/components/frontpageBlocks/FrontpageSideblocks";
import { ComponentChildren } from "@mae/misc/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@mae/components/Button";
import HorizSeperator from "@mae/components/HorizSeperator";
import WebBadge from "@mae/components/WebBadge";

const Tool = dynamic(() => import("@mae/components/frontpageBlocks/Tool"));

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
        <div className="flex flex-col sm:flex-row-reverse gap-8">
          <div className="block">
            <Image
              src="/assets/moon16by9.png"
              width={1000}
              height={500}
              className="rounded-lg"
              alt="a pixel art illustration of mae's oc sitting on grass by the beach next to a building
                that says NUU CORP with a transgender flag on top. there is a moon in the corner of the frame
                and icons in the other corner"
              style={{
                boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)",
              }}
            />
          </div>
          <div className="space-y-4 h-full">
            <h2 className="text-xl font-semibold">🪐 i do a lot of things!</h2>
            <p className="leading-6">
              i enjoy screwing around with creative software and really just
              anything.
              <br />
              <br />
              i've dipped my toes into web development, game development, 3D
              modelling and art, audio production, pixelart, graphic design,
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
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="block">
            <Image
              src="/assets/ableton_screenshot.png"
              width={400}
              height={200}
              className="rounded-lg"
              alt="a screenshot of visual studio code"
              style={{
                boxShadow: "0px 2px 32px 8px rgba(133, 72, 245, 0.1)",
              }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              🎼 i really really like music
            </h2>
            <p>
              i've been making music as
              <Image
                src={"/assets/logos/stringy/StringyWordmark_White.svg"}
                width={100}
                height={20}
                alt="Stringy"
                className="px-2 inline align-middle -translate-y-.5"
              />
              since 2020 in different programs (mainly Ableton Live). i'm still
              trying to figure out what my style is but i've made many different
              genres all centering around electronic music.
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
        <div className="flex flex-col space-y-8">
          <h2 className="font-semibold text-xl">🔧 programming experience</h2>
          <p>
            i know a few programming languages, and i'm always eager to expand
            what i know by learning new frameworks, languages, packages and
            tools. i mainly use <b>JavaScript</b> and have around 4-5 years of
            experience in it. i'm also fluent with using <b>TypeScript</b> to
            write more stable code and the web framework <b>React</b>.
          </p>
          <p>
            i've also used <b>C#</b>, <b>Lua</b>, <b>Python</b> and <b>Java</b>{" "}
            in the past, depending on the need.
          </p>
          <p>
            in the future i'm looking to learn more lower level languages like{" "}
            <b>C++</b> or <b>Rust</b> to be able to write faster and portable code.
          </p>
          <div className="grid grid-flow-col justify-around items-center py-8">
            <Tool name="JavaScript" color="#f7df1e">
              <ToolBoxicon icon="bxl-javascript" />
            </Tool>
            <Tool name="Python" color="#27cc53">
              <ToolBoxicon icon="bxl-python" />
            </Tool>
            <Tool name="React" color="#00d8ff">
              <ToolBoxicon icon="bxl-react" />
            </Tool>
            <Tool name="Tailwind CSS" color="#38bdf8">
              <ToolBoxicon icon="bxl-tailwind-css" />
            </Tool>
            <Tool name="PostgreSQL" color="#0064a5">
              <ToolBoxicon icon="bxl-postgresql" />
            </Tool>
          </div>
        </div>
        <HorizSeperator />

        {/* software i work with */}
        <div className="flex flex-col space-y-8">
          <h2 className="font-semibold text-xl">💻 software i work with</h2>
          <div className="grid grid-flow-col justify-around items-center">
            <Tool name="FL Studio" color="#454545" useBoxShadow={false}>
              <div className="w-12 h-12 flex items-center justify-center p-2 ">
                <Image
                  src="/assets/logos/FLStudio_logo.png"
                  width={32}
                  height={32}
                  alt="FL Studio Logo"
                  className="mae-tool-img-flstudio"
                />
              </div>
            </Tool>
            <Tool
              name="Ableton Live"
              color="rgba(255,255,255,0.1)"
              useBoxShadow={true}
            >
              <div className="w-8 h-8 bg-white">
                <p className="mix-blend-multiply text-black font-medium text-[12px] flex items-center justify-center h-full">
                  Live
                </p>
              </div>
            </Tool>
            <Tool name="Photoshop" color="#001833" useBoxShadow={true}>
              <ToolAdobeIcon text="Ps" />
            </Tool>
            <Tool name="Premiere Pro" color="#00005b" useBoxShadow={true}>
              <ToolAdobeIcon text="Pr" />
            </Tool>
            <Tool name="After Effects" color="#00005b" useBoxShadow={true}>
              <ToolAdobeIcon text="Ae" />
            </Tool>
            <Tool name="Visual Studio Code" color="#0078d7">
              <ToolBoxicon icon="bxl-visual-studio" />
            </Tool>
          </div>
        </div>
        <HorizSeperator />
        
        <div className="flex justify-center flex-wrap gap-2">
          <WebBadge href="https://mae.wtf" src="/assets/buttons/mae.png" alt="Mae web button"></WebBadge>
          <WebBadge href="https://invoxiplaygames.uk" src="/assets/buttons/ipg.png" alt="InvoxiPlayGames web button"></WebBadge>
          <WebBadge href="javascript:void(0)" src="/assets/buttons/trans.png" alt="Transgender web button"></WebBadge>
          <WebBadge href="javascript:void(0)" src="/assets/buttons/bi.png" alt="Bisexual web button"></WebBadge>
        </div>
      </PageContainer>

      {/* sideblocks desktop */}
      <div className="min-[670px]:block hidden lg:mr-0 mr-4">
        <FrontpageSideblocks />
      </div>
    </div>
  );
}
