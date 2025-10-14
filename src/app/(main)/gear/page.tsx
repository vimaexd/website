import PageContainer from "@mae/components/layout/PageContainer";
import PageHeader from "@mae/components/layout/PageHeader";
import React from "react";
import Image from "next/legacy/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gear | mae ✨",
  description: "gear and software i use to make my projects",
};

export default function GearPage() {
  return (
    <PageContainer>
      <PageHeader title="⌨️ gear">the stuff i use to make stuff</PageHeader>

    <h2 className="font-semibold text-5xl">computers</h2>

    {/* stargazer */}
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64">
            <div className="space-y-2">
                <h3 className="font-semibold text-4xl">💫 stargazer</h3>
            
                <i>my main computer! evolving since 2019</i>
                <ul className="list-inside">
                <li>
                    <i className="bx bx-chip"></i> Intel Core i7-9700k
                </li>
                <li>
                    <i className="bx bx-microchip"></i> 2x8GB Corsair Vengeance @ 3000MHz
                </li>
                <li>
                    <i className="bx bx-microchip"></i> NVIDIA GeForce GTX 1080
                </li>
                <li>
                    <i className="bx bx-microchip"></i> MSI Z370-A PRO
                </li>
                <li>
                    <i className="bx bx-hdd"></i> 240GB SSD
                </li>
                <li>
                    <i className="bx bx-hdd"></i> 480GB SSD
                </li>
                <li>
                    <i className="bx bx-hdd"></i> 1TB HDD
                </li>
                <li>
                    <i className="bx bx-hdd"></i> 1TB HDD (external)
                </li>
                <li>
                    <i className="bx bx-hdd"></i> 2TB HDD (external)
                </li>
                <li>
                    <i className="bx bx-wind"></i> DEEPCOOL AK620 WH
                </li>
                <li>
                    <i className="bx bx-box"></i> NZXT H5 Flow
                </li>
                <li>
                    <i className="bx bx-disc"></i> Windows 11 Pro
                </li>
                </ul>
            </div>

            <div className="relative">
                <Image src="/assets/computers/stargazer.jpg" alt="A picture of a computer tower with lights" fill className="object-cover rounded-lg shadow-mae"/>
            </div>
    </div>

    {/* nebula */}
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64">
        <div className="space-y-2">
            <h3 className="font-semibold text-4xl">🌃 nebula</h3>
        
            <i>my laptop</i>
            <ul className="list-inside">
                <li>
                    <i className="bx bx-laptop"></i> 2023 MacBook Pro
                </li>

                <li>
                    <i className="bx bx-chip"></i> Apple M2 Pro
                </li>

                <li>
                    <i className="bx bx-microchip"></i> 16GB RAM
                </li>

                <li>
                    <i className="bx bx-microchip"></i> 512GB storage
                </li>
            </ul>
        </div>

        <div className="relative">
            <Image src="/assets/computers/nebula.png" alt="A picture of a MacBook with the text 'i am nebula and i am hiding all the secrets' displayed in a TextEdit window" fill className="object-cover rounded-lg shadow-mae"/>
        </div>
    </div>

    {/* aurora */}
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64">
        <div className="space-y-2">
            <h3 className="font-semibold text-4xl">🌌 aurora</h3>
        
            <i>my home server made out of spare parts!</i>
            <ul className="list-inside">
                <li>
                    <i className="bx bx-chip"></i> AMD Ryzen 5 1600
                </li>

                <li>
                    <i className="bx bx-microchip"></i> 8GB RAM
                </li>

                <li>
                    <i className="bx bx-microchip"></i> NVIDIA GeForce GTX 1070
                </li>

                <li>
                    <i className="bx bx-hdd"></i> 4TB storage total
                </li>

                <li>
                    <i className="bx bx-disc"></i> Proxmox (Debian)
                </li>
            </ul>
        </div>

        <div className="relative">
            <Image src="/assets/computers/aurora.png" alt="A picture of the internals of a tower computer on the floor" fill className="object-cover rounded-lg shadow-mae"/>
        </div>
    </div>

    {/* orbit */}
    <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64">
        <div className="space-y-2">
            <h3 className="font-semibold text-4xl">🪐 orbit</h3>
        
            <i>an old laptop i use as a really really basic server</i>
            <ul className="list-inside">
                <li>
                    <i className="bx bx-laptop"></i> Acer Aspire 5735
                </li>

                <li>
                    <i className="bx bx-chip"></i> Intel Pentium Dual T3400
                </li>

                <li>
                    <i className="bx bx-microchip"></i> 4GB RAM
                </li>

                <li>
                    <i className="bx bx-disc"></i> Ubuntu
                </li>
            </ul>
        </div>

        <div className="relative">
            <Image src="/assets/computers/orbit.png" alt="A picture of a laptop computer displaying the text '10 years without a wireguard connection, think about what that does to a computer'" fill className="object-cover rounded-lg shadow-mae"/>
        </div>
    </div>

    {/* misc */}
    <div className="space-y-2 grid grid-cols-2">
        <div>
            <h3 className="font-semibold text-2xl">Accessories for stargazer</h3>
            <ul className="list-disc list-inside">
            <li>Custom Keyboard (gateron yellows)</li>
            <li>Logitech G Pro Superlight Mouse</li>
            <li>Beyerdynamic DT 990 Pro Headphones</li>
            <li>M-Audio M-Track 2x2 Audio Interface</li>
            <li>some cheap mic off amazon lmao</li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold text-2xl">Misc</h3>
            <ul className="list-disc list-inside">
            <li>Oculus Quest 2 for VR (i use a cheap link cable and a kiwi design headstrap)</li>
            <li>Alesis VI49 and Launchpad Pro for MIDI controllers</li>
            </ul>
        </div>
    </div>

    {/* software */}
    <hr />
    <div className="flex flex-row justify-between">
        <div className="space-y-4 flex-grow">
            <h3 className="font-semibold text-4xl">Software</h3>
            <h4 className="font-semibold text-xl">🎵 for music:</h4>
            <ul className="list-disc list-inside">
                <li>
                    Ableton Live Suite
                </li>
                <li>
                   FL Studio
                </li>

                <li>Kilohearts stuff (phase plant)</li>
                <li>vital</li>
                <li>spitfire LABS / orchestra</li>
                <li className="text-sm">lots of other plugins</li>
            </ul>

          <h4 className="font-semibold text-xl">📽️ for videos:</h4>
          <ul className="list-disc list-inside">
            <li>Blender</li>
            <li>Premiere Pro</li>
            <li>After Effects</li>
            <li>Aseprite</li>
          </ul>

          <p className="text-sm">among others</p>
        </div>
            <div className="h-auto w-1/2 gap-8 hidden lg:grid">
            <div className="relative">
                <Image
                src="/assets/ableton_screenshot.png"
                fill={true}
                className="rounded-xl object-cover object-top"
                alt="Screenshot of Ableton Live"
                ></Image>
            </div>
            <div className="relative">
                <Image
                src="/assets/code_screenshot.png"
                fill={true}
                className="rounded-xl object-cover object-center"
                alt="Screenshot of Visual Studio Code"
                ></Image>
            </div>
        </div>
     </div>
    </PageContainer>
  );
}
