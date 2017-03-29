import React from 'react'
import { shallow } from 'enzyme'
import PageRegister from '../component'

const expectDisabled = exDisabled => component => selectors => {
  selectors.forEach(selector => {
    const element = component.find(selector)
    expect(element).toHaveLength(1)
    const disabled = element.first().props().disabled
    if (disabled) {
      expect(disabled).toBe(exDisabled)
    }
  })
}
const expectShowAndEnable = expectDisabled(false)
const expectShowButDisabled = expectDisabled(true)
const expectNotShow = component => selectors => {
  selectors.forEach(selector => {
    expect(component.find(selector)).toHaveLength(0)
  })
}

describe('', () => {
  let component

  beforeEach(() => {
    component = shallow(<PageRegister />)
  })

  it('default', () => {
    expectShowAndEnable(component)([
      'Form',
      'Field[name="email"]',
      'Field[name="pass"]',
      'Field[name="tryPass"]',
      'Field[name="accepted"]',
      'Button[children="Register"]'
    ])
    expectNotShow(component)([
      'Alert',
      'img[alt="loading"]]',
      'CardText'
    ])
  })

  it('submitting', () => {
    component.setProps({ submitting: true })

    expectShowAndEnable(component)([
      'Form',
      'img[alt="loading"]]'
    ])
    expectShowButDisabled(component)([
      'Field[name="email"]',
      'Field[name="pass"]',
      'Field[name="tryPass"]',
      'Field[name="accepted"]'
    ])
    expectNotShow(component)([
      'Button[children="Register"]',
      'Alert',
      'CardText'
    ])
  })

  it('submitSucceeded', () => {
    component.setProps({ submitSucceeded: true })

    expectShowAndEnable(component)([
      'CardText'
    ])
    expectNotShow(component)([
      'Form',
      'Field[name="email"]',
      'Field[name="pass"]',
      'Field[name="tryPass"]',
      'Field[name="accepted"]',
      'Button[children="Register"]',
      'Alert'
    ])
  })

  it('submitFailed', () => {
    component.setProps({ submitFailed: true })

    expectShowAndEnable(component)([
      'Alert',
      'Form',
      'Field[name="email"]',
      'Field[name="pass"]',
      'Field[name="tryPass"]',
      'Field[name="accepted"]'
    ])
    expectShowButDisabled(component)([
      'Button[children="Register"]'
    ])
    expectNotShow(component)([
      'img[alt="loading"]]',
      'CardText'
    ])
  })
})