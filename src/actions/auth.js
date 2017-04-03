import { SubmissionError } from 'redux-form'
import Server from '../utils/Server'
import TYPE from './types'

export const signupAuth = ({ email, pass }) => () => (
  Server.postRegister(email, pass)
      .then(({ success, message }) => {
        if (!success) {
          throw new SubmissionError(message)
        }
        return true
      })
)

export const signinAuth = ({ email, pass, remember }) => dispatch => (
  Server.postLogin(email, pass, remember)
    .then(({ success, message, token }) => {
      if (!success) {
        throw new SubmissionError(message)
      }
      return dispatch({
        type: TYPE.AUTH.SIGNIN,
        payload: { email, token }
      })
    })
)


export const signoutAuth = () => ({
  type: TYPE.AUTH.SIGNOUT
})

