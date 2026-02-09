'use client';
import React, { Fragment } from 'react'
import SideBlock from '@mae/components/feature/sideblocks/Block'
import {useLanyardWS} from 'use-lanyard';
import Image from "next/image";
import Link from 'next/link';

export default function LanyardBlock({id}: {id: `${bigint}`}) {
  const lanyard = useLanyardWS(id);
  if(!lanyard) return (
    <SideBlock title="⚠️ status server unreachable">
      <p className='text-sm text-center'>
        couldn't reach the status server ☹️
        <span className='h-4'></span>
        check if your browser + connection supports WebSockets
      </p>
    </SideBlock>
  );

  console.log(lanyard)

  const mediaProxyRegex = /mp:external\/.*?(http.*)/;
  const desktopMusicAppIds = [
    "409394531948298250", // musicbee
    "911790844204437504", // cider
    "1165957668758900787" // feishin
  ]

  const desktopMusicApp = lanyard.activities
    .filter(a => a.type == 0)
    .find(a => desktopMusicAppIds.includes(a.application_id!.toString()));

  return (
    <Fragment>
      {
        /* Online status*/
        lanyard.discord_status != 'offline' &&
        <SideBlock title="🟢 online">
        </SideBlock>
      }
      {
        /* Offline status*/
        lanyard.discord_status == 'offline' &&
        <SideBlock title="🌌 offline">
        </SideBlock>
      }
      {
        /* Spotify now playing */
        lanyard.spotify && 
        <SideBlock title="🎧 now playing">
          <div className='flex flex-row gap-2'>
            {
              lanyard.spotify.album_art_url &&
              <Image
                src={lanyard.spotify.album_art_url}
                alt="Album art"
                width={48}
                height={48}
                className='w-fit h-fit'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            }
            <div className="flex flex-col justify-center">
              <Link href={`https://open.spotify.com/track/${lanyard.spotify.track_id}`} className='text-white hover:underline'>
                <h2 className='text-sm font-medium'>{lanyard.spotify.song}</h2>
              </Link>
              <h3 className='text-xs'>{lanyard.spotify.artist.replace(/;/g, ",")}</h3>
            </div>
          </div>
        </SideBlock>
      }
      {
        /* Music App now playing */
        desktopMusicApp != null && 
        <SideBlock title="🎧 now playing">
          <div className='flex flex-row gap-3 p-1'>
            {
              desktopMusicApp.assets?.large_image && desktopMusicApp.assets?.large_image.startsWith("mp:external") &&
              <Image
                src={
                  desktopMusicApp.assets?.large_image
                  .match(mediaProxyRegex)![1]
                  .replace("https/", "https://")
                }
                alt="Album art"
                width={64}
                height={64}
                className='w-fit h-fit rounded-md'
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} 
                />
            }
            <div className="flex flex-col justify-center">
              <h2 className='text-sm font-medium'>{desktopMusicApp.details}</h2>
              <h3 className='text-xs'>{desktopMusicApp.state}</h3>
            </div>
          </div>
        </SideBlock>
      }
    </Fragment>
  );
}
