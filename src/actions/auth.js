import { SubmissionError } from 'redux-form'
import Server from '../utils/Server'

export const signupAuth = ({ email, pass }) => () => (
  Server.postRegister(email, pass)
      .then(({ success, message }) => {
        if (!success) {
          throw new SubmissionError(message)
        }
        return true
      })

)