import React from 'react'
import fetch from 'node-fetch'
import * as _ from 'lodash';

import PresenceSpotify from './PresenceSpotify';
import PresenceDiscord from './PresenceDiscord';
import PresenceTwitch, { TwitchData } from './PresenceTwitch'

import { SpotifyData, Activity } from './PresenceTypes';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';


interface PresenceState {
    presence: {
        listening_to_spotify: boolean;
        spotify: SpotifyData;
        activities: Array<Activity>
    }
    twitch: TwitchData;
    s_progress: number;
    s_elapsed: string;
    s_left: string;
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
                      "large_text": "a",
                      "large_image": "ay"
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

                    if(!_.isEqual(presence, this.state.presence)){
                        this.setState({presence})
                    }
                    break;

                case "1":
                    // websocket heartbeat
                    heartbeat()
                    setInterval(heartbeat, data.d.heartbeat_interval)
                    break;
            }
        });

        console.log(this.state.presence.activities.filter(a => a.type !== 2 && a.type !== 4))
    }

    render() {
        return (
            <div className="presence_page">
                <div className="presences">
                    {(this.state.twitch.is_live) ? <PresenceTwitch twitchData={this.state.twitch} />: ""}

                    {(this.state.presence.listening_to_spotify) ? <PresenceSpotify icon={["fab", "spotify"]} presence={this.state.presence}/>: ""}
                    <PresenceDiscord icon={["fab", "discord"]} presence={this.state.presence}/>
                </div>
            </div>
        )
    }

}