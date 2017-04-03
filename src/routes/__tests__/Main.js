import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { RouteMain } from '../'

jest.mock('../../components/Layout/Main', () => 'LayoutMain')
jest.mock('../../components/Page/Youtuber', () => jest.fn(() => <p>PageYoutuber</p>))
jest.mock('../../components/Page/Login', () => jest.fn(() => <p>PageLogin</p>))
jest.mock('../../components/Page/Register', () => jest.fn(() => <p>PageRegister</p>))

describe('RouteMain', () => {
  const route = path => mount(
    <MemoryRouter initialEntries={[path]}>
      <RouteMain />
    </MemoryRouter>
  )

  it('path "/" should be render PageYoutuber', () => {
    const html = route('/')
    expect(html.text()).toBe('PageYoutuber')
  })

  it('path "/login" should be render PageLogin', () => {
    const html = route('/login')
    expect(html.text()).toBe('PageLogin')
  })

  it('path "/login" should be render PageLogin', () => {
    const html = route('/register')
    expect(html.text()).toBe('PageRegister')
  })
})