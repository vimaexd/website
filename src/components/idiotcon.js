import React from 'react'
import Countdown from 'react-countdown-now';
import './css/ic.css'

class IdiotCon extends React.Component {
    render() {
        return (
            <header className="idiotcon">
                <center>
                    <h1>IdiotCon 2019</h1>
                    <p>23-24th November 2019</p>
                    <h1 className="timer"><Countdown date={new Date('2019-11-23T18:00:00')} /></h1>
                </center>
            </header>
        )
    }
}

export default IdiotCon;