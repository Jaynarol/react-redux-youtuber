/* eslint-disable global-require, no-underscore-dangle, import/no-extraneous-dependencies*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import rootReducer, { initialStore } from './store'
import App from './components/App'

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  initialStore,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
    )
  )
)
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default)
  })
  module.hot.accept('./store', () => {
    store.replaceReducer(require('./store').default)
  })
}
