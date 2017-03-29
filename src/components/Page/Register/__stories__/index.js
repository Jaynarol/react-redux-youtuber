/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import PageRegister from '../component'

const props = {
  invalid: false,
  submitting: false,
  submitSucceeded: false,
  submitFailed: false,
  signupAuth: () => action('signupAuth'),
  handleSubmit: () => action('handleSubmit'),
  Field: fieldProps => <fieldProps.component {...fieldProps} />,
  Link: fieldProps => <a href="#" {...fieldProps}>{fieldProps.children}</a>
}

storiesOf('Page -> Register', module)
  .addWithInfo('default', 'form when first loaded', () => (
    <PageRegister {...props} />
  ))
  .addWithInfo('invalid', 'form had invalid field', () => {
    const invalidProps = { ...props, invalid: true }
    return <PageRegister {...invalidProps} />
  })
  .addWithInfo('submitting', 'form when submitting', () => {
    const submittingProps = { ...props, submitting: true }
    return <PageRegister {...submittingProps} />
  })
  .addWithInfo('submit Succeeded', 'form when submit Succeeded', () => {
    const submitSucceededProps = { ...props, submitSucceeded: true }
    return <PageRegister {...submitSucceededProps} />
  })
  .addWithInfo('submit Failed', 'form when submit Failed', () => {
    const submitFailedProps = { ...props, submitFailed: true }
    return <PageRegister {...submitFailedProps} />
  })
