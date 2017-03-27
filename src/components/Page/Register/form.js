import { reduxForm } from 'redux-form'
import Validator, { required, email, minLength, same, maxLength } from '../../../utils/Validate'
import PageRegister from './component'

const initialValues = {
  email: 'example@domain.com',
  pass: 'password',
  tryPass: 'password',
  accepted: true
}

const validate = Validator({
  email: [required, email],
  pass: [required, minLength(8), maxLength(30)],
  tryPass: [required, same('pass')],
  accepted: [required]
})

const form = reduxForm({
  form: 'register',
  destroyOnUnmount: true,
  validate
})(PageRegister)

export {
  initialValues
}
export default form