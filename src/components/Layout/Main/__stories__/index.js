/* eslint-disable jsx-a11y/href-no-hash,jsx-a11y/anchor-has-content */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LayoutMain from '../component'

const props = {
  children: <div style={{ backgroundColor: '#EEE', height: '300px', padding: '50px', textAlign: 'center' }}>some body</div>,
  toggleNav: action('toggle'),
  Link: fieldProps => <a href="#" {...fieldProps} />
}

storiesOf('Layout -> Main', module)
  .addDecorator((story, context) => (
    <div style={Object.assign({ marginTop: '50px' }, context.story.includes('desktop') ? { minWidth: '600px' } : {})}>{story()}</div>
  ))
  .addWithInfo('desktop', '', () => (
    <LayoutMain {...props} />
  ))
  .addWithInfo('mobile - hide menu', '', () => (
    <LayoutMain {...props} />
  ))
  .addWithInfo('mobile - open menu', '', () => (
    <LayoutMain {...props} isOpen />
  ))