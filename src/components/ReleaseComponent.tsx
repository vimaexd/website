import React, { Component } from 'react'
import Img from 'react-cool-img';

import Release from '../resources/Release';

interface ReleaseComponentProps {
    release: Release;
    setPopup: (r: Release) => void;
}

export default class ReleaseComponent extends Component<ReleaseComponentProps> {
    constructor(props: ReleaseComponentProps){
        super(props);

        this.props.setPopup.bind(this);
    }

    render(){
        return(
            <div className="release">
                <Img 
                    style={{backgroundColor: '#d4d4d4', animation: 'imageload 1s ease infinite'}}
                    debounce={1000} 
                    onClick={() => this.props.setPopup(this.props.release)} 
                    src={require(`../assets/albumart/${this.props.release.files.artwork}`)} 
                    alt={this.props.release.title}>
                </Img>
            </div>
        )
    }
}