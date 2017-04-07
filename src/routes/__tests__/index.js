import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import Routes from '../'

jest.mock('../AppRoute', () => jest.fn(({ component }) => <span>{component}</span>))
jest.mock('../../components/Layout/Main', () => 'LayoutMain')
jest.mock('../../components/Page/Youtuber', () => 'PageYoutuber')
jest.mock('../../components/Page/Login', () => 'PageLogin')
jest.mock('../../components/Page/Register', () => 'PageRegister')

describe('RouteMain', () => {
  const route = path => mount(
    <MemoryRouter initialEntries={[path]}>
      <Routes />
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