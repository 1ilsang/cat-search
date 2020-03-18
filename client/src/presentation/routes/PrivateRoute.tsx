import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isDevMode } from 'utils/Authenticate';
import { TPrivateRoute } from 'store/_types/Route';

const PrivateRoute = ({ component, ...rest }: TPrivateRoute) => {
  return isDevMode() ? (
    <Route {...rest} component={component} />
  ) : (
    <Route {...rest} component={() => <Redirect to="/req-dev" />} />
  );
};

export default PrivateRoute;
