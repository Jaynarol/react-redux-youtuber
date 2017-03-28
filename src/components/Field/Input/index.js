import React, { PropTypes } from 'react'
import { FormGroup, Input, InputGroup, InputGroupAddon, UncontrolledTooltip } from 'reactstrap'

const FieldInput = ({ label, type, icon, input, meta: { touched, submitting, error } }) => {
  const fieldId = `id-${type}-${input.name}`
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon>{icon}</InputGroupAddon>
        <Input {...input} placeholder={label} type={type} id={fieldId} disabled={submitting} />
        <UncontrolledTooltip placement="top right" isOpen={touched && !!error} target={fieldId} className="field-input-tooltip" >
          {error}
        </UncontrolledTooltip >
      </InputGroup>
    </FormGroup>
  )
}

FieldInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
    error: PropTypes.string
  })
}

FieldInput.defaultProps = {
  icon: '',
  input: {
    name: '',
    value: ''
  },
  meta: {
    touched: false,
    submitting: false,
    error: null
  }
}

export default FieldInput