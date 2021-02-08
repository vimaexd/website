import React, { Component } from 'react';

interface TrackTextProps { title: string; }

export default class TrackText extends Component<TrackTextProps> {
    render() {
        return (
            <div className="popup_tracktext">
                <p>{this.props.title}</p>
            </div>
        )
    }
}
