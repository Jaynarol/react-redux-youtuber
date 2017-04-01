import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'

export const reducers = {
  auth,
  form
}

export const rootReducers = combineReducers(reducers)
