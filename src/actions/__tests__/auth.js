/* eslint-disable prefer-arrow-callback */
import { SubmissionError } from 'redux-form'
import Server from '../../utils/Server'
import { signinAuth, signupAuth } from '../auth'
import TYPE from '../types'

describe('Auth Reducer', () => {
  describe('signupAuth', () => {
    const user = {
      email: 'some@email.com',
      pass: 'password'
    }

    it('should be fulfilled', () => {
      Server.postRegister = jest.fn(() => Promise.resolve({
        success: true
      }))

      return signupAuth(user)()
      .then(receive => {
        expect(Server.postRegister).toHaveBeenCalledTimes(1)
        expect(receive).toBe(true)
      })
    })

    it('should be rejected', () => {
      const response = {
        success: false,
        message: 'something error'
      }
      Server.postRegister = jest.fn(() => Promise.resolve(response))

      return signupAuth(user)()
      .then(() => {
        throw new Error('signupAuth should be throw SubmissionError')
      })
      .catch(receive => {
        expect(Server.postRegister).toHaveBeenCalledTimes(1)
        expect(receive).toBeInstanceOf(SubmissionError)
        expect(receive.errors).toEqual(response.message)
      })
    })
  })

  describe('signInAuth', () => {
    const user = {
      email: 'some@email.com',
      pass: 'password'
    }

    it('should be fulfilled', () => {
      const response = {
        success: true,
        message: {},
        token: 'sometoken'
      }
      Server.postLogin = jest.fn(() => Promise.resolve(response))
      const dispatch = jest.fn(action => action)

      return signinAuth(user)(dispatch)
        .then(receive => {
          expect(Server.postLogin).toHaveBeenCalledTimes(1)
          expect(dispatch).toHaveBeenCalledTimes(1)
          expect(receive).toEqual({
            type: TYPE.AUTH.SIGNIN,
            payload: {
              email: user.email,
              token: response.token
            }
          })
        })
    })

    it('should be rejected', () => {
      const errorMessage = {
        email: 'something error'
      }
      Server.postLogin = jest.fn(() => Promise.resolve({
        success: false,
        message: errorMessage
      }))

      return signinAuth(user)()
        .then(() => {
          throw new Error('signinAuth should be throw SubmissionError')
        })
        .catch(receive => {
          expect(Server.postLogin).toHaveBeenCalledTimes(1)
          expect(receive).toBeInstanceOf(SubmissionError)
          expect(receive.errors).toEqual(errorMessage)
        })
    })
  })
})