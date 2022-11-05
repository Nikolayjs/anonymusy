import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../router/routes';

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
