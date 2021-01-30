import React from 'react';
import { Route, Switch } from 'react-router-dom';

import index from './pages/main';
import music from './pages/music';

function Routes() {
  return (
      <Switch>
        <Route path='/' component={index} exact />
        <Route path='/music' component={music} exact />
      </Switch>
  );
}

export default Routes;
