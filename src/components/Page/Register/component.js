import React, { PropTypes } from 'react'
import { Alert, Button, Card, CardText, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Field as FieldReduxForm } from 'redux-form'
import { Link as LinkRouter } from 'react-router-dom'
import { FieldInput, FieldCheckbox, Debugbox } from '../../Field'
import loading from '../../_assets_/imgs/loading.svg'

const PageRegister = ({ invalid, submitting, submitSucceeded, submitFailed, handleSubmit, signupAuth, Field, Link }) => (
  <Row style={{ marginTop: '50px' }} >
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle style={{ marginBottom: '30px' }} >Register</CardTitle>
        { submitFailed && !submitting &&
          <Alert color="danger">
            <strong>Oh snap!</strong> Something wrong.
          </Alert>
        }
        { !submitSucceeded &&
          <Form onSubmit={handleSubmit(signupAuth)} >
            <Field component={FieldInput} name="email" label="Email" type="text" icon="@" />
            <Field component={FieldInput} name="pass" label="Password" type="password" icon="&#9919;" />
            <Field component={FieldInput} name="tryPass" label="Retry Password" type="password" icon="&#9919;" />
            <Field component={FieldCheckbox} name="accepted" label="Accepted Policy" type="checkbox" />
            <hr />
            { submitting ?
              <Row><Col className="text-center" ><img src={loading} alt="loading" /></Col></Row>
              :
              <FormGroup className="" >
                <small>
                  <Link to="/login" >Login</Link>{' | '}
                  <Link to="/" >Forgot password?</Link>
                </small>
                <Button className="float-right" color="info" disabled={invalid} >Register</Button>
              </FormGroup>
            }
          </Form>
        }
        { submitSucceeded &&
          <div>
            <CardText>
              You have successfully registered.<br />
              Thanks so much for joining us.
            </CardText>
            <Button tag={Link} to="/login" className="float-right" >go to Login Page</Button>
          </div>
        }
      </Card>
      <div className="text-right" >
        <Field component={Debugbox} name="error" type="checkbox" show />
      </div>
    </Col>
  </Row>
)


PageRegister.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  submitFailed: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  signupAuth: PropTypes.func.isRequired,
  Field: PropTypes.func,
  Link: PropTypes.func
}

PageRegister.defaultProps = {
  invalid: false,
  submitting: false,
  submitSucceeded: false,
  submitFailed: false,
  Field: FieldReduxForm,
  Link: LinkRouter
}

export default PageRegister
