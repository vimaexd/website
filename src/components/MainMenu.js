import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import './App.css';

class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
                <Link to="/test">
                    <button className="MainMenu-Options">Test</button>
                </Link>
            </div>
        )
    }
}

export default MainMenu;