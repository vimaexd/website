import React, { Component } from 'react'
import Release from '../resources/Release';
import releases from '../resources/releases';

import ReleaseComponent from '../components/ReleaseComponent';

interface MusicState {
    releaseString: JSX.Element[];
}

interface MusicProps {
    setPopup: (r: Release) => void;
}

export default class Music extends Component<MusicProps, MusicState> {
    constructor(props: any){
        super(props)

        this.state = {
            releaseString: []
        }

        this.setPopup.bind(this); 

        this.props.setPopup.bind(this);
    }

    setPopup = (r: Release) => {
        this.props.setPopup(r);
    }

    componentDidMount() {
        let releaseMap = releases.map((r: Release, i: number) => {
            return <ReleaseComponent key={i} release={r} setPopup={this.setPopup}/>
        })

        this.setState({releaseString: releaseMap})
    }

    render() {
        return (
            <div className="page_music gray">
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