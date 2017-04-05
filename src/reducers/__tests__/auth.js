import authReducer from '../auth'
import TYPE from '../../actions/types'
import { initialStore } from '../../store'

describe('Auth Reducer', () => {
  it(TYPE.AUTH.SIGNIN, () => {
    const currentState = initialStore.auth
    const expectedState = {
      email: 'some@email.com',
      token: 'sometoken'
    }
    const receiveState = authReducer(currentState, {
      type: TYPE.AUTH.SIGNIN,
      payload: {
        email: 'some@email.com',
        token: 'sometoken'
      }
    })

    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.AUTH.SIGNOUT, () => {
    const currentState = {
      email: 'some@email.com',
      token: 'sometoken'
    }
    const expectedState = {
      email: '',
      token: ''
    }
    const receiveState = authReducer(currentState, {
      type: TYPE.AUTH.SIGNOUT
    })

    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(initialStore.auth)
  })

  it('initial', () => {
    const receiveState = authReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.auth)
    expect(receiveState).toBe(initialStore.auth)
  })
})