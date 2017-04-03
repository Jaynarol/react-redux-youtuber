import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageLogin, PageRegister, PageYoutuber } from '../components/Page'
import { LayoutMain } from '../components/Layout'

const RouteMain = () => (
  <LayoutMain>
    <Switch>
      <Route exact path="/" component={PageYoutuber} />
      <Route path="/login" component={PageLogin} />
      <Route path="/register" component={PageRegister} />
    </Switch>
  </LayoutMain>
)

export default RouteMain
