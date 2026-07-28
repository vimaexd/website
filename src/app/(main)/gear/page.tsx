import PageContainer from "@mae/components/core/PageContainer";
import PageHeader from "@mae/components/core/PageHeader";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import HorizSeperator from "@mae/components/core/HorizSeperator";

export const metadata: Metadata = {
  title: "Gear | mae ✨",
  description: "gear and software i use to make my projects",
};

export default function GearPage() {
  return (
      <PageContainer>
          <PageHeader title="⌨️ computers and gear">i love my computers and building, upgrading and taking care of them ^-^</PageHeader>

          {/* stargazer */}
          <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64 border border-white/20 p-8 rounded-md">
                  <div className="space-y-2">
                      <h3 className="font-semibold text-3xl">💫 stargazer</h3>

                      <i>my main computer! evolving since 2019</i>
                      <ul className="list-inside">
                      <li>
                          <i className="bx bx-chip"></i> Intel Core i7-9700k
                      </li>
                      <li>
                          <i className="bx bx-microchip"></i> 16GB DDR4
                      </li>
                      <li>
                          <i className="bx bx-microchip"></i> AMD RX 9070 XT
                      </li>
                      <li>
                          <i className="bx bx-microchip"></i> MSI Z370-A PRO
                      </li>
                      <li>
                          <i className="bx bx-hdd"></i> a lot of storage
                      </li>
                      <li>
                          <i className="bx bx-box"></i> NZXT H5 Flow
                      </li>
                      <li>
                          <i className="bx bx-disc"></i> Arch Linux <span className="italic opacity-25">btw</span>
                      </li>
                      </ul>
                  </div>

                  <div className="relative">
                      <Image
                          src="/assets/computers/stargazer.jpg"
                          alt="A picture of a computer tower with lights"
                          fill
                          className="object-cover rounded-lg shadow-mae"
                          style={{
                              maxWidth: "100%",
                          }} />
                  </div>
          </div>
          {/* nebula */}
          <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64 border border-white/20 p-8 rounded-md">
              <div className="space-y-2">
                  <h3 className="font-semibold text-3xl">🌃 nebula</h3>

                  <i>my laptop</i>
                  <ul className="list-inside">
                      <li>
                          <i className="bx bx-laptop"></i> 2023 MacBook Pro (M2 Pro)
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
                  <Image
                      src="/assets/computers/nebula.png"
                      alt="A picture of a MacBook with the text 'i am nebula and i am hiding all the secrets' displayed in a TextEdit window"
                      fill
                      className="object-cover rounded-lg shadow-mae"
                      style={{
                          maxWidth: "100%",
                      }} />
              </div>
          </div>
          {/* aurora */}
          <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 min-h-64 border border-white/20 p-8 rounded-md">
              <div className="space-y-2">
                  <h3 className="font-semibold text-3xl">🌌 aurora</h3>

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
                  <Image
                      src="/assets/computers/aurora.png"
                      alt="A picture of the internals of a tower computer on the floor"
                      fill
                      className="object-cover rounded-lg shadow-mae"
                      style={{
                          maxWidth: "100%",
                      }} />
              </div>
          </div>
          {/* misc */}
          <div className="space-y-2 grid grid-cols-2">
              <div>
                  <ul className="">
                  <li><span className="font-semibold">keyboard:</span> custom (kbdfans tofu60, gateron yellows)</li>
                  <li><span className="font-semibold">mouse:</span>  g pro superlight</li>
                  <li><span className="font-semibold">headphones:</span> beyerdynamic dt770</li>
                    <li><span className="font-semibold">microphone:</span> tonor tc-2030</li>
                    <li><span className="font-semibold">interface:</span> scarlett solo 4th gen</li>

                  </ul>
              </div>
              <div>
                  <ul className="list-disc list-inside">
                  <li><span className="font-semibold">VR:</span> quest 2 (+ kiwi design headstrap)</li>
                  <li><span className="font-semibold">MIDI:</span> alesis vi49, launchpad pro</li>
                  </ul>
              </div>
          </div>
          {/* software */}
          <HorizSeperator/>
          <div className="flex flex-row justify-between">
              <div className="space-y-4 flex-grow">
                  <h3 className="font-semibold text-4xl">Software</h3>
                  <h4 className="font-semibold text-xl">for music:</h4>
                  <ul className="list-disc list-inside">
                      <li>
                          ableton live suite
                      </li>
                      <li>
                          fl studio
                      </li>

                      <li>kilohearts suite (phase plant)</li>
                      <li>vital</li>
                      <li>spitfire LABS / orchestra</li>
                      <li>kontakt</li>
                      <li className="text-sm">+ many other effect plugins</li>
                  </ul>

                <h4 className="font-semibold text-xl">for videos:</h4>
                <ul className="list-disc list-inside">
                  <li>blender</li>
                  <li>premiere pro</li>
                  <li>after effects</li>
                  <li>aseprite</li>
                </ul>
              </div>
                  <div className="h-auto w-1/2 gap-8 hidden lg:grid">
                  <div className="relative">
                      <Image
                          src="/assets/ableton_screenshot.png"
                          fill={true}
                          className="rounded-xl object-cover object-top"
                          alt="Screenshot of Ableton Live"
                          style={{
                              maxWidth: "100%",
                          }}></Image>
                  </div>
                  <div className="relative">
                      <Image
                          src="/assets/code_screenshot.png"
                          fill={true}
                          className="rounded-xl object-cover object-center"
                          alt="Screenshot of Visual Studio Code"
                          style={{
                              maxWidth: "100%",
                          }}></Image>
                  </div>
              </div>
           </div>
      </PageContainer>
  );
}
