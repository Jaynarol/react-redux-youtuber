import React from 'react'
import { shallow } from 'enzyme'
import AppRoute from '../component'
import { GUEST, MEMBER } from '../type'

describe('', () => {
  const defaultProps = {
    component: () => <span>Component</span>,
    Redirect: () => <span>Redirect</span>,
    Route: ({ render }) => render()
  }
  const setup = (props = {}) => {
    const component = shallow(<AppRoute {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('unknown userType should be redirect to /', () => {
    const routeInvalidUserType = setup({
      permit: [MEMBER],
      userType: 'OTHER'
    }).dive()
    expect(routeInvalidUserType.name()).toBe('Redirect')
    expect(routeInvalidUserType.prop('to')).toBe('/')

    const routeEmptyPermit = setup({
      permit: [],
      userType: MEMBER
    }).dive()
    expect(routeEmptyPermit.name()).toBe('Redirect')
    expect(routeEmptyPermit.prop('to')).toBe('/')
  })

  it('permit not match should be redirect', () => {
    const routeMember = setup({
      permit: [MEMBER],
      userType: GUEST
    }).dive()

    expect(routeMember.name()).toBe('Redirect')
    expect(routeMember.prop('to')).toBe('/login')

    const routeGuest = setup({
      permit: [GUEST],
      userType: MEMBER
    }).dive()
    expect(routeGuest.name()).toBe('Redirect')
    expect(routeGuest.prop('to')).toBe('/')
  })

  it('permit match should be render component', () => {
    const routeGuest = setup({
      permit: [GUEST],
      userType: GUEST
    }).dive()
    expect(routeGuest.name()).toBe('component')

    const routeMember = setup({
      permit: [MEMBER],
      userType: MEMBER
    }).dive()
    expect(routeMember.name()).toBe('component')
  })

  it('permit both MEMBER and GUEST should be render component', () => {
    const routeGuest = setup({
      permit: [GUEST, MEMBER],
      userType: GUEST
    }).dive()
    expect(routeGuest.name()).toBe('component')

    const routeMember = setup({
      permit: [GUEST, MEMBER],
      userType: MEMBER
    }).dive()
    expect(routeMember.name()).toBe('component')
  })
})