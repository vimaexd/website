import React, { Component } from 'react'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

interface ButtonProps {
    href: string;
    icon: IconName;
}

export default class StringyButton extends Component<ButtonProps> {
    render() {
        return (
            <a href={this.props.href}>
                <FontAwesomeIcon className={"icon brand-icons " + this.props.icon} icon={['fab', this.props.icon]} fixedWidth/>
            </a>
        )
    }
}
