import React, { Component } from 'react'
import Img from 'react-cool-img';
import Twemoji from 'react-twemoji';

import Socials from './socials';

import StringyImages1 from '../assets/misc/MiscStringy1.jpg'
import StringyImages2 from '../assets/misc/MiscStringy2.jpg'
import BiFlag from '../assets/bi.svg'

interface MusicState {
    funny: string;
}

export default class About extends Component<any, MusicState> {
    render() {
        return (
            <div>
                <div className="about_container music_container">
                    <div className="about_image_text">
                        <div className="about_left">
                            <Img 
                                style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                debounce={1000} 
                                src={StringyImages1} 
                                alt="Stringy doing">
                            </Img>
                            <Img 
                                onMouseOver={() => this.setState({funny: "WEEEEEEEEEEEEE"})}
                                onMouseLeave={() => this.setState({funny: ""})}
                                style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                                debounce={1000} 
                                src={StringyImages2} 
                                alt="Stringy doing">
                            </Img>
                        </div>
                        <div className="about_right">
                            <h1 className="page_title">About me</h1>
                            <Twemoji options={{ className: 'twemoji', ext: '.svg', size: "svg" }}>
                                <p>
                                    My name is Edward and I live in the UK <span role="img" aria-label="UK Flag">🇬🇧</span> and am Bisexual <Bi/>.
                                    I like to do Programming, Music Production and Streaming as hobbies.
                                    I mainly program in languages such as TypeScript, JavaScript and CSS, but other times I might dive into Python, Java or C#.
                                    On the Music Production side of things, I like to use FL Studio 20 as my DAW but I used to use Ableton Live 9 Lite. I try to make
                                    Electronic music using plugins like Serum and Vital.
                                    And I stream on Twitch at <span style={{color: "#9146ff"}}>twitch.tv/etstringy</span>. Come stop by if I'm live!
                                </p>
                                <p></p>
                                <Socials/>
                            </Twemoji>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function Bi() {
    return (
        <img style={{ borderRadius:"5px" }} className="twemoji" src={BiFlag} alt="Bisexual"></img>
    )
}
