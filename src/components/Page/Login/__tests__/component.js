import React from 'react'
import { shallow } from 'enzyme'
import PageLogin from '../component'

describe('PageLogin Component', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      handleSubmit: func => () => func(),
      signinAuth: () => null
    }
    const component = shallow(<PageLogin {...defaultProps} />)
    component.setProps(props)

    return {
      form: component.find('[tag="form"]'),
      email: component.find('Field[name="email"]'),
      pass: component.find('Field[name="pass"]'),
      remember: component.find('Field[name="remember"]'),
      submit: component.find('[type="submit"]'),
      alertBox: component.find('[color="danger"]'),
      loader: component.find('img[alt="loading"]')
    }
  }

  it('default', () => {
    const fields = setup()

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.remember).toHaveLength(1)
    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(false)

    expect(fields.alertBox).toHaveLength(0)
    expect(fields.loader).toHaveLength(0)
  })

  it('invalid', () => {
    const fields = setup({ invalid: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.remember).toHaveLength(1)
    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(true)

    expect(fields.alertBox).toHaveLength(0)
    expect(fields.loader).toHaveLength(0)
  })

  it('submitting', () => {
    const fields = setup({ submitting: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.remember).toHaveLength(1)
    expect(fields.loader).toHaveLength(1)

    expect(fields.submit).toHaveLength(0)
    expect(fields.alertBox).toHaveLength(0)
  })

  it('submitFailed', () => {
    const fields = setup({ submitFailed: true })

    expect(fields.form).toHaveLength(1)
    expect(fields.email).toHaveLength(1)
    expect(fields.pass).toHaveLength(1)
    expect(fields.remember).toHaveLength(1)
    expect(fields.alertBox).toHaveLength(1)
    expect(fields.submit).toHaveLength(1)
    expect(fields.submit.prop('disabled')).toBe(false)

    expect(fields.loader).toHaveLength(0)
  })
})