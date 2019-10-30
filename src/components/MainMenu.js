import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import './App.css';

class MainMenu extends React.Component {
    render() {
        return (
            <div className="MainMenu">
                <Link to="/projects">
                    <button className="MainMenu-Grad1">Projects</button>
                </Link>
                <Link to="/music">
                    <button className="MainMenu-Grad2">Music</button>
                </Link>
            </div>
        )
    }
}

export default MainMenu;