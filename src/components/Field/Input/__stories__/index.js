import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import FieldInput from '../'

const props = {
  label: 'some label',
  type: 'text',
  icon: String.fromCharCode(9829),
  input: {
    name: '',
    value: '',
    onChange: () => action('change text')
  },
  meta: {
    touched: false,
    submitting: false,
    error: null
  }
}

storiesOf('Field -> Input', module)
  .addDecorator(story => (
    <div style={{ width: '300px', margin: '50px auto' }}>{story()}</div>
  ))
  .addWithInfo('default', '', () => (
    <FieldInput {...props} />
  ))
  .addWithInfo('typing', '', () => {
    const newProps = { ...props, input: { ...props.input, value: 'typing some text' } }
    return <FieldInput {...newProps} />
  })
  .addWithInfo('submitting', '', () => {
    const newProps = { ...props, meta: { ...props.meta, submitting: true } }
    return <FieldInput {...newProps} />
  })
  .addWithInfo('invalid', '', () => {
    const newProps = { ...props, meta: { ...props.meta, touched: true, error: 'invalid some text' } }
    return <FieldInput {...newProps} />
  })