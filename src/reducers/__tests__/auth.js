import authReducer from '../auth'
import TYPE from '../../actions/types'
import { initialStore } from '../../store'

describe('Auth Reducer', () => {
  it(TYPE.AUTH.SIGNIN, () => {
    const currentState = {
      email: '',
      token: ''
    }
    const nextState = {
      email: 'some@email.com',
      token: 'sometoken'
    }
    const receiveState = authReducer(currentState, {
      type: TYPE.AUTH.SIGNIN,
      payload: nextState
    })

    expect(receiveState).toEqual(nextState)
    expect(receiveState).not.toBe(nextState)
    expect(receiveState).not.toBe(currentState)
  })

  it('initial', () => {
    const receiveState = authReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.auth)
    expect(receiveState).toBe(initialStore.auth)
  })
})