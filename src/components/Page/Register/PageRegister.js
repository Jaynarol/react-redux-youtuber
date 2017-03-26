import React, { PropTypes } from 'react'
import { Card, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'
import { FieldInput, FieldCheckbox, FieldSubmit } from '../../Field'

const PageRegister = ({ invalid, submitting, signupAuth, handleSubmit }) => (
  <Row style={{ marginTop: '50px' }}>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle>Register</CardTitle>
        <Form onSubmit={handleSubmit(signupAuth)} style={{ marginTop: '20px' }} >
          <Field component={FieldInput} name="email" label="Email" type="text" icon="@" />
          <Field component={FieldInput} name="pass" label="Password" type="password" icon="&#9919;" />
          <Field component={FieldInput} name="tryPass" label="Retry Password" type="password" icon="&#9919;" />
          <Field component={FieldCheckbox} name="accepted" label="Accepted Policy" />
          <hr />
          <FormGroup>
            <Link to="/login" >Login</Link>{' | '}
            <Link to="/" >Forgot password?</Link>
            <FieldSubmit label="Register" isDisable={invalid || submitting} isLoading={submitting} />
          </FormGroup>
        </Form>
      </Card>
    </Col>
  </Row>
)


PageRegister.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  signupAuth: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PageRegister
