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

  const mediaProxyRegex = /mp:external\/[^\/]*\/(.*)/;
  const musicbee = lanyard.activities.find(a => a.application_id == "409394531948298250");

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
        /* MusicBee now playing */
        musicbee != null && 
        <SideBlock title="🎧 now playing">
          <div className='flex flex-row gap-2'>
            {
              musicbee.assets?.large_image && musicbee.assets?.large_image.startsWith("mp:external") &&
              <Image
                src={musicbee.assets?.large_image.match(mediaProxyRegex)![1].replace("https/", "https://")}
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
              <h2 className='text-sm font-medium'>{musicbee.details?.split("-")[1]}</h2>
              <h3 className='text-xs'>{musicbee.details?.split("-")[0]}</h3>
            </div>
          </div>
        </SideBlock>
      }
    </Fragment>
  );
}
