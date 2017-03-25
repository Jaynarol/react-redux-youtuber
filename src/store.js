import { combineReducers } from 'redux'

export const initialStore = {
  test: ''
}

const rootReducer = combineReducers({
  test: () => null
})

export default rootReducer