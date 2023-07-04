import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';
import Chip from '@mae/components/Chip';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services |✨ mae',
  description: 'directory of services hosted on mae.wtf'
}

export default function Services() {
  return (
    <div className='flex flex-col lg:flex-row justify-center gap-8 lg:mx-8'>
      <details open={true} className='mx-4 lg:mx-0 lg:w-80 bg-neutral-900 p-4 rounded-lg flex flex-col flex-shrink-0 h-fit mt-8'>
        <summary className='cursor-pointer text-xl font-semibold text-center mb-4'>Contents</summary>
        <a href="#calckey" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>mae's space station</a>
        <a href="#cobalt" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>cobalt</a>
        <a href="#misq" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>Misq</a>
        <a href="#blobmaker" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>Blob Maker</a>
        <a href="#matrix" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>Matrix</a>
        <a href="#disq" className='py-2 border-b-2 border-neutral-700 text-neutral-300'>Disq</a>
      </details>
      <div className='flex items-center flex-col pt-8 flex-shrink'>
        <div className='max-w-[1024px] px-4 lg:px-0 space-y-8 mb-8'>
          <PageHeader title="💻 services">
            i host a couple of web services on this domain, here's a current list of them
          </PageHeader>
          <hr/>
          <div className='inline-block' id="calckey">
            <Image src="/assets/logos/spacestation/logo.png" height={200} width={400} alt="mae's space station logo
            " className='mb-4'></Image>
            <div className='flex space-x-2'>
              <Chip text="Social" className='bg-blue-400 text-black'></Chip>
              <Chip text="Invite only" className='bg-orange-300'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>mae's space station</strong> is a <a href="https://calckey.org/">Calckey</a> instance, a part of the Fediverse.
              Calckey is a feature-rich social network server that allows you to express yourself with features like reactions, markdown,
              custom emojis and a lot more.
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Requirements</h2>
            <p>
              The space station is open to people who are part of the yarnspace discord server and that I know well enough. Feel free to DM
              me for an invite if you meet the requirements
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <a href="https://f.mae.wtf">https://f.mae.wtf</a>
            </p>
          </div>

          <hr/>
          <div className='inline-block' id="cobalt">
            <Image src="/assets/logos/cobalt/generic.png" height={100} width={100} alt="cobalt pattern" className='mb-4'></Image>
            <div className='flex space-x-2'>
              <Chip text="Public" className='bg-green-400'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>cobalt</strong> is a website by wukko that allows you to save what you love from many websites such as YouTube, Twitter,
              Instagram, Reddit and more sites without any trackers, ads or other creepy bullshit. I host an instance of cobalt for mostly
              personal use incase of the main instance having issues, but it's publicly accessable.
            </p>
            <br/>
            <a href="https://github.com/wukko/cobalt">wukko/cobalt on GitHub</a>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <a href="https://co.mae.wtf">https://co.mae.wtf</a>
            </p>
          </div>

          <hr/>
          <div className='inline-block' id="misq">
            <h1 className='text-6xl mb-4'>Misq</h1>
            <div className='flex space-x-2'>
              <Chip text="Public" className='bg-green-400'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>Misq</strong> is a dump for random websites. It has not been updated recently, and features some broken URLs to
              an old image host. It is up for archival purposes and to statically host files.
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <a href="https://misc.mae.wtf">https://misc.mae.wtf</a>
            </p>
          </div>

          <hr/>
          <div className='inline-block' id="blobmaker">
            <h1 className='text-4xl mb-4 font-bold'>Blob Maker</h1>
            <div className='flex space-x-2'>
              <Chip text="Public" className='bg-green-400'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>Blob Maker</strong> is a project I made to learn VueJS. It allows you to create your own Blob character on the site,
              and download your creation. The blob assets were supplied by <a href="https://muatex.uk">Muatex</a>. This project originally lived
              at <code>blobmaker.stringy.software</code>, but that domain has since gone offline.
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <a href="https://mkblob.web.app">https://mkblob.web.app</a>
            </p>
          </div>

          <hr/>
          <div className='inline-block' id="matrix">
            <Image src="/assets/logos/matrix/matrix-logo.png" height={200} width={200} alt="cobalt pattern" className='mb-4'></Image>
            <div className='flex space-x-2'>
              <Chip text="Private" className='bg-red-400'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>Matrix</strong> is a decentralized chat protocol. I host a homeserver (synapse) for personal use and a few select close friends.
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <code>@mae:matrix.mae.wtf</code>
            </p>
          </div>

          <hr/>
          <div className='inline-block' id="disq">
            <Image src="/assets/logos/disq/disq.svg" height={100} width={100} alt="cobalt pattern" className='mb-4'></Image>
            <div className='flex space-x-2'>
              <Chip text="Private" className='bg-red-400'></Chip>
            </div>
            <br/>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>Info</h2>
            <p>
              <strong>Disq</strong> is a file host website that I ran from around 2020 - 2021. I host a very stripped down instance of the original
              source code for hosting personal files that is allowlisted to only me and has many functions disabled. I do not recommend using Disq
              yourself nowadays.
            </p>
            <h2 className='text-lg mt-6 mb-2 font-semibold'>URLs</h2>
            <p>
              <a href="https://i.mae.wtf">https://i.mae.wtf</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
