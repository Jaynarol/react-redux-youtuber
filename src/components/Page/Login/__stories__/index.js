/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Col, Container, Row } from 'reactstrap'
import PageLogin from '../component'

const props = {
  handleSubmit: func => () => func(),
  signinAuth: action('signinAuth'),
  Field: fieldProps => <fieldProps.component {...fieldProps} />,
  Link: fieldProps => <a href="#" {...fieldProps}>{fieldProps.children}</a>
}

storiesOf('Page -> Login', module)
  .addDecorator(story => <Container><Row><Col>{story()}</Col></Row></Container>)
  .addWithInfo('default', '', () => (
    <PageLogin {...props} />
  ))
  .addWithInfo('invalid', '', () => (
    <PageLogin {...props} invalid />
  ))
  .addWithInfo('submitting', '', () => (
    <PageLogin {...props} submitting />
  ))
  .addWithInfo('submitFailed', '', () => (
    <PageLogin {...props} submitFailed />
  ))