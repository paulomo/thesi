import React from "react";
import { Router, Switch, Redirect, Route } from 'react-router';
import { createBrowserHistory, History } from 'history';
import {
  LandingRoutes,
} from './RouteEnum';
import { RouteWithLayout } from './RouteWithLayout';
import { PlainLayout } from '../layout';
import { LandingPage, ThankYou } from "../pages";


export const Routes = () => {

  const history: History = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        {/* <Redirect exact from={NonAuthRoutes.base} to={NonAuthRoutes.welcome} /> */}
        <Route
          exact
          path={LandingRoutes.base}
          render={() => <Redirect to={LandingRoutes.leads} />}
        />

        {/* COMING SOON */}
        <RouteWithLayout
          Layout={PlainLayout}
          Component={LandingPage}
          path={LandingRoutes.leads}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
        <RouteWithLayout
          Layout={PlainLayout}
          Component={ThankYou}
          path={LandingRoutes.thankyou}
          exact={true}
          isAuthRequired={false}
          fallback={<div> Loading... </div>}
        />
      </Switch>
    </Router>
  );
};
