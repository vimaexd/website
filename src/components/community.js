import React from 'react'

import './App.css';
import './css/community.css'

class Community extends React.Component {
    render() {
        return(
            <div className="Proj">
                <h1 className="Proj-MainText">Community</h1>
                <div className="Proj-Boxes">
                    <div className="Proj-Box-1 Proj-Box-Color1">
                        <h1>IdiotCon Website</h1>
                        <p className="box-desc">A website for the IdiotCon 2019 event for the Idiot Games minecraft server</p>
                        <a href="/community/idiotcon"><button className="goBtn">Go</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;