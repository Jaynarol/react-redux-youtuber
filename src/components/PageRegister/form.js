import Validator, { required, email, minLength, same, maxLength } from '../../utils/Validate'

export const initialValues = {
  email: '',
  pass: '',
  tryPass: '',
  accepted: false
}

export const validate = Validator({
  email: [required, email],
  pass: [required, minLength(8), maxLength(30)],
  tryPass: [required, same('pass')],
  accepted: [required]
})