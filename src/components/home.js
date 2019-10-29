import React from 'react'
import Twemoji from 'react-twemoji';
import './App.css';
import './animate.css';
import logo from '../assets/strsft.png';

import MainMenu from './MainMenu'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <header className="App-header">

            {/* <img src={logo} className="Home-logo" alt="logo" /> */}
            
            <div className="Home-h1">
                <Twemoji options={{ className: 'emoji-rocket-h1' }}>
                <h1>Stringy Software 🚀</h1>
                <p className="Home-Tagline animated fadeInUp">Full site coming soon.</p>
                </Twemoji>
                
                {/* <MainMenu /> */}
            </div>
          </header>
        )
    }
}

export default Home;