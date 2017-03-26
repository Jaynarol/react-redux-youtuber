import Promise from 'bluebird'
import { SubmissionError } from 'redux-form'
import FakeServer from '../utils/FakeServer'

export const signupAuth = ({ email, pass }) => () => (
  Promise
    .try(() => FakeServer.postRegister(email, pass))
    .then(({ success, error }) => {
      if (!success) {
        throw new SubmissionError(error)
      }
    })
)