import React from 'react'
import { Switch } from 'react-router-dom'
import AppRoute, { GUEST, MEMBER } from './AppRoute'
import { PageLogin, PageRegister, PageYoutuber } from '../components/Page'
import { LayoutMain } from '../components/Layout'


const Routes = () => (
  <LayoutMain>
    <Switch>

      {/* Free Zone*/}
      <AppRoute path="/" component={PageYoutuber} permit={[GUEST, MEMBER]} exact />
      {/* <AppRoute path="/watch/:video" component={() => <span>watch</span>} permit={[GUEST, MEMBER]} />*/}

      {/* Guest Zone*/}
      <AppRoute path="/login" component={PageLogin} permit={[GUEST]} />
      <AppRoute path="/register" component={PageRegister} permit={[GUEST]} />

      {/* Member Zone*/}
      {/* <AppRoute path="/setting" component={() => <span>setting</span>} permit={[MEMBER]} />*/}
      {/* <AppRoute path="/profile/:user" component={() => <span>profile</span>} permit={[MEMBER]} />*/}

    </Switch>
  </LayoutMain>
)

export default Routes