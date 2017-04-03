import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import FieldInput from '../component'

const props = {
  label: 'some label',
  type: 'text',
  icon: String.fromCharCode(9829),
  input: {
    onChange: action('change text')
  }
}

storiesOf('Field -> Input', module)
  .addDecorator(story => (
    <div style={{ width: '300px', margin: '50px auto' }}>{story()}</div>
  ))
  .addWithInfo('default', '', () => (
    <FieldInput {...props} />
  ))
  .addWithInfo('type text', '', () => (
    <FieldInput {...props} input={{ ...props.input, value: 'typing some text' }} />
  ))
  .addWithInfo('type password', '', () => (
    <FieldInput {...props} type="password" input={{ ...props.input, value: 'typing some text' }} />
  ))
  .addWithInfo('submitting', '', () => (
    <FieldInput {...props} meta={{ submitting: true }} />
  ))
  .addWithInfo('invalid', '', () => (
    <FieldInput {...props} meta={{ touched: true, error: 'invalid some text' }} />
  ))