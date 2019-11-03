import React from 'react'
import Twemoji from 'react-twemoji';
import fetch from 'node-fetch'
import './App.css';
import './css/animate.css';
import logo from '../assets/strsft.png';

import MainMenu from './MainMenu'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {tagline:"Software that's Stringy."}
    }

    componentDidMount() {
       fetch("https://api.stringy.software/randomquote")
        .then(res => res.text())
        .then(text => this.setState({tagline: text})) 
    }
    render() {
        return (
        <header className="App-header">

            {/* <img src={logo} className="Home-logo" alt="logo" /> */}
            
            <div className="Home-h1">
                <Twemoji options={{ className: 'emoji-rocket-h1' }}>
                <h1>Stringy Software 🚀</h1>
                <p className="Home-Tagline animated fadeInUp">{this.state.tagline}</p>
                </Twemoji>
                
                <MainMenu />
            </div>
          </header>
        )
    }
}

export default Home;