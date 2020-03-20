import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {
  HomeView,
  NotFoundView,
  CatSearchView,
  DevView,
  SetDevView,
} from 'presentation/view/index';

const Routes: React.SFC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={HomeView} />
        <Route path="/search" component={CatSearchView} />
        <PrivateRoute path="/dev" component={DevView} />
        <Route path="/req-dev" component={SetDevView} />
        <Route component={NotFoundView} />
      </Switch>
    </Router>
  );
};

export default Routes;
