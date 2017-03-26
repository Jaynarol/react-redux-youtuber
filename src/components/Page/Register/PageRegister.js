import React, { PropTypes } from 'react'
import { Button, Card, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'
import FieldInput from '../../Field/Input'
import FieldCheckbox from '../../Field/Checkbox'

const PageRegister = ({ invalid, handleSubmit, signupAuth }) => (
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
            <Button className="float-right" color="info" disabled={invalid} >Register</Button>
          </FormGroup>
        </Form>
      </Card>
    </Col>
  </Row>
)

PageRegister.propTypes = {
  invalid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signupAuth: PropTypes.func.isRequired
}

export default PageRegister
