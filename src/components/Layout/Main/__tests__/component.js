import React from 'react'
import { shallow } from 'enzyme'
import LayoutMain from '../component'

describe('LayoutMain', () => {
  const defaultProps = {
    children: <span>children</span>,
    toggleNav: () => null,
    signoutAuth: () => null,
    Link: props => <span {...props} />
  }
  const setup = (props = {}) => {
    const component = shallow(<LayoutMain {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const html = setup().html()
    expect(html).not.toContain('Logout')
    expect(html).toContain('Login')
    expect(html).toContain('Register')
  })


  it('Login', () => {
    const html = setup({ isMember: true }).html()
    expect(html).toContain('Logout')
    expect(html).not.toContain('Login')
    expect(html).not.toContain('Register')
  })
})