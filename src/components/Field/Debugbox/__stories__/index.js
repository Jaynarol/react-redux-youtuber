import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FieldDebugbox from '../'

storiesOf('Field -> Debugbox', module)
  .addDecorator(story => <div style={{ margin: '50px 20%' }}>{story()}</div>)
  .addWithInfo('default (hide)', '', () => (
    <FieldDebugbox />
  ))
  .addWithInfo('show', '', () => (
    <FieldDebugbox show />
  ))
  .addWithInfo('checked', '', () => (
    <FieldDebugbox show input={{ value: true }} />
  ))