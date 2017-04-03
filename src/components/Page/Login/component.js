import React, { PropTypes } from 'react'
import { Alert, Button, Card, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Link as LinkRouter } from 'react-router-dom'
import { Field as FieldReduxForm } from 'redux-form'
import { FieldInput, FieldCheckbox } from '../../Field'
import loading from '../../_assets_/imgs/loading.svg'

const PageLogin = ({ invalid, submitting, submitFailed, handleSubmit, signinAuth, Field, Link }) => (
  <Row style={{ marginTop: '50px' }}>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle style={{ marginBottom: '30px' }} >Sign in</CardTitle>
        { submitFailed &&
          <Alert color="danger">
            <strong>Login Failed!</strong>
          </Alert>
        }
        <Form onSubmit={handleSubmit(signinAuth)} >
          <Field component={FieldInput} name="email" label="Email" type="text" icon="@" />
          <Field component={FieldInput} name="pass" label="Retry Password" type="password" icon="&#9919;" />
          <Field component={FieldCheckbox} name="remember" label="Remember me" type="checkbox" />
          <hr />
          { submitting ?
            <Row><Col className="text-center" ><img src={loading} alt="loading" /></Col></Row>
            :
            <FormGroup>
              <small>
                <Link to="/register" >Register</Link>{' | '}
                <Link to="/" >Forgot password?</Link>
              </small>
              <Button type="submit" className="float-right" color="info" disabled={invalid} >Login</Button>
            </FormGroup>
          }
        </Form>
      </Card>
    </Col>
  </Row>
)

PageLogin.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  submitFailed: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  signinAuth: PropTypes.func.isRequired,
  Field: PropTypes.func,
  Link: PropTypes.func
}

PageLogin.defaultProps = {
  invalid: false,
  submitting: false,
  submitFailed: false,
  Field: FieldReduxForm,
  Link: LinkRouter
}

export default PageLogin
