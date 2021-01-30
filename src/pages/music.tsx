import React, { Component, ReactPropTypes } from 'react'
import Release from '../resources/Release';
import releases from '../resources/releases';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { useColor } from 'color-thief-react'

library.add(fab)

interface MusicState {
    releaseString: JSX.Element[];
    showPopup: boolean;
    popupData: Release;
}

export default class Music extends Component<ReactPropTypes, MusicState> {
    constructor(props: ReactPropTypes){
        super(props)

        this.state = {
            releaseString: [],
            showPopup: false,
            popupData: releases[0]
        }
        this.setPopup.bind(this); 
        this.hidePopup.bind(this); 
    }

    setPopup = (r: Release) => {
        this.setState({
            popupData: r,
            showPopup: true
        })
    }

    hidePopup = () => {
        this.setState({
            showPopup: false
        })
    }

    componentDidMount() {
        let releaseMap = releases.map((r: Release) => {
            return <ReleaseComponent release={r} setPopup={this.setPopup}/>
        })

        this.setState({releaseString: releaseMap})
    }

    render() {
        return (
            <div className="page_container">
                {(this.state.showPopup) ? <Popup data={this.state.popupData}/> : void(0)}
                {(this.state.showPopup) ? <Curtain hide={this.hidePopup}/> : void(0)}
                <a href="/" className="a_uncringe">
                    <span className="back_button icon material-icons">arrow_back</span>
                </a>
                <div className="music_container">
                    <h1 className="page_title">Music</h1>
                    <div id="showcase" className="releases">
                        {this.state.releaseString}
                    </div>
                </div>
            </div>
        )
    }
}

interface CurtainProps {
    hide: () => void;
}

class Curtain extends Component<CurtainProps> {
    constructor(props: CurtainProps){
        super(props)

        this.props.hide.bind(this);
    }
    render() {
        return(
            <div className="curtain" onClick={this.props.hide}></div>
        )
    }
}

interface PopupProps {
    data: Release;
}

interface PopupState {
    colorData: {
        color: string;
    }
}

class Popup extends Component<PopupProps> {

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

interface ReleaseComponentProps {
    release: Release;
    setPopup: (r: Release) => void;
}

class ReleaseComponent extends Component<ReleaseComponentProps> {
    constructor(props: ReleaseComponentProps){
        super(props);

        this.props.setPopup.bind(this);
    }

    render(){
        return(
            <div className="release">
                <img onClick={() => this.props.setPopup(this.props.release)} src={require(`../assets/albumart/${this.props.release.files.artwork}`)} alt={this.props.release.title}></img>
            </div>
        )
    }
}

interface TrackTextProps {
    title: string;
}

class TrackText extends Component<TrackTextProps> {
    render() {
        return (
            <div className="popup_tracktext">
                <p>{this.props.title}</p>
            </div>
        )
    }
}
