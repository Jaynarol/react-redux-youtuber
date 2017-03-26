import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import 'bootstrap/dist/css/bootstrap.css'
import LayoutMain from '../Layout/Main'
import { PageLogin, PageRegister, PageYoutuber } from '../Page'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <LayoutMain>
      <Switch>
        <Route exact path="/" component={PageYoutuber} />
        <Route path="/login" component={PageLogin} />
        <Route path="/register" component={PageRegister} />
      </Switch>
    </LayoutMain>
  </ConnectedRouter>
)

App.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

export default App
