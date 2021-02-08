import React, { Component } from 'react';
import Release from '../resources/Release';
import TrackText from './TrackText'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

interface PopupProps {
    data: Release;
}

interface PopupState {
    colorData: {
        color: string;
    }
}

export default class Popup extends Component<PopupProps> {

    render(){
        return(
            <div className="popup">
                <div className="popup_left">
                    <img src={require(`../assets/albumart/${this.props.data?.files.artwork}`)} alt="500"></img>
                </div>
                <div className="popup_content">
                    <h1>{this.props.data.title}</h1>

                    <p className="popup_tracklist"><b>Description:</b><br/></p>
                    <TrackText title={this.props.data.description}/>

                    <p>
                        <b>Released:</b><br/> 
                        {this.props.data.getDayJs().format('DD/MM/YYYY')}
                    </p>
                    <p className="popup_tracklist">
                        <b>Track List:</b><br/>
                    </p>
                    {
                        this.props.data.tracks.map((t: string) => {
                            return <TrackText title={t}/>
                        })
                    }

                    <div className="popup_buttons">
                        {
                            (this.props.data.youtubeUrl) ? 
                            <a href={this.props.data.youtubeUrl}>
                                <button className="yt_btn"><FontAwesomeIcon className="yt_btn_inner btn_icon" icon={['fab', 'youtube']}/></button>
                            </a>
                            : void(0)
                        }
                        <a href={`/audio/${this.props.data.files.audio}`} download>
                            <button className="grad_btn">Download</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
