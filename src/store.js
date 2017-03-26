import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './reducers/auth'

export const initialStore = {
  auth: {}
}

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

export default rootReducer