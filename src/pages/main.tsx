import React, { Component, ReactPropTypes } from "react";

import Music from './music';
import About from './about';
import Websites from './websites';

import Popup from '../components/Popup';
import Curtain from '../components/Curtain';
import Footer from '../components/Footer';

import releases from '../resources/releases';
import Release from '../resources/Release';
import Funnies from '../resources/Funnies';

import Wave from '../assets/wave.svg';
import Wave2 from '../assets/wave2.svg';
import Wave3 from '../assets/wave3.svg';
import "../css/index.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

interface MainState {
  showPopup: boolean;
  popupData: Release;
}

class main extends Component<ReactPropTypes, MainState> {
  constructor(props: any){
    super(props)

    this.state = {
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

  render() {
    return (
      <main> 
        {(this.state.showPopup) ? <Popup data={this.state.popupData}/> : void(0)}
        {(this.state.showPopup) ? <Curtain hide={this.hidePopup}/> : void(0)}

        <TopPage/>
        <img draggable={false} src={Wave} alt="wave" style={{display: "block"}}></img>
        <About/>
        <img draggable={false} src={Wave2} alt="wave" style={{display: "block"}}></img>
        <Music setPopup={this.setPopup}/>
        <img draggable={false} src={Wave3} alt="wave" style={{display: "block"}}></img>
        <Websites/>
        
        <Footer/>
      </main>
    );
  }
}

function TopPage() {
  let [funny, setFunny] = React.useState("")

  React.useEffect(() => {
    let the_funny = Math.floor(Math.random() * Funnies.length);
    setFunny(Funnies[the_funny])
  }, [])
  
  return(
    <main className="page_top">
      <div className="center_container">
        <div className="main_container">
          <h1 className="brand_text">Stringy</h1>
        </div>
        <p className="aboutme">
          Hi, I'm Stringy. A 14 year old programmer, and music producer.<br/>
          <i>"{funny}"</i>
        </p>
      </div>

      <FontAwesomeIcon className="scrolldown" size="2x" icon={['fas', 'chevron-down']}/>
      
    </main>
  )
}

export default main;
