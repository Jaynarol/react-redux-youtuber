import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FieldCheckbox from '../'

const props = {
  label: 'simple checkbox'
}

storiesOf('Field -> Checkbox', module)
  .addDecorator(story => <div style={{ width: '50%', marginTop: '30px' }}>{story()}</div>)
  .addWithInfo('default', () => (
    <FieldCheckbox {...props} />
  ))
  .addWithInfo('checked', () => (
    <FieldCheckbox {...props} input={{ value: true }} />
  ))
  .addWithInfo('submitting', '', () => (
    <FieldCheckbox {...props} meta={{ submitting: true }} />
  ))
  .addWithInfo('invalid', '', () => (
    <FieldCheckbox {...props} meta={{ touched: true, error: 'required' }} />
  ))