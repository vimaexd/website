import React, { Component } from "react";

import Bodge from '../assets/bodge.png';

class main extends Component {
  render() {
    return (
        <main className="page_top">
            <div className="center_container">
                <p className="aboutme">
                    404: Not found. <br/> Here's Bodge in the meantime.
                </p>
                <img src={Bodge} alt="bodge"/><br/>
            </div>
        </main>
    );
  }
}

export default main;
