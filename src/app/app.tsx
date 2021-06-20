import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Dashboard } from "./pages";
import { routerConfig } from "./routing";
import { Header } from "./header";

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={routerConfig.BASE.routerPath} component={Dashboard} />
      <Redirect to={routerConfig.BASE.routerPath} />
    </Switch>
  </>
);
