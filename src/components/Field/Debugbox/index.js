import React, { PropTypes } from 'react'
import { Input, Label } from 'reactstrap'

const Debugbox = ({ show, input }) => (
  <span>
    { show &&
      <span>
        <br />
        <Label check style={{ color: '#ddd' }} >
          <Input {...input} checked={input.value} type="checkbox" />{' '}need failed response
        </Label>
      </span>
    }
  </span>
)

Debugbox.propTypes = {
  show: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool
  })
}

Debugbox.defaultProps = {
  show: false,
  input: {
    name: '',
    value: false
  }
}

export default Debugbox