import Promise from 'bluebird'
import { push } from 'connected-react-router'

export const signupAuth = ({ email, pass }) => dispatch => {
  Promise
    .try(() => ({ email, pass }))
    .then(() => dispatch(push('/login')))
}