import React from 'react'
import { shallow } from 'enzyme'
import PageRegister from '../component'

describe('', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      handleSubmit: func => () => func(),
      signupAuth: () => true
    }
    const component = shallow(<PageRegister {...defaultProps} />)
    component.setProps(props)
    return {
      form: component.find('Form'),
      email: component.find('Field[name="email"]'),
      pass: component.find('Field[name="pass"]'),
      tryPass: component.find('Field[name="tryPass"]'),
      accepted: component.find('Field[name="accepted"]'),
      submit: component.find('Form g[tag="button"]'),
      loader: component.find('img[alt="loading"]]'),
      alertBox: component.find('Alert'),
      succesBox: component.find('CardText')
    }
  }

  it('default', () => {
    const fields = setup()
    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.tryPass).toHaveLength(1)
    expect(fields.accepted).toHaveLength(1)

    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(false)

    expect(fields.loader).toHaveLength(0)
    expect(fields.alertBox).toHaveLength(0)
    expect(fields.succesBox).toHaveLength(0)
  })

  it('invalid', () => {
    const fields = setup({ invalid: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.tryPass).toHaveLength(1)
    expect(fields.accepted).toHaveLength(1)

    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(true)

    expect(fields.loader).toHaveLength(0)
    expect(fields.alertBox).toHaveLength(0)
    expect(fields.succesBox).toHaveLength(0)
  })

  it('submitting', () => {
    const fields = setup({ submitting: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.tryPass).toHaveLength(1)
    expect(fields.accepted).toHaveLength(1)
    expect(fields.loader).toHaveLength(1)

    expect(fields.submit).toHaveLength(0)
    expect(fields.alertBox).toHaveLength(0)
    expect(fields.succesBox).toHaveLength(0)
  })

  it('submitSucceeded', () => {
    const fields = setup({ submitSucceeded: true })

    expect(fields.succesBox).toHaveLength(1)

    expect(fields.form).toHaveLength(0)
    expect(fields.email).toHaveLength(0)
    expect(fields.pass).toHaveLength(0)
    expect(fields.tryPass).toHaveLength(0)
    expect(fields.accepted).toHaveLength(0)
    expect(fields.loader).toHaveLength(0)
    expect(fields.submit).toHaveLength(0)
    expect(fields.alertBox).toHaveLength(0)
  })

  it('submitFailed', () => {
    const fields = setup({ submitFailed: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.tryPass).toHaveLength(1)
    expect(fields.accepted).toHaveLength(1)
    expect(fields.alertBox).toHaveLength(1)

    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(false)

    expect(fields.loader).toHaveLength(0)
    expect(fields.succesBox).toHaveLength(0)
  })

  it('submited should be call handleSubmit => signupAuth', () => {
    const spySignupAuth = jest.fn()
    const spyHandleSubmit = jest.fn(func => () => func('fake'))

    const component = shallow(<PageRegister handleSubmit={spyHandleSubmit} signupAuth={spySignupAuth} />)
    component.find('Form').first().simulate('submit')

    expect(spyHandleSubmit).toHaveBeenCalledTimes(1)
    expect(spyHandleSubmit).toHaveBeenCalledWith(spySignupAuth)
    expect(spySignupAuth).toHaveBeenCalledTimes(1)
    expect(spySignupAuth).toHaveBeenCalledWith('fake')
  })
})