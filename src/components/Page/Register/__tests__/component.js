import React from 'react'
import { shallow } from 'enzyme'
import PageRegister from '../component'

describe('', () => {
  let component

  beforeEach(() => {
    component = shallow(<PageRegister />)
  })

  it('default', () => {
    const registerButton = component.find('Button[children="Register"]')
    expect(registerButton).toHaveLength(1)
    expect(registerButton.first().props().disabled).toBe(false)
    expect(component.find('Form')).toHaveLength(1)
    expect(component.find('Field[name="email"]')).toHaveLength(1)
    expect(component.find('Field[name="pass"]')).toHaveLength(1)
    expect(component.find('Field[name="tryPass"]')).toHaveLength(1)
    expect(component.find('Field[name="accepted"]')).toHaveLength(1)

    expect(component.find('Alert]')).toHaveLength(0)
    expect(component.find('img[alt="loading"]]')).toHaveLength(0)
    expect(component.find('CardText]')).toHaveLength(0)
  })

})