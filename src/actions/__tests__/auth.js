/* eslint-disable prefer-arrow-callback */
import { SubmissionError } from 'redux-form'
import Server from '../../utils/Server'
import { signupAuth } from '../auth'

describe('Auth Reducer', () => {
  it('signupAuth should be fulfilled', () => {
    const user = {
      email: '',
      pass: ''
    }
    Server.postRegister = jest.fn(() => Promise.resolve({
      success: true
    }))

    return signupAuth(user)()
      .then(receive => {
        expect(Server.postRegister).toHaveBeenCalledTimes(1)
        expect(receive).toBe(true)
      })
  })

  it('signupAuth should be rejected', () => {
    const user = {
      email: '',
      pass: ''
    }
    const errorMessage = {
      email: 'something error'
    }
    Server.postRegister = jest.fn(() => Promise.resolve({
      success: false,
      message: errorMessage
    }))

    return signupAuth(user)()
      .then(() => {
        throw new Error('signupAuth should be throw SubmissionError')
      })
      .catch(receive => {
        expect(Server.postRegister).toHaveBeenCalledTimes(1)
        expect(receive).toBeInstanceOf(SubmissionError)
        expect(receive.errors).toEqual(errorMessage)
      })
  })
})