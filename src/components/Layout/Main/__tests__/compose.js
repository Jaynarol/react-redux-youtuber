import React from 'react'
import { shallow } from 'enzyme'
import LayoutMain from '../compose'

jest.mock('../component', () => jest.fn(({ toggleNav }) => <span onClick={toggleNav} />))

describe('LayoutMain Compose', () => {
  it('toggle isOpen', () => {
    const component = shallow(<LayoutMain />)
    expect(component.prop('isOpen')).toBe(false)
    expect(typeof component.prop('toggle')).toBe('function')

    component.dive().simulate('click')
    expect(component.prop('isOpen')).toBe(true)

    component.dive().simulate('click')
    expect(component.prop('isOpen')).toBe(false)
  })
})