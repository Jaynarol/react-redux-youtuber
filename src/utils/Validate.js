export const required = value => (
  !value ?
    'Required' : undefined
)

export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined
)

export const maxLength = max => value => (
   value && value.length > max ?
     `Must be less than or equal ${max} characters` : undefined
)

export const minLength = min => value => (
  value && value.length < min ?
    `Must be more than or equal ${min} characters` : undefined
)

export const same = field => (value, values) => (
  value && values[field] && value !== values[field] ?
    `Must be same field ${field}` : undefined
)

const Validator = validates => values => {
  const errors = {}
  Object.keys(values).forEach(name => {
    if (validates[name]) {
      validates[name].some(checker => {
        const invalid = checker(values[name], values)
        if (invalid) {
          errors[name] = invalid
        }
        return !!invalid
      })
    }
  })
  return errors
}

export default Validator