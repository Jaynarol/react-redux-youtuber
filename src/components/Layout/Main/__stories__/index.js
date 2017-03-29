/* eslint-disable jsx-a11y/href-no-hash,jsx-a11y/anchor-has-content */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import LayoutMain from '../component'

const props = {
  children: <div style={{ backgroundColor: '#EEE', height: '500px', padding: '50px', textAlign: 'center' }}>some body</div>,
  isOpen: false,
  toggleNav: () => action('toggle'),
  Link: fieldProps => <a href="#" {...fieldProps} />
}

storiesOf('Layout -> Main', module)
  .addWithInfo('desktop', '', () => (
    <div style={{ minWidth: '800px', marginTop: '50px' }}>
      <LayoutMain {...props} />
    </div>
  ))
  .addWithInfo('mobile - hide menu', '', () => (
    <div style={{ marginTop: '50px' }}>
      <LayoutMain {...props} />
    </div>
  ))
  .addWithInfo('mobile - open menu', '', () => {
    const newProps = { ...props, isOpen: true }
    return (
      <div style={{ marginTop: '50px' }}>
        <LayoutMain {...newProps} />
      </div>
    )
  })