import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
