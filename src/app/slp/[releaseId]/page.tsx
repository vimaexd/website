import React from 'react'
import Release from './releasefull';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { notFound } from 'next/navigation';
import type { IDiscography, IResolvedRelease } from '@mae/misc/discography/types';

import _discog from '@mae/data/discography-vimae.json';
import { resolveRelease } from '@mae/misc/discography/utils';

export async function generateMetadata(
  props: any,
  parent: any
) {
  const discog = (_discog as IDiscography)
  let unresolved = discog
    .releases
    .find(d => (d.slug == /* @next-codemod-error 'props.params' is accessed without awaiting.*/
  props.params.releaseId))

  if(!unresolved)
    return {}
 
  const release = resolveRelease(unresolved, discog.tracks);

  return {
    title: `${release.title} - ${release.type}`,
    description: `${release.tracks.length} tracks • ${release.year}`,
    openGraph: {
      images: [release.album_art],
    },
  }
}

// wrapper fetches the release from the json and then supplies it to the component
export default function ReleaseWrapper(props: any) {
  const discog = (_discog as IDiscography)
  let unresolved = discog
    .releases
    .find(d => (d.slug == /* @next-codemod-error 'props.params' is accessed without awaiting.*/
  props.params.releaseId))

  if(!unresolved) {
    notFound()
  }

  const release = resolveRelease(unresolved, discog.tracks);

  return (
    <Release release={release}/>
  )
}