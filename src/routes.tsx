import React from 'react';
import { Route, Switch } from 'react-router-dom';

import index from './pages/main';
import NotFound from './pages/404';

function Routes() {
  return (
      <Switch>
        <Route path='/' component={index} exact />
        <Route component={NotFound} />
      </Switch>
  );
}

export default Routes;
