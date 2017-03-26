import React, { PropTypes } from 'react'
import { FormGroup, Input, InputGroup, InputGroupAddon, UncontrolledTooltip } from 'reactstrap'

const FieldInput = ({ input, label, type, icon, meta: { touched, error } }) => {
  const fieldId = `id-${type}-${input.name}`
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon>{icon}</InputGroupAddon>
        <Input {...input} placeholder={label} type={type} id={fieldId} />
        <UncontrolledTooltip placement="top right" isOpen={touched && !!error} target={fieldId} className="field-input-tooltip" >
          {error}
        </UncontrolledTooltip >
      </InputGroup>
    </FormGroup>
  )
}

FieldInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export default FieldInput