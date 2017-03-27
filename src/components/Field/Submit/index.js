import React, { PropTypes } from 'react'
import { Button, Label } from 'reactstrap'
import { Field } from 'redux-form'

const FieldSubmit = ({ label, invalid, debug }) => (
  <span>
    <Button color="info" disabled={invalid} >{label}</Button>
    { debug &&
      <span>
        <br />
        <Label check style={{ color: '#ddd' }} >
          <Field component="input" name="error" type="checkbox" />{' '}need failed
        </Label>
      </span>
    }
  </span>
)

FieldSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  debug: PropTypes.bool
}

FieldSubmit.defaultProps = {
  debug: false
}

export default FieldSubmit