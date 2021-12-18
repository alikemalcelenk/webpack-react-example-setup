import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import paths from './paths';

import Home from '@pages/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route element={<Home />} path={paths.HOME} />
    </Switch>
  </Router>
);

export default Routes;
