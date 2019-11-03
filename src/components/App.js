import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home'
import Community from './community'
import IdiotCon from './idiotcon';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/community/idiotcon" component={IdiotCon} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
