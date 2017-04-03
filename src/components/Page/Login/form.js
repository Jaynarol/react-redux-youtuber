import { reduxForm } from 'redux-form'
import Validator, { required, email, minLength, maxLength } from '../../../utils/Validate'
import compose from './compose'

export const initialValues = {
  email: 'example@domain.com',
  pass: 'password',
  remember: true
}

export const validates = {
  email: [required, email],
  pass: [required, minLength(8), maxLength(30)],
  remember: []
}

export default reduxForm({
  form: 'login',
  destroyOnUnmount: true,
  validate: Validator(validates)
})(compose)