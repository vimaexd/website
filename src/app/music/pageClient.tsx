'use client';
import React, { useState, Fragment, Suspense, useEffect } from 'react';
import PageHeader from '@mae/components/layout/PageHeader';
import { useRecoilState } from 'recoil';
import { discography, DiscographyGroup, DiscographyView } from '@mae/store/discography';
import { IDiscography, IUnresolvedRelease } from '@mae/misc/discography/types';
import discog from '@mae/data/discography.json'
import { groupReleasesByKey, groupReleasesByYear } from '@mae/misc/discography/utils';
import ReleaseCard from '@mae/components/music/releaseCard';
import ReleaseRow from '@mae/components/music/ReleaseRow';

export default function MusicPageClient() {
  const [discogStore, setDiscography] = useRecoilState(discography);
  const {group, view} = discogStore;

  const releases = (discog as IDiscography).releases;

  const getGroupings = () => {
    switch(group) {
      case DiscographyGroup.YEAR:
        return groupReleasesByKey(releases, "year");

      case DiscographyGroup.TYPE:
        let groupedByType = groupReleasesByKey(releases, "type");
        let typeOrder = ["Album", "EP", "Single"]

        const ordered = Object
          .keys(groupedByType)
          .sort((a: string, b: string) => {
            const posA = typeOrder.indexOf(a) || typeOrder.length
            const posB = typeOrder.indexOf(b) || typeOrder.length

            return posB - posA
          })
          .reduce((obj: any, title: string) => {
            let temp = {
              ...obj
            }
            temp[title] = groupedByType[title];
            return temp
          }, {})

        return ordered

      default:
        return {
          "All": releases
        }
    }
  }
  
  console.log(getGroupings())

  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <PageHeader title="💿 discography"></PageHeader>

        <div className="flex flex-row items-center gap-4 overflow-x-auto">
          <div className="space-x-2 text-sm flex">
            <label
              htmlFor="group"
              className="flex items-center gap-1 flex-shrink-0"
            >
              <i className="bx bxs-category bx-xs" />
              Group by
            </label>
            <select
              name="group"
              id="cars"
              placeholder="Group by"
              className="bg-ctp-surface0 p-2 rounded-lg"
              defaultValue={group}
              onChange={(e: any) =>
                setDiscography({ ...discogStore, group: e.target.value })
              }
            >
              <option value="none">None</option>
              <option value="year">Release Year</option>
              <option value="type">Release Type</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-ctp-surface0 p-2 rounded-lg flex items-center justify-center h-fit"
              onClick={() =>
                setDiscography({
                  ...discogStore,
                  view: DiscographyView.GRIDLIST,
                })
              }
            >
              <i className="bx bxs-grid-alt bx-sm"></i>
            </button>
            <button
              className="bg-ctp-surface0 p-2 rounded-lg flex items-center justify-center h-fit"
              onClick={() =>
                setDiscography({ ...discogStore, view: DiscographyView.ROW })
              }
            >
              <i className="bx bxs-objects-horizontal-left bx-sm"></i>
            </button>
          </div>
        </div>
      </div>

      {Object.keys(getGroupings())
        .reverse()
        .map((groupTitle) => {
          const groupContents = getGroupings()[groupTitle];
          return (
            <div>
              <h2 className="text-2xl font-bold mb-2">{groupTitle}</h2>
              <div className="flex gap-4 flex-wrap">
                {groupContents.map((release: IUnresolvedRelease) => (
                  <Suspense
                    fallback={
                      <div className="w-[128px] h-[128px] bg-gray-500 animate-pulse"></div>
                    }
                  >
                    {view == DiscographyView.GRIDLIST && (
                      <ReleaseCard release={release} />
                    )}
                    {view == DiscographyView.ROW && (
                      <ReleaseRow release={release} />
                    )}
                  </Suspense>
                ))}
              </div>
            </div>
          );
        })}
    </Fragment>
  );
}
