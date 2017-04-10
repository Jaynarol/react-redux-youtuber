/* eslint-disable import/no-extraneous-dependencies,no-underscore-dangle,global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { throttle, merge } from 'lodash'
import { loadState, saveState } from './utils/LocalStorage'
import { rootReducers } from './reducers'
import { initialStore } from './store'
import Routes from './routes'

const preloadedState = merge(initialStore, loadState())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth
  })
}, 1000))

const basename = window.location.hostname.includes('github.io') ? `/${window.location.pathname.split('/')[1]}` : '/'
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router basename={basename} >
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

render(Routes)
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(require('./routes').default)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').rootReducers)
  })
}