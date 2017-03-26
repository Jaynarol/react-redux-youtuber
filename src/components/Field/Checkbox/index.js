import React, { PropTypes } from 'react'
import { FormGroup, Input, Label, UncontrolledTooltip } from 'reactstrap'

const FieldCheckbox = ({ input, label, meta: { touched, error } }) => {
  const fieldId = `id-check-${input.name}`
  return (
    <FormGroup check className="clearfix" >
      <Label check id={fieldId} className="float-right" >
        <Input {...input} checked={input.value} type="checkbox" />{' '}
        {label}
      </Label>
      <UncontrolledTooltip placement="left" isOpen={touched && !!error} target={fieldId} className="field-input-tooltip" >
        {error}
      </UncontrolledTooltip >
    </FormGroup>
  )
}

FieldCheckbox.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export default FieldCheckbox