import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (auth = initialStore.auth, action) => {
  switch (action.type) {
    case TYPE.AUTH.SIGNIN: {
      return {
        email: action.payload.email,
        token: action.payload.token
      }
    }
    default: {
      return auth
    }
  }
}