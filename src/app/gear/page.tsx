import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';

export default function GearPage() {
  return (
    <PageContainer>
      <PageHeader title="⌨️ gear">
        the stuff i use to make stuff
      </PageHeader>

      <div className='flex flex-row justify-between'>
        <div className='space-y-4 flex-grow'>
          <h2 className='font-semibold text-2xl'>Software</h2>
          <h4>📽️ for videos:</h4>
          <ul className='list-disc list-inside'>
            <li>Blender</li>
            <li>Premiere Pro</li>
            <li>After Effects</li>
            <li>Aseprite</li>
          </ul>
          
          <h4>👩‍💻 for code:</h4>
          <ul className='list-disc list-inside'>
            <li>Visual Studio Code</li>
            <li>Visual Studio 2022</li>
            <li>IntelliJ Idea</li>
            <li>Termius</li>
            <li>Git</li>
          </ul>

          <h4>🎵 for music:</h4>
          <ul className='list-disc list-inside'>
            <li><b>Ableton Live</b></li>
            <li><b>FL Studio</b></li>
            <li>Xfer Serum</li>
            <li>Kilohearts Phase Plant</li>
            <li>Vital</li>
            <li>Spitfire LABS</li>
            <li>Spitfire BBC Symphony Orchestra</li>
            <li>ValhallaVintageVerb</li>
            <li>ValhallaSupermassive</li>
          </ul>
          <p className='text-sm'>and a lot of other VSTs..</p>
        </div>
        <div className='h-auto w-1/2 gap-8 hidden lg:grid'>
          <div className='relative'>
            <Image src="/assets/ableton_screenshot.png" fill={true} className='rounded-xl object-cover object-top' alt="Screenshot of Ableton Live"></Image>
          </div>
          <div className='relative'>
            <Image src="/assets/code_screenshot.png" fill={true} className='rounded-xl object-cover object-center' alt="Screenshot of Visual Studio Code"></Image>
          </div>
        </div>
      </div>

      <hr/>
      <div className='h-80 w-full relative'>
        <Image src="/assets/pc.jpg" fill={true} alt="mae computer" className='rounded-xl object-cover object-center'></Image>
      </div>
      <div className='flex justify-around'>
        <div className='space-y-2'>
          <h2 className='font-semibold text-2xl'>Main Computer</h2>
          <ul className='list-inside'>
            <li><i className='bx bx-chip'></i> Intel Core i7-9700k</li>
            <li><i className='bx bx-microchip'></i> 2x8GB Corsair Vengeance @ 3000MHz</li>
            <li><i className='bx bx-microchip'></i> NVIDIA GeForce GTX 1070</li>
            <li><i className='bx bx-microchip'></i> MSI Z370-A PRO</li>
            <li><i className='bx bx-hdd'></i> 240GB SSD</li>
            <li><i className='bx bx-hdd'></i> 480GB SSD</li>
            <li><i className='bx bx-hdd'></i> 1TB HDD</li>
            <li><i className='bx bx-hdd'></i> 1TB HDD (external)</li>
            <li><i className='bx bx-hdd'></i> 2TB HDD (external)</li>
            <li><i className='bx bx-wind'></i> DEEPCOOL AK620 WH</li>
            <li><i className='bx bx-box'></i> NZXT H5 Flow</li>
            <li><i className='bx bx-disc'></i> Windows 11 Pro</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <h2 className='font-semibold text-2xl'>Accessories</h2>
          <ul className='list-disc list-inside'>
            <li>Custom Keyboard</li>
            <li>Logitech G402 Mouse</li>
            <li>Steelseries Arctis 3 Headphones</li>
            <li>M-Audio M-Track 2x2 Audio Interface</li>
            <li>Neewer NW-700 Microphone</li>
          </ul>
          <h2 className='font-semibold text-2xl'>Misc</h2>
          <ul className='list-disc list-inside'>
            <li>Nintendo Switch Pro Controller</li>
            <li>DualShock 4</li>
            <li>Oculus Quest 2</li>
            <li>Alesis VI49</li>
            <li>Launchpad Pro</li>
          </ul>
        </div>
      </div>
    </PageContainer>
  )
}
