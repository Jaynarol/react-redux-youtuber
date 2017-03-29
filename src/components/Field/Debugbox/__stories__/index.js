import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FieldDebugbox from '../'

const props = {
  show: false,
  input: {
    name: '',
    value: false
  }
}

storiesOf('Field -> Debugbox', module)
  .addDecorator(story => <div style={{ margin: '50px 20%' }} >{story()}</div>)
  .addWithInfo('default (hide)', '', () => (
    <FieldDebugbox {...props} />
  ))
  .addWithInfo('show', '', () => {
    const newProps = { ...props, show: true }
    return <FieldDebugbox {...newProps} />
  })
  .addWithInfo('checked', '', () => {
    const newProps = { show: true, input: { value: true } }
    return <FieldDebugbox {...newProps} />
  })