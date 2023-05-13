import React from 'react'
import Release from './release';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { notFound } from 'next/navigation';
import type { IDiscography, IResolvedRelease } from '@mae/misc/discography/types';

import _discog from '@mae/data/discography.json';
import { resolveRelease } from '@mae/misc/discography/utils';

// wrapper fetches the release from the json and then supplies it to the component
export default function ReleaseWrapper(props: any) {
  const discog = (_discog as IDiscography)
  let unresolved = discog
    .releases
    .find(d => (d.slug == props.params.releaseId))

  if(!unresolved) {
    notFound()
  }

  const release = resolveRelease(unresolved, discog.tracks);

  return (
    <Release release={release}/>
  )
}