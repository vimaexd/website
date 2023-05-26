import React from 'react';
import discog from '@mae/data/discography.json';
import type { IDiscography } from '@mae/misc/discography/types';
import { groupReleasesByYear } from '@mae/misc/discography/utils';
import PageContainer from '@mae/components/layout/PageContainer';
import PageHeader from '@mae/components/layout/PageHeader';
import Image from 'next/image';
import ReleaseCard from '@mae/components/music/releaseCard';

export default function page() {
  const releases = (discog as IDiscography).releases;
  const groups = groupReleasesByYear(releases);

  return (
    <PageContainer>
      <PageHeader title="🎵 music">
        my discography of music i've made over the years. hover to see more info
      </PageHeader>
      {
        Object.keys(groups).map((year) => {
          const releasesInYear = groups[+year];
          return (
            <div>
              <h1 className='text-2xl font-bold mb-2'>{year}</h1>
              <div className='flex gap-8 flex-wrap'>
                {
                  releasesInYear.map((release) => (
                    <ReleaseCard release={release}/>
                  ))
                }
              </div>
            </div>
          )
        })
      }
    </PageContainer>
  )
}
