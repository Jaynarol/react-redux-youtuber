import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FieldCheckbox from '../'

const props = {
  label: 'simple checkbox',
  input: {
    name: '',
    value: false
  },
  meta: {
    touched: false,
    submitting: false,
    error: null
  }
}

storiesOf('Field -> Checkbox', module)
  .addDecorator(story => <div style={{ width: '50%', marginTop: '30px' }}>{story()}</div>)
  .addWithInfo('default', () => (
    <FieldCheckbox {...props} />
  ))
  .addWithInfo('checked', () => {
    const newProps = { ...props, input: { ...props.input, value: true } }
    return <FieldCheckbox {...newProps} />
  })
  .addWithInfo('submitting', '', () => {
    const newProps = { ...props, meta: { ...props.meta, submitting: true } }
    return <FieldCheckbox {...newProps} />
  })
  .addWithInfo('invalid', '', () => {
    const newProps = { ...props, meta: { ...props.meta, touched: true, error: 'required' } }
    return <FieldCheckbox {...newProps} />
  })