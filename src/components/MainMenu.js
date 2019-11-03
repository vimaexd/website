import React from 'react';
import { Link } from 'react-router-dom';
import './css/MainMenu.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter, faGithub, faSpotify, faTwitch, faYoutube} from '@fortawesome/free-brands-svg-icons';


library.add(
  faDiscord,
  faTwitter,
  faGithub,
  faSpotify,
  faTwitch,
  faYoutube
);

class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
                <div className="MainMenu-Buttons">
                    <a href="https://files.stringy.software">
                        <button className="MainMenu-Grad1">Files</button>
                    </a>
                    <Link to="/community">
                        <button className="MainMenu-Grad2">Community</button>
                    </Link>

                </div>
                <div className="MainMenu-Social">
                    <a href="https://discord.gg/E8Vf4ZR"><FontAwesomeIcon className="MainMenu-SocialButton S-discord" icon={faDiscord} size="2x"/></a> 
                    <a href="https://github.com/etstringy"><FontAwesomeIcon className="MainMenu-SocialButton S-github" icon={faGithub} size="2x"/></a>
                    <a href="https://twitter.com/stringyofficial"><FontAwesomeIcon className="MainMenu-SocialButton S-twitter" icon={faTwitter} size="2x"/></a>
                    <a href="https://open.spotify.com/artist/6Ruuwji9E40ngpwS0wwxTN"><FontAwesomeIcon className="MainMenu-SocialButton S-spotify" icon={faSpotify} size="2x"/></a>
                    <a href="https://twitch.tv/etstringy"><FontAwesomeIcon className="MainMenu-SocialButton S-twitch" icon={faTwitch} size="2x"/></a>
                    <a href="https://youtube.com/Stringy"><FontAwesomeIcon className="MainMenu-SocialButton S-youtube" icon={faYoutube} size="2x"/></a>
                </div>
            </div>

        )
    }
}

export default MainMenu;