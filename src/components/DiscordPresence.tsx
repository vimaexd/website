import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import fetch from 'node-fetch'
import Img from 'react-cool-img';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

dayjs.extend(relativeTime)
library.add(fab)

interface PresenceState {
    presence: {
        listening_to_spotify: boolean;
        spotify: SpotifyData;
        activities: Array<Activity>
    }
    twitch: {
        is_live: boolean;
        thumbnail_url: string;
        game_name: string;
        title: string;
    }
    s_progress: number;
    s_elapsed: string;
    s_left: string;
}

interface Activity {
    name: string;
    type: number;
    state: string;
    details: string;
    assets: {
        small_text?: string;
        small_image?: string;
        large_text: string;
        large_image: string;
    }
    application_id: string;
}

interface SpotifyData {
    album_art_url: string;
    song: string;
    artist: string;
    album: string;
    timestamps: {
        start: number;
        end: number;
    };
    track_id: string;
}

export default class DiscordPresence extends React.Component<any, PresenceState> {
    constructor(props: any){
        super(props)

        this.state = {
            presence: {
                "spotify": {
                  "timestamps": { "start": 0, "end": 0 },
                  "song": "",
                  "artist": "",
                  "album_art_url": "",
                  "album": "",
                  "track_id": ""
                },
                "listening_to_spotify": true,
                "activities": [
                  {
                    "name": "",
                    "type": 0,
                    "state": "",
                    "details": "",
                    "assets": {
                      "large_text": "",
                      "large_image": ""
                    },
                    "application_id": "0"
                  }
                ],
            },
            twitch: {
                is_live: false,
                thumbnail_url: "",
                game_name: "",
                title: "" 
            },
            s_progress: 0,
            s_elapsed: "",
            s_left: ""
        }
    }

    // async componentDidUpdate(){
    //     if(this.state.presence.activities[0]){
    //         if(this.state.presence.activities[0].type === 2){
    //             let array = this.state.presence.activities
    //             array.splice(0, 1)
    //             this.setState({presence: {...this.state.presence, activities: array}})
    //         }
    //     }
    // }

    async componentDidMount(){
        // Fetch Twitch info
        const _twitch = await fetch("https://api.stringy.software/twitch/etstringy")
        const twitch = await _twitch.json()
        this.setState({twitch})

        // incase socket fails
        const _info = await fetch("https://api.lanyard.rest/v1/users/577743466940071949")
        const info = await _info.json()
        this.setState({presence: info.data})

        const ws = new WebSocket("wss://api.lanyard.rest/socket")

        function heartbeat(){
            ws.send(JSON.stringify({ op: 3 }))
            console.log("[Lanyard] ❤")
        }

        ws.addEventListener('open', (e) => {
            console.log("[Lanyard] socket created")
            ws.send(JSON.stringify({
                op: 2,
                d: {
                    subscribe_to_ids: ["577743466940071949"]
                }
            }))
        })

        ws.onmessage = ((e) => {
            const data = JSON.parse(e.data)
            switch(data.op.toString()) {
                case "0":
                    console.log("[Lanyard] presence recieved")

                    let presence;
                    if(data.t === "INIT_STATE") presence = data.d['577743466940071949'];
                    else if(data.t === "PRESENCE_UPDATE") presence = data.d;

                    this.setState({presence})
                    break;

                case "1":
                    // websocket heartbeat
                    heartbeat()
                    setInterval(heartbeat, data.d.heartbeat_interval)
                    break;
            }
        });

        // timing

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

        const updateTime = () => {
            if(this.state.presence.listening_to_spotify){
                const now = dayjs().valueOf()

                const total = roundDown(this.state.presence.spotify.timestamps.end - this.state.presence.spotify.timestamps.start)
                const elapsed = roundDown(now - this.state.presence.spotify.timestamps.start)
                const left = roundDown(this.state.presence.spotify.timestamps.end - now)
                const progress = roundDown(elapsed / total)

                if(progress === 1) return;

                this.setState({s_progress: progress, s_elapsed: msFormat(elapsed), s_left: msFormat(left)})
            }
        }
        updateTime()
        setInterval(updateTime, 1000)
    }

    render() {
        return (
            <div className="presence_page">
                <div className="presences">
                    {
                    (this.state.twitch.is_live) ?
                    <div className="presence">
                        <div className="presence_music">
                            <div className="title sideby">
                                    <FontAwesomeIcon size="2x" icon={['fab', 'twitch']} fixedWidth color="#9146ff"/>
                                    {/* <h2 style={{margin: 0}}>SPOTIFY</h2> */}
                            </div>
                            <div className="presence_music_lower">
                                <Img 
                                    // style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                    className="presence_large_img"
                                    debounce={1000} 
                                    src={this.state.twitch.thumbnail_url}
                                    alt="Album Art"> 
                                </Img>
                                <div className="info">
                                    <p>
                                        <b>Twitch</b><br/>
                                        <span className="short">{this.state.twitch.title}</span>
                                        Streaming <b>{this.state.twitch.game_name}</b><br/>
                                        <a href="https://twitch.tv/etstringy">
                                            <button className="str_button">Watch now</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                    }

                    {
                    (this.state.presence.listening_to_spotify) ?
                    <div className="presence">
                        <div className="presence_music">
                            <div className="title sideby">
                                    <FontAwesomeIcon size="2x" icon={['fab', 'spotify']} fixedWidth color="#1DB954"/>
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
                                    src={(this.state.presence.spotify.album_art_url) ? this.state.presence.spotify.album_art_url: ""}
                                    alt="Album Art"> 
                                </Img>
                                <div className="info">
                                    <p>
                                        <a className="presence_songname" href={`https://open.spotify.com/track/${this.state.presence.spotify.track_id}`}>
                                            <b>{this.state.presence.spotify.song}</b><br/>
                                        </a>
                                        by <b>{this.state.presence.spotify.artist.split(";").join(",")}</b><br/>
                                        on <b>{this.state.presence.spotify.album}</b><br/>
                                        <div className="sideby">
                                            <b>{this.state.s_elapsed} </b>
                                            <progress value={this.state.s_progress * 100} max="100"></progress>
                                            <b>{this.state.s_left} </b>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                    }
                    {
                    (this.state.presence.activities.filter(a => a.type !== 2)[0]) ?
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
                                    (this.state.presence.activities.filter(a => a.type !== 2)[0].assets.large_image) ?
                                    <Img 
                                        // style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                        className="presence_large_img"
                                        debounce={1000} 
                                        src={`https://cdn.discordapp.com/app-assets/${this.state.presence.activities.filter(a => a.type !== 2)[0].application_id}/${this.state.presence.activities.filter(a => a.type !== 2)[0].assets.large_image}`}
                                        alt="Album Art">
                                    </Img> : ""
                                }
                                {
                                    (this.state.presence.activities.filter(a => a.type !== 2)[0].assets.small_image) ?
                                    <div style={{position: "relative", width: 0, height: 0}}>
                                        <Img 
                                            style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                            className="presence_small_img"
                                            debounce={1000} 
                                            src={`https://cdn.discordapp.com/app-assets/${this.state.presence.activities.filter(a => a.type !== 2)[0].application_id}/${this.state.presence.activities.filter(a => a.type !== 2)[0].assets.small_image}`}
                                            alt="Album Art">
                                        </Img>
                                    </div> : ""
                                }
                                <div className="info">
                                    <p>
                                        <span><b>{this.state.presence.activities.filter(a => a.type !== 2)[0].name}</b><br/></span>
                                        <span>{this.state.presence.activities.filter(a => a.type !== 2)[0].state}<br/></span>
                                        <span>{this.state.presence.activities.filter(a => a.type !== 2)[0].details}<br/></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                    }
                </div>
            </div>
        )
    }

}