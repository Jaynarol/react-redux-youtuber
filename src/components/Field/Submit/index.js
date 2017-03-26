import React, { PropTypes } from 'react'
import { Button } from 'reactstrap'
import loading from './assets/loading.svg'

const FieldSubmit = ({ label, isDisable, isLoading }) => (
  <Button className="float-right" color="info" disabled={isDisable} >
    { isLoading && <img src={loading} alt="loading" /> }
    {' '}
    {label}
  </Button>
)

FieldSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default FieldSubmit