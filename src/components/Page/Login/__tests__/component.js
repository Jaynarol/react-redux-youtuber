import React from 'react'
import { shallow } from 'enzyme'
import PageLogin from '../component'

describe('', () => {
  let component
  const defaultProps = {
    handleSubmit: func => () => func(),
    signinAuth: () => null
  }

  beforeEach(() => {
    component = shallow(<PageLogin {...defaultProps} />)
  })

  it('default', () => {
    expect(component.find('Form')).toHaveLength(1)
  })
})