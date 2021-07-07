import React from 'react'
import Img from 'react-cool-img';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import { SpotifyData, Activity, PresencePropTypes, Timing } from './PresenceTypes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function Presence(props: PresencePropTypes) {
    let activities = props.presence.activities
        // .filter(a => a.type !== 4)
        .filter(a => a.type !== 2) // spotify but discord's stinky version

    if(activities.length === 0) return <div></div>
    return (
        <div className="presences" style={{marginTop: 0}}>
            {
                activities.map(a => (
                    <DiscordActivity presence={a} />
                ))
            }
        </div>
    )
}

function DiscordActivity(props: {presence: Activity}){
    return (
        <div className="presence">
            <div className="presence_music">
                <div className="title sideby">
                        <FontAwesomeIcon size="2x" icon={['fab', 'discord']} fixedWidth color="#7289da"/>
                        <Tippy theme="disq" animation="discord-anim" content="Powered by Lanyard" placement="top">
                                <p className="lanyard">
                                    <a style={{color: "#000"}} href="https://github.com/Phineas/lanyard">
                                        <span className="material-icons">info</span>
                                    </a>
                                </p>
                        </Tippy>
                </div>
                <div className="presence_music_lower">
                    {
                        (props.presence.assets && props.presence.assets.large_image) &&
                        <Img 
                            // style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                            className="presence_large_img"
                            debounce={1000} 
                            src={`https://cdn.discordapp.com/app-assets/${props.presence.application_id}/${props.presence.assets.large_image}`}
                            alt="Album Art">
                        </Img>
                    }
                    {
                        (props.presence.assets && props.presence.assets.small_image) &&
                        <div style={{position: "relative", width: 0, height: 0}}>
                            <Img 
                                style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                className="presence_small_img"
                                debounce={1000} 
                                src={`https://cdn.discordapp.com/app-assets/${props.presence.application_id}/${props.presence.assets.small_image}`}
                                alt="Album Art">
                            </Img>
                        </div>
                    }
                    <div className="info">
                        <p>
                            <span><b>{props.presence.name}</b><br/></span>
                            <span>{props.presence.state}<br/></span>
                            <span>{props.presence.details}<br/></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}