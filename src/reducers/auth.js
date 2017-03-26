import { initialStore } from '../store'

const authReducer = (auth = initialStore.auth, action) => {
  switch (action.type) {
    default: {
      return auth
    }
  }
}

export default authReducer