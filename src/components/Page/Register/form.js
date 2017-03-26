import Validator, { required, email, minLength, same, maxLength } from '../../../utils/Validate'

export const initialValues = {
  email: 'example@domain.com',
  pass: 'password',
  tryPass: 'password',
  accepted: true
}

export const validate = Validator({
  email: [required, email],
  pass: [required, minLength(8), maxLength(30)],
  tryPass: [required, same('pass')],
  accepted: [required]
})