
export const initialValues = {
  email: '',
  pass: '',
  tryPass: '',
  accepted: false
}

export const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.pass) {
    errors.pass = 'Required'
  } else if (values.pass.length < 8) {
    errors.pass = 'Must length more than 8'
  }

  if (!values.tryPass) {
    errors.tryPass = 'Required'
  } else if (values.pass !== values.tryPass) {
    errors.tryPass = 'Must same Password'
  }

  if (!values.accepted) {
    errors.accepted = 'Required'
  }

  return errors
}