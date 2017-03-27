import React, { PropTypes } from 'react'
import { Alert, Button, Card, CardText, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'
import { FieldInput, FieldCheckbox, FieldSubmit } from '../../Field'
import loading from '../../_assets_/imgs/loading.svg'

const PageRegister = ({ invalid, submitting, submitSucceeded, submitFailed, signupAuth, handleSubmit }) => (
  <Row style={{ marginTop: '50px' }}>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle style={{ marginBottom: '20px' }} >Register</CardTitle>
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
            <Field component={FieldCheckbox} name="accepted" label="Accepted Policy" />
            <hr />
            <FormGroup>
              { submitting ?
                <Row><Col className="text-center" ><img src={loading} alt="loading" /></Col></Row>
                :
                <Row>
                  <Col>
                    <Link to="/login" >Login</Link>{' | '}
                    <Link to="/" >Forgot password?</Link>
                  </Col>
                  <Col className="text-right" >
                    <FieldSubmit label="Register" invalid={invalid} debug />
                  </Col>
                </Row>
              }
            </FormGroup>
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
    </Col>
  </Row>
)


PageRegister.propTypes = {
  invalid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  signupAuth: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default PageRegister
