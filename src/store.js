import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export const initialStore = {}

const rootReducer = combineReducers({
  form
})

export default rootReducer