import React from 'react';
import { Route, Switch } from 'react-router-dom';

import index from './pages/main';
import NiceTry from './components/DaluxGlare';

function Routes() {
  return (
      <Switch>
        <Route path='/' component={index} exact />

        {/* haha, nice try ;) */}
        <Route path="/audio/600.mp3" component={NiceTry} exact/>
      </Switch>
  );
}

export default Routes;
