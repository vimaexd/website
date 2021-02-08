import React, { Component } from 'react';

interface CurtainProps {
    hide: () => void;
}

export default class Curtain extends Component<CurtainProps> {
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