import React from 'react'
import StringyButton from '../components/StringyButton';


export default function socials() {
    return (
        <div className="page_socials">
            <div className="music_container">
                <div className="button_container">
                    <StringyButton href="https://youtube.com/Stringy" icon="youtube"/>
                    <StringyButton href="https://discord.gg/A8A52G2" icon="discord"/>
                    <StringyButton href="https://github.com/etstringy" icon="github"/>
                    <StringyButton href="https://twitter.com/etstringy" icon="twitter"/>
                    <StringyButton href="https://twitch.tv/etstringy" icon="twitch"/>
                </div>
            </div>
        </div>
    )
}
