import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageLogin, PageRegister, PageYoutuber } from '../Page'
import { LayoutMain } from '../Layout'

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
