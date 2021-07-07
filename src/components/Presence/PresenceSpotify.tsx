import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import fetch from 'node-fetch'
import Img from 'react-cool-img';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import { SpotifyData, Activity, PresencePropTypes, Timing } from './PresenceTypes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

function roundDown(floating: number) {
    var rounded = Math.round(floating * 100) / 100;
    return rounded;
}

function msFormat(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);

    if(minutes > -1 && Number(seconds) > -1) return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
    else return "0:00";
}

export default function Presence(props: PresencePropTypes) { 
    let [progress, setProgress] = React.useState<Timing>({s_progress: 0, s_left: "0:00", s_elapsed: "0:00"})

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs().valueOf()
    
            const total = roundDown(props.presence.spotify.timestamps.end - props.presence.spotify.timestamps.start)
            const elapsed = roundDown(now - props.presence.spotify.timestamps.start)
            const left = roundDown(props.presence.spotify.timestamps.end - now)
            const progress = roundDown(elapsed / total)
        
            if(progress === 1) return;
            setProgress({s_progress: progress, s_elapsed: msFormat(elapsed), s_left: msFormat(left)})
        }, 1000)

        return () => clearInterval(interval)
    }, [props.presence.spotify.timestamps.end, props.presence.spotify.timestamps.start])

    return (
        <div className="presence">
            <div className="presence_music">
                <div className="title sideby">
                        <FontAwesomeIcon size="2x" icon={props.icon} fixedWidth color="#1DB954"/>
                        <Tippy theme="disq" animation="discord-anim" content="Powered by Lanyard" placement="top">
                                <p className="lanyard">
                                    <a style={{color: "#000"}} href="https://github.com/Phineas/lanyard">
                                        <span className="material-icons">info</span>
                                    </a>
                                </p>
                        </Tippy>
                </div>
                <div className="presence_music_lower">
                    <Img 
                        style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                        className="presence_large_img"
                        debounce={1000} 
                        src={(props.presence.spotify.album_art_url) ? props.presence.spotify.album_art_url: ""}
                        alt="Album Art"> 
                    </Img>
                    <div className="info">
                        <p>
                            <a className="presence_songname" href={`https://open.spotify.com/track/${props.presence.spotify.track_id}`}>
                                <b>{props.presence.spotify.song}</b><br/>
                            </a>
                            by <b>{props.presence.spotify.artist.split(";").join(",")}</b><br/>
                            on <b>{props.presence.spotify.album}</b><br/>
                            <div className="sideby">
                                <b>{progress.s_elapsed} </b>
                                <progress value={progress.s_progress * 100} max="100"></progress>
                                <b>{progress.s_left} </b>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
