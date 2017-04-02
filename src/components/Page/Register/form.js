import { reduxForm } from 'redux-form'
import Validator, { required, email, minLength, same, maxLength } from '../../../utils/Validate'
import component from './component'

export const initialValues = {
  email: 'example@domain.com',
  pass: 'password',
  tryPass: 'password',
  accepted: true
}

export const validates = {
  email: [required, email],
  pass: [required, minLength(8), maxLength(30)],
  tryPass: [required, same('pass')],
  accepted: [required]
}

export default reduxForm({
  form: 'register',
  destroyOnUnmount: true,
  validate: Validator(validates)
})(component)