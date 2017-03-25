import React from 'react'
import { Button, Card, CardTitle, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const PageLogin = () => (
  <Row style={{ marginTop: '50px' }}>
    <Col sm={{ size: 6, offset: 3 }}>
      <Card block>
        <CardTitle className="panel-title">Sign in</CardTitle>
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon>@</InputGroupAddon>
              <Input placeholder="Email" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon>&#9919;</InputGroupAddon>
              <Input placeholder="Password" type="password" />
            </InputGroup>
          </FormGroup>
          <FormGroup check className="clearfix">
            <Label check className="float-right">
              <Input type="checkbox" />{' '}
              Remember me
            </Label>
          </FormGroup>
          <FormGroup>
            <Link to="/register">Register</Link>{' | '}
            <Link to="/register">Forgot password?</Link>
            <Button className="float-right" color="info" >Login</Button>
          </FormGroup>
        </Form>
      </Card>
    </Col>
  </Row>
)

export default PageLogin
