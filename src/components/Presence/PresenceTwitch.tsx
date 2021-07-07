import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Img from 'react-cool-img';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

dayjs.extend(relativeTime)
library.add(fab)

export interface TwitchData {
  is_live: boolean;
  thumbnail_url: string;
  game_name: string;
  title: string;
}

export default function PresenceTwitch(props: {twitchData: TwitchData}) {
  return (
    <div className="presence">
        <div className="presence_music">
            <div className="title sideby">
                    <FontAwesomeIcon size="2x" icon={['fab', 'twitch']} fixedWidth color="#9146ff"/>
            </div>
            <div className="presence_music_lower">
                <Img 
                    className="presence_large_img"
                    debounce={1000} 
                    src={props.twitchData.thumbnail_url}
                    alt="Album Art"> 
                </Img>
                <div className="info">
                    <p>
                        <b>Twitch</b><br/>
                        <span className="short">{props.twitchData.title}</span>
                        Streaming <b>{props.twitchData.game_name}</b><br/>
                        <a href="https://twitch.tv/etstringy">
                            <button className="str_button">Watch now</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
