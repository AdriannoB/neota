import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { ChartView, TableView } from './pages'
import { routerConfig } from './routing'
import { Header } from './header'

export const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={routerConfig.TABLEVIEW.routerPath} component={TableView} />
      <Route exact path={routerConfig.CHARTVIEW.routerPath} component={ChartView} />
      <Redirect to={routerConfig.TABLEVIEW.routerPath} />
    </Switch>
  </>
)
