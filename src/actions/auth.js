import Promise from 'bluebird'
import { SubmissionError } from 'redux-form'
import FakeServer from '../utils/FakeServer'

export const signupAuth = ({ email, pass, error = false }) => () => (
  Promise
    .try(() => FakeServer(error).postRegister(email, pass))
    .then(({ success, message }) => {
      if (!success) {
        throw new SubmissionError(message)
      }
    })
)