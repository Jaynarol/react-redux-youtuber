import React, { PropTypes } from 'react'
import { Alert, Button, ButtonGroup, Card, CardText, CardTitle, Col, Form, FormGroup, Row } from 'reactstrap'
import { Field as FieldReduxForm } from 'redux-form'
import { Link as LinkRouter } from 'react-router-dom'
import { FieldInput, FieldCheckbox, Debugbox } from '../../Field'
import loading from '../../_assets_/imgs/loading.svg'
import style from './_assets_/style.css'

const PageRegister = ({ invalid, submitting, submitSucceeded, submitFailed, handleSubmit, signupAuth, Field, Link }) => (
  <Row className={style.box} >
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle className={style.title} >Register</CardTitle>
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
            <FormGroup>
              { submitting ?
                <Row><Col className="text-center" ><img src={loading} alt="loading" /></Col></Row>
                :
                <Row>
                  <Col>
                    <ButtonGroup size="sm" >
                      <Button tag={Link} color="link" to="/login" >Login</Button>
                      <Button tag={Link} color="link" to="/" >Forgot password?</Button>
                    </ButtonGroup>
                  </Col>
                  <Col className="text-right" >
                    <Button color="info" disabled={invalid} >Register</Button>
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
  handleSubmit: PropTypes.func,
  signupAuth: PropTypes.func,
  Field: PropTypes.func,
  Link: PropTypes.func
}

PageRegister.defaultProps = {
  invalid: false,
  submitting: false,
  submitSucceeded: false,
  submitFailed: false,
  handleSubmit: func => func(),
  signupAuth: () => null,
  Field: FieldReduxForm,
  Link: LinkRouter
}

export default PageRegister
