import React from 'react'
import Release, { IRelease } from './release';
import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { notFound } from 'next/navigation';

import discog from '../../../data/discography.json';

interface Props {
  release: IRelease;
}
export default function ReleaseWrapper(props: any) {
  const release = (discog as { releases: IRelease[] }).releases.find(d => (d.slug == props.params.releaseId))
  if(!release) {
    notFound()
  }

  return (
    <Release release={release!}/>
  )
}