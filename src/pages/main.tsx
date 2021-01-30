import React, { Component, ReactPropTypes } from "react";

import StringyLogo from '../assets/stringyglow.png';
import "../css/index.css";

class main extends Component<ReactPropTypes> {
  render() {
    return (
      <main>
        <div className="particles"></div>
        <div className="center_container">
          <div className="main_container">
            <img className="logo" src={StringyLogo} alt="stringy logo"/>
            <h1 className="brand_text">Stringy</h1>
          </div>
          <p className="aboutme">
            Hi, I'm Stringy. A 14 year old programmer, and music producer.<br/>
            dummy text lololololololololo
          </p>
          <div className="button_container">
            <a href="/music">
              <span className="icon material-icons">music_note</span>
            </a>
            <a href="/projects">
              <span className="icon material-icons">code</span>
            </a>
            <a href="/about">
              <span className="icon material-icons">info</span>
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default main;
