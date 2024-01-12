import PageContainer from '@mae/components/layout/PageContainer'
import PageHeader from '@mae/components/layout/PageHeader'
import React from 'react'
import Image from 'next/image';
import Chip from '@mae/components/Chip';
import { Metadata } from 'next';
import Contents from '@mae/components/contents/Contents';
import ContentsOption from '@mae/components/contents/ContentsOption';

export const metadata: Metadata = {
  title: 'Service directory | mae ✨',
  description: 'directory of services hosted on mae.wtf'
}

export default function Services() {
  return (
    <div className='flex flex-col lg:flex-row justify-center gap-8 lg:mx-8'>
      <Contents>
        <ContentsOption href='#cobalt' name="cobalt"/>
        <ContentsOption href='#misq' name="Misq"/>
        <ContentsOption href='#blobmaker' name="Blob Maker"/>
        <ContentsOption href='#matrix' name="Matrix"/>
        <ContentsOption href='#disq' name="Disq"/>
      </Contents>
      <div className='flex items-center flex-col pt-8 flex-shrink'>
        <div className='max-w-[1024px] px-4 lg:px-0 space-y-8 mb-8'>
          <PageHeader title="💻 services">
            i host a couple of web services on this domain, here's a current list of them
          </PageHeader>

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
            <h2 className='text-6xl mb-4'>Misq</h2>
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
            <h2 className='text-4xl mb-4 font-bold'>Blob Maker</h2>
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
