import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label, UncontrolledTooltip } from 'reactstrap'

const FieldCheckbox = ({ label, input, meta: { touched, submitting, error } }) => {
  const fieldId = `id-check-${input.name}`
  return (
    <FormGroup check className="clearfix" >
      <Label check id={fieldId} className="float-right" >
        <Input {...input} type="checkbox" disabled={submitting} />{' '}
        {label}
      </Label>
      <UncontrolledTooltip placement="left" isOpen={touched && !!error} target={fieldId} className="field-input-tooltip" >
        {error}
      </UncontrolledTooltip>
    </FormGroup>
  )
}

FieldCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
    error: PropTypes.string
  })
}

FieldCheckbox.defaultProps = {
  input: {
    name: '',
    value: false
  },
  meta: {
    touched: false,
    submitting: false,
    error: null
  }
}

export default FieldCheckbox