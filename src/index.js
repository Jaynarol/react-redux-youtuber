/* eslint-disable global-require, no-underscore-dangle, import/no-extraneous-dependencies*/
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import { throttle, merge } from 'lodash'
import { loadState, saveState } from './utils/LocalStorage'
import rootReducer, { initialStore } from './store'
import App from './components/App'

const preloadedState = merge(initialStore, loadState())
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
)

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth
  })
}, 1000))

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
