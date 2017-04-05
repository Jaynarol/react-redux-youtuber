import React from 'react'
import { mount } from 'enzyme'
import PageLogin from '../compose'

jest.mock('../component', () => jest.fn(() => <p>PageLogin</p>))

describe('PageLogin Compose', () => {
  it('componentWillMount and Login', () => {
    const redirect = jest.fn()
    const componentWillMount = jest.fn(PageLogin.prototype.componentWillMount)
    PageLogin.prototype.componentWillMount = componentWillMount
    mount(<PageLogin redirect={redirect} isLogin />)

    expect(componentWillMount).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledTimes(1)
  })

  it('componentWillMount and Not login', () => {
    const redirect = jest.fn()
    const componentWillMount = jest.fn(PageLogin.prototype.componentWillMount)
    PageLogin.prototype.componentWillMount = componentWillMount
    mount(<PageLogin redirect={redirect} />)

    expect(componentWillMount).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledTimes(0)
  })

  it('componentWillUpdate and Login', () => {
    const redirect = jest.fn()
    const componentWillUpdate = jest.fn(PageLogin.prototype.componentWillUpdate)
    PageLogin.prototype.componentWillUpdate = componentWillUpdate
    const component = mount(<PageLogin redirect={redirect} />)

    component.setProps({ isLogin: true })
    expect(componentWillUpdate).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledTimes(1)
  })

  it('componentWillUpdate and Not Login', () => {
    const redirect = jest.fn()
    const componentWillUpdate = jest.fn(PageLogin.prototype.componentWillUpdate)
    PageLogin.prototype.componentWillUpdate = componentWillUpdate
    const component = mount(<PageLogin redirect={redirect} />)

    component.setProps({ isLogin: false })
    expect(componentWillUpdate).toHaveBeenCalledTimes(1)
    expect(redirect).toHaveBeenCalledTimes(0)
  })
})