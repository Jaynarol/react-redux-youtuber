import Promise from 'bluebird'
import { push } from 'connected-react-router'
import FakeServer from '../utils/FakeServer'

export const signupAuth = ({ email, pass }) => () => (
  Promise
    .try(() => FakeServer.postRegister(email, pass))
)