import React from 'react'
import Release from './releasefull';
import { notFound } from 'next/navigation';
import type { IDiscography } from '@mae/misc/discography/types';

import _discog from '@mae/data/discography-vimae.json';
import { resolveRelease } from '@mae/misc/discography/utils';

export async function generateMetadata(
  props: any,
) {
    const params = await props.params;
    const discog = (_discog as IDiscography)
    const unresolved = discog
        .releases
        .find(d => (d.slug == params.releaseId))

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
export default async function ReleaseWrapper(props: any) {
  const params = await props.params;
  const discog = (_discog as IDiscography)
  const unresolved = discog
    .releases
    .find(d => (d.slug == params.releaseId))

  if(!unresolved) {
    notFound()
  }

  const release = resolveRelease(unresolved, discog.tracks);

  return (
    <Release release={release}/>
  )
}
