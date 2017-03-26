import React, { PropTypes } from 'react'
import { Button, Card, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'
import FieldInput from '../FieldInput'
import FieldCheckbox from '../FieldCheckbox'

const muSubmit = values => values

const PageRegister = ({ handleSubmit }) => (
  <Row style={{ marginTop: '50px' }}>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle className="panel-title">Register</CardTitle>
        <Form onSubmit={handleSubmit(muSubmit)} >
          <Field component={FieldInput} name="email" label="Email" type="text" icon="@" />
          <Field component={FieldInput} name="pass" label="Password" type="password" icon="&#9919;" />
          <Field component={FieldInput} name="tryPass" label="Password" type="password" icon="&#9919;" />
          <Field component={FieldCheckbox} name="accepted" label="Accepted Policy" />
          <hr />
          <FormGroup>
            <Link to="/login" >Login</Link>{' | '}
            <Link to="/register" >Forgot password?</Link>
            <Button className="float-right" color="info" >Register</Button>
          </FormGroup>
        </Form>
      </Card>
    </Col>
  </Row>
)

PageRegister.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default PageRegister
