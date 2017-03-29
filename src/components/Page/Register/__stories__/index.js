/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import PageRegister from '../component'

const props = {
  handleSubmit: func => () => func(),
  signupAuth: action('signupAuth'),
  Field: fieldProps => <fieldProps.component {...fieldProps} />,
  Link: fieldProps => <a href="#" {...fieldProps}>{fieldProps.children}</a>
}

storiesOf('Page -> Register', module)
  .addDecorator(story => <div style={{ width: '95%' }}>{story()}</div>)
  .addWithInfo('default', 'form when first loaded', () => (
    <PageRegister {...props} />
  ))
  .addWithInfo('invalid', 'form had invalid field', () => (
    <PageRegister {...props} invalid />
  ))
  .addWithInfo('submitting', 'form when submitting', () => (
    <PageRegister {...props} submitting />
  ))
  .addWithInfo('submit Succeeded', 'form when submit Succeeded', () => (
    <PageRegister {...props} submitSucceeded />
  ))
  .addWithInfo('submit Failed', 'form when submit Failed', () => (
    <PageRegister {...props} submitFailed />
  ))
